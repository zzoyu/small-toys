export class Particle {
  // properties
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
  // constructor
  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.velocity = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
    };
  }
  // methods
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    // draw a text on the canvas
    ctx.font = `${this.size}px Arial`;
    ctx.fillStyle = "white";
    ctx.fillText("🌟", this.x, this.y);

    ctx.closePath();
    console.log("draw");
  }
  update() {
    // adding gravity
    this.velocity.y += 0.05;

    // adding friction
    this.velocity.x *= 0.99;
    this.velocity.y *= 0.99;

    // adding velocity to the position
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
