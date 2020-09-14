const PI2 = Math.PI * 2;
const COLORS = [
  "#DDD",
  "#AAA",
  "#F10325",
  "#e10325",
  "#d10325",
  "#c10325",
  "#b10325",
  "#a10325",
];
export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    ctx.save(); //
    ctx.fillStyle = "#000";
    // ctx.beginPath();

    const angle = PI2 / this.sides;
    const angle2 = PI2 / 4;

    ctx.translate(this.x, this.y);

    this.rotate += moveX * 0.08;
    ctx.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      // i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

      // ctx.beginPath();
      // ctx.arc(x, y, 30, 0, PI2, false);
      // ctx.fill();
      ctx.save();
      ctx.fillStyle = COLORS[COLORS.length % i];
      ctx.translate(x, y);
      ctx.rotate((((360 / this.sides) * i + 45) * Math.PI) / 180);
      ctx.beginPath();
      for (let j = 0; j < 4; j++) {
        const x2 = 80 * Math.cos(angle2 * j);
        const y2 = 80 * Math.sin(angle2 * j);
        j == 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }

      ctx.fill();
      ctx.closePath();
      ctx.restore(); //
    }

    ctx.restore();
  }
}
