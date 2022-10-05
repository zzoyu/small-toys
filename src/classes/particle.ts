const ParticleType = ["💸", "💵", "💰"];

export class Particle {
  // properties
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
  drawable: string;

  // constructor
  constructor(
    x: number,
    y: number,
    size: number = Math.random() * (50 - 20) + 20
  ) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.velocity = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
    };

    this.drawable = ParticleType[Math.floor(Math.random() * 3)];
  }
  // methods
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    // draw a text on the canvas
    ctx.font = `${this.size}px Arial`;
    ctx.fillStyle = "white";
    ctx.fillText(this.drawable, this.x, this.y);

    ctx.closePath();
    // console.log("draw");
  }
  update(ctx: CanvasRenderingContext2D) {
    // remove the particle
    if (
      this.x + this.size > ctx.canvas.width ||
      this.x - this.size < 0 ||
      this.y + this.size > ctx.canvas.height ||
      this.y - this.size < 0
    ) {
      return false;
    }

    // adding gravity
    this.velocity.y += 0.05;

    // adding friction
    this.velocity.x *= 0.99;
    this.velocity.y *= 0.99;

    // adding velocity to the position
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    return true;
  }
}
