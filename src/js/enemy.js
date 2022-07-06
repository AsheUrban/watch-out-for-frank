export default class Enemy {
  constructor(gameWidth,gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 170;
    this.height = 100;
    this.image = document.getElementById("enemyImage");
    this.x = this.gameWidth;
    this.y = this.gameHeight - this.height-10;
    this.frameX = 0;
    this.speed = 8;
  }
  draw(context){
    context.strokeStyle = 'white';
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.beginPath();
    context.arc((this.x -10) + this.width/2, (this.y +30) + this.height/2, this.width/2, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }
  update(){
    this.x -= this.speed;
  }

}

