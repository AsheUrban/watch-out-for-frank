// import $ from 'jquery';

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 67.5;
    this.height = 120;
    this.x = 1;
    this.y = this.gameHeight - this.height;
    this.image = document.getElementById("playerImage");
    this.speed= 0;
    this.vy = 0;
    this.weight = 1;
    this.frameX = 0;
    this.maxFrame = 10;
    this.frameY = 0;
    this.fps = 20;
    this.frameTimer = 0;
    this.frameInterval = 1000/this.fps;
  }

  draw(context){
    context.strokeStyle = 'white';
    context.strokeRect(this.x, this.y , this.width, this.height);
    context.beginPath();
    context.arc(this.x + this.width/2, this.y +this.height/2, this.width/1.5, 0, Math.PI *2);
    context.stroke();
    // context.strokeStyle = 'blue';
    // context.beginPath();
    // context.arc(this.x , this.y, this.width/1.5, 0, Math.PI *2);
    // context.stroke();
    context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  update(input, deltaTime, enemies){
    //collision detection
    enemies.forEach(enemy => {
      const dx = (enemy.x + enemy.width/1.5) - (this.x + this.width/2);
      const dy = ((enemy.y +10) + (enemy.height/2)-10) - (this.y + this.height/2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < enemy.width/2 + this.width/2){
        gameOver= true;
      } 
    });
    //sprite animation
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) this.frameX = 0;
      else this.frameX++;
      this.frameTimer = 0;
    } else { 
      this.frameTimer += deltaTime;
    }

    //sprite controls
    if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
      this.vy -= 30;
    } else if (input.keys.indexOf("ArrowRight") > -1) {
      this.speed = 5;
    } else if (input.keys.indexOf("ArrowLeft") > -1) {
      this.speed = -5;
    } 
    else {
      this.speed = 0;
    }


        // //sprite controls
        // if (input.keys.indexOf("ArrowRight") > -1) {
        //   this.speed = 5;
        // } else if (input.keys.indexOf("ArrowLeft") > -1) {
        //   this.speed = -5;
        // } else if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
        //   this.vy -= 30;
        // } 
        // else {
        //   this.speed = 0;
        // }

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