class Clothing {
  constructor(name, category, tags, img) {
    this.name = name;
    this.category = category;
    this.tags = tags;
    this.img = img;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category) {
    this.category = category;
  }

  getTags() {
    return this.tags;
  }

  setTags(tags) {
    this.tags = tags;
  }

  getImg() {
    return this.img;
  }

  setImg(img) {
    this.img = img;
  }
}

export default Clothing;
