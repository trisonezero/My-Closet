import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import { getDatabase, onValue, ref, set, push, update } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import Clothing from "./Clothing.jsx";

const CreateClothing = () => {
  const [userData, setUserData] = useState(null);
  const [clothingName, setClothingName] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [category, setCategory] = useState("");

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");
  const [img, setImg] = useState("");
  const fileRef = React.useRef(null);

  const navigate = useNavigate();
  const db = getDatabase();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        const uid = user.uid;
        const userRef = ref(db, "users/" + uid);

        onValue(userRef, (snapshot) => {
          const fetchedUserData = snapshot.val();
          if (fetchedUserData) {
            setUserData(fetchedUserData);
          }
        });
      }
    });
  }, [navigate]);

  const handleNewClothing = async (e) => {
    e.preventDefault();

    let finalName;
    if (!clothingName) {
      finalName = "My Clothing";
    } else {
      finalName = clothingName;
    }

    let finalCategory;
    if (!category) {
      finalCategory = "Other";
    } else {
      finalCategory = category;
    }

    let newUserCats = userData.categories;
    if (category === "custom") {
      if (!newUserCats.includes(customCategory)) {
        newUserCats.push(customCategory);
      }
      finalCategory = customCategory;
    }

    const newFormatTags = newTags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    let newUserTags;
    if (userData.tags) {
      newUserTags = userData.tags;
    } else {
      newUserTags = [];
    }
    let finalTags = [];
    if (newFormatTags.length > 0) {
      newUserTags = [...newUserTags, ...newFormatTags];
      newUserTags = Array.from(new Set(newUserTags));
      finalTags = [...tags, ...newFormatTags];
    }

    let finalImg;
    if (!img) {
      finalImg =
        "data:image/jpeg;base64,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";
    } else {
      finalImg = img;
    }

    try {
      await update((ref(db, "users/" + auth.currentUser.uid)), {
        categories: newUserCats,
        tags: newUserTags,
      });

      await push((ref(db, "users/" + auth.currentUser.uid + "/clothings")), {
        name: finalName,
        category: finalCategory,
        tags: finalTags,
        img: finalImg,
      });
    } catch (error) {
      alert(error.message);
      console.error("Register error:", error.message);
    }
  };

  const imgInsert = () => {
    fileRef.current.click();
  };

  const imgChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(await processImg(file));
    } else {
      alert("Please upload a file");
    }
  };

  async function processImg(file) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith("image/")) {
        reject(new Error("Invalid image file"));
        return;
      }

      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxSize = 200;
        canvas.width = maxSize;
        canvas.height = maxSize;

        const scale = Math.min(maxSize / img.width, maxSize / img.height);
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        const offsetX = (maxSize - scaledWidth) / 2;
        const offsetY = (maxSize - scaledHeight) / 2;

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);

        canvas.toBlob((blob) => {
          const blobReader = new FileReader();
          blobReader.onload = (event) => {
            resolve(event.target.result);
          };
          blobReader.readAsDataURL(blob);
        }, "image/jpeg");
      };

      img.onerror = () => reject(new Error("Failed to load image"));

      reader.readAsDataURL(file);
    });

  }

  return (
      <div className="clothing-form-container">
        <form onSubmit={handleNewClothing} className="clothing-form">
          <label htmlFor="clothingName">Clothing Name</label>
          <input
              value={clothingName}
              onChange={(e) => setClothingName(e.target.value)}
              type="text"
              placeholder="Clothing Name"
              id="clothingName"
              name="clothingName"
          />

          <label htmlFor="category">Category</label>
          <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
          >
            <option value="" disabled>
              Select a category
            </option>
            {userData &&
                userData.categories &&
                userData.categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                ))}
            <option value="custom">Custom Category</option>
          </select>

          {category === "custom" && (
              <div>
                <label htmlFor="customCategory">Custom Category</label>
                <input
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    type="text"
                    placeholder="Enter custom category"
                    id="customCategory"
                    name="customCategory"
                />
              </div>
          )}
          <label htmlFor="tags">Tags (Hold Ctrl / Cmd to select multiple)</label>
          <select
              multiple={true}
              value={tags}
              onChange={(e) => {
                const selectedTags = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                );
                setTags(selectedTags);
              }}
              id="tags"
              name="tags"
          >
            {userData &&
                userData.tags &&
                userData.tags.map((tag, index) => (
                    <option key={index} value={tag}>
                      {tag}
                    </option>
                ))}
          </select>

          <label htmlFor="tags">Add new tags (Comma seperated)</label>
          <input
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
              type="text"
              placeholder="New Tags"
              id="newTags"
              name="newTags"
          />

          <button id="imgInsert" type="button" onClick={imgInsert}>
            Insert Image
          </button>
          <input
              onChange={imgChange}
              type="file"
              id="img"
              name="img"
              style={{display: "none"}}
              ref={fileRef}
              accept="image/*"
          />
          {img && (
              <div>
                <p>Preview:</p>
                <img
                    src={img}
                    alt="Uploaded Preview"
                    style={{maxWidth: "100%"}}
                />
              </div>
          )}
          <button id='create-clothing' type="submit">Create Clothing</button>
        </form>
        <div className="clothings-display">
          <h1>My Clothes</h1>
            <ul>
              {userData && userData.clothings ? (Object.keys(userData.clothings).map((key) => (
                  <li key={key}>
                    <strong>{userData.clothings[key].name}</strong> - {userData.clothings[key].category}
                    <br/>
                    <p>{userData.clothings[key].tags ? userData.clothings[key].tags.join(', ') : "No tags"}</p>
                    <br/>
                    <img
                        src={userData.clothings[key].img}
                        alt="Uploaded Preview"
                        style={{maxWidth: "100%"}}
                    />
                  </li>
              ))) : (
              <p>
                Your closet is empty!
              </p>)}
            </ul>
        </div>
      </div>

  );
};

export default CreateClothing;
