module.exports = class Square {
  width = 0;
  constructor(width: number) {
    this.width = width;
  }
  area() {
    return this.width ** 2;
  }
};
