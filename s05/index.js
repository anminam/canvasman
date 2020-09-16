import { PaintContainer } from "./PaintContainer.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, 100, 100);

    this.paintList = new PaintContainer(["red", "blue", "green"]);
    document.body.appendChild(this.paintList.getElement());
  }
}

window.onload = () => {
  new App();
};
