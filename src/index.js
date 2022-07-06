import Player from '../src/js/player.js';
import Background from '../src/js/background.js';
import ControlInput from '../src/js/controls.js';
import Enemy from '../src/js/enemy.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import $ from 'jquery';


if (typeof window !== 'undefined') { //You are on the browser; can use window here
  window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 820;
    let enemies = [];

    const input = new ControlInput();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    // const enemy1 = new Enemy(canvas.width, canvas.height);
      
    // Animating, adding && removing enemies
    function handleEnemies(deltaTime){
      if (enemyTimer > enemyInterval + randomEnemyInterval){
        enemies.push(new Enemy(canvas.width, canvas.height));
        randomEnemyInterval = Math.random() * 1000 + 500;
        enemyTimer = 0;
      } else {
        enemyTimer += deltaTime;
      }
      enemies.forEach(enemy => {
        enemy.draw(ctx);
        enemy.update();
      });
    }

    // Display score || Game Over text
     // function displayStatus(){
       // }
    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 1000;
    let randomEnemyInterval = Math.random() * 1000 + 500;

    function animationLoop(timeStamp){
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      console.log(deltaTime);
      ctx.clearRect(0,0,canvas.width, canvas.height);
      background.draw(ctx);
      background.update();
      player.draw(ctx);
      player.update(input);
      // enemy1.draw(ctx);
      // enemy1.update();
      handleEnemies(deltaTime);
      requestAnimationFrame(animationLoop);

    }
    animationLoop(0);
  });

} else { //You are on the server; don't use window here
}
