import { Paint } from "./Paint.js";
export class PaintContainer {
  constructor(colorList) {
    this.element = document.createElement("ul");
    this.element.classList.add("paint-list");

    this.colors = colorList.map((item) => {
      return new Paint(item);
    });
    this.colors.forEach((paintObj) => {
      this.element.appendChild(paintObj.getElement());
    });
  }

  getElement() {
    return this.element;
  }
}
