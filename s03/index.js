class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.x = 0;

    requestAnimationFrame(this.draw.bind(this));
  }

  draw() {
    const c = this.ctx;

    c.beginPath();

    c.arc(60, 60, 50, 0, Math.PI * 2);

    c.stroke();

    c.beginPath();
    c.arc(40, 40, 10, 0, Math.PI * 2);
    c.fillStyle = "rgb(200,0,0)";
    c.fill();
    c.stroke();

    c.beginPath();
    c.arc(80, 40, 10, 0, Math.PI * 2);
    c.stroke();

    c.beginPath();
    c.arc(60, 60, 40, 0, Math.PI);
    c.stroke();

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = () => new App();
