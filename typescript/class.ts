class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  drow() {
    console.log("X : " + this.x + " Y : " + this.y);
  }
}

let point = new Point();
point.drow();
