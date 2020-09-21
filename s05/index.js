<<<<<<< HEAD
import { Ball } from "./Ball.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.ratio = devicePixelRatio > 1 ? 2 : 1;
    // 원
    this.circle = 20;
    this.xx = this.circle;
    this.yy = this.circle;
    this.moveToX = "right";
    this.moveToY = "down";

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    requestAnimationFrame(this.draw.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.scale(this.ratio, this.ratio);

    this.ball = new Ball(this.circle, this.circle, this.circle);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    switch (this.moveToX) {
      case "right":
        if (this.stageWidth / this.ratio > this.xx + this.circle) {
          this.xx += 1;
        } else {
          this.moveToX = "left";
        }
        break;
      case "left":
        if (this.circle * 2 <= this.xx + this.circle) {
          this.xx -= 1;
        } else {
          this.moveToX = "right";
        }
        break;
    }
    switch (this.moveToY) {
      case "down":
        if (this.stageHeight / this.ratio > this.yy + this.circle) {
          this.yy += 1;
        } else {
          this.moveToY = "up";
        }
        break;
      case "up":
        if (this.circle * 2 <= this.yy + this.circle) {
          this.yy -= 1;
        } else {
          this.moveToY = "down";
        }
        break;
    }

    this.ball.draw(this.ctx, this.xx, this.yy);
    requestAnimationFrame(this.draw.bind(this));
=======
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
>>>>>>> 2f01670913eaeb4f01e7df8a3796e334fe400da8
  }
}

window.onload = () => {
  new App();
};
