export default class Enemy {
  constructor(gameWidth,gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 173;
    this.height = 100;
    this.image = document.getElementById("enemyImage");
    this.x = this.gameWidth;
    this.y = this.gameHeight - this.height-10;
    this.frameX = 0;
    this.maxFrame = 20;
    this.fps = 20;
    this.frameTimer = 0;
    this.frameInterval = 1000/this.fps;
    this.speed =4;
  }
  draw(context){
    context.strokeStyle = 'white';
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.beginPath();
    context.arc((this.x -10) + this.width/2, (this.y +30) + this.height/2, this.width/2, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }
  update(deltaTime){
    if (this.frameTimer > this.frameInterval){
    if (this.frameX >= this.maxFrame) this.frameX =0;
    else this.frameX++;
    this.frameTimer = 0;
  } else {
    this.frameTimer += deltaTime;
  }
    this.x -= this.speed;
  }

}
