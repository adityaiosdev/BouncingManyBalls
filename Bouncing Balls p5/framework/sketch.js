let bola=[];
let jumlahbola=100;
let diam=10;

function setup() {
  createCanvas(1000,700);
  background(0);
  for (var i = 0; i < jumlahbola; i++) {
    bola[i] = new Balls(
      i, //ID number
      random(width), //start x coord
      random(height), //start y coord
      random(-8, 8), //start x velocity
      random(-8, 8), //start y velocity
      bola
    );
  }
  frameRate(120); 
}

function draw() {
  background(20);
  for (i = 0; i < jumlahbola; i++) {
        bola[i].move();
        bola[i].display();
      }
    }


class Balls {
  constructor(
    id_ = 0,
    x_,
    y_,
    vx_ = random(-8, 8),
    vy_ = random(-8, 8),
    others_= []) {
    this.id = id_;
    this.x = x_;
    this.y = y_;
    this.vx = vx_;
    this.vy = vy_;
    this.others = others_;
  }
  move() {
    for (var i = this.id + 1; i < jumlahbola; i++) {
      var dx = this.others[i].x - this.x;
      var dy = this.others[i].y - this.y;
      var dist = sqrt(dx * dx + dy * dy);
      if (dist < 0.94 * diam) {
        this.vx = -1 * this.vx;
        this.vy = -1 * this.vy;
        this.others[i].vx = -1 * this.others[i].vx;
        this.others[i].vy = -1 * this.others[i].vy;
        this.x += this.vx;
        this.y += this.vy;
        this.others[i].x+=this.others[i].vx;
        this.others[i].y+=this.others[i].vy;
      }
    }
    if (this.x < 0 || this.x > width) {
      this.vx = -1 * this.vx;
    }
    if (this.y < 0 || this.y > height) {
      this.vy = -1 * this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
    
  }
  display() {
    fill('rgb(0,255,0)');
    ellipse(this.x, this.y, 10, 10);
  }
}
   
