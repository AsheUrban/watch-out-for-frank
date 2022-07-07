import Player from '../src/js/player.js';
import Background from '../src/js/background.js';
import ControlInput from '../src/js/controls.js';
import Enemy from '../src/js/enemy.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

if (typeof window !== 'undefined') { //You are on the browser; can use window here
  window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 820;

    let enemies = [];
    let score = 0


    const input = new ControlInput();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    const enemy1 = new Enemy(canvas.width, canvas.height);
      
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

    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 1000;
    let randomEnemyInterval = Math.random() * 1000 + 500;


    // Display score || Game Over text
    function displayStatus(context){
      context.fillStyle = "orange";
      context.font = "40px Helvetica";
      context.fillText("SCORE: " + score, 20, 50);
    }

    function animationLoop(timeStamp){
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;


      ctx.clearRect(0,0,canvas.width, canvas.height);
      background.draw(ctx);
      background.update();
      player.draw(ctx);

      player.update(input);
      // enemy1.draw(ctx);
      // enemy1.update();
      handleEnemies(deltaTime);

      player.update(input, deltaTime);
      displayStatus(ctx);

      requestAnimationFrame(animationLoop);
    }
    animationLoop(0);
  });

} else { //You are on the server; don't use window here
}
