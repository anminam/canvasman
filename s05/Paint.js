export class Paint {
  constructor(color) {
    this.element = document.createElement("li");
    this.element.classList.add("paint");
    this.element.setAttribute("color", color);
    this.element.style.backgroundColor = color;
  }

  getElement() {
    return this.element;
  }
}
