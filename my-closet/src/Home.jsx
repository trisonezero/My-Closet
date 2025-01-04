import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const userRef = ref(db, "users/" + uid);

        onValue(userRef, (snapshot) => {
          const fetchedUserData = snapshot.val();
          if (fetchedUserData) {
            setUserData(fetchedUserData);
          }
        });
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.username}!</h1>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
