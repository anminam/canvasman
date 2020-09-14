class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    window.requestAnimationFrame(this.anmimate.bind(this));
    console.log("a");
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  anmimate() {
    window.requestAnimationFrame(this.anmimate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }
}

window.onLoad = () => {
  const a = new App();
  alert("a");
};
