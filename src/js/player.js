// import $ from 'jquery';

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 200;
    this.height = 200;
    this.x = 0;
    this.y = this.gameHeight - this.height;
    this.image = document.getElementById("playerImage");
    this.speed= 0;
    this.vy = 0;
    this.weight = 1;
  }

  draw(context){
    // context.fillStyle = "white";
    // context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update(input){
      
    if (input.keys.indexOf("ArrowRight") > -1) {
      this.speed = 5;
    } else if (input.keys.indexOf("ArrowLeft") > -1) {
      this.speed = -5;
    } else if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
      this.vy -= 30;
    } 
    else {
      this.speed = 0;
    }
   
    //horizontal movement
    this.x += this.speed;
    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;
    //vertical movement
    this.y += this.vy;
    if (!this.onGround()){
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
    if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
  }
  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}