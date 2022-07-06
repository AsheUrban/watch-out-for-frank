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
  }
  draw(context){
    context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }
  update(){
    this.x--;
  }

}

