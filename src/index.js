import Player from '../src/js/player.js';
import Background from '../src/js/background.js';
import ControlInput from '../src/js/controls.js';
// import Enemy from '../src/js/enemy.js';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

if (typeof window !== 'undefined') { //You are on the browser; can use window here
  window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 820;
    // let enemies = [];
    let score = 0

    const input = new ControlInput();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    // Display score || Game Over text

    function displayStatus(context){
      context.fillStyle = "orange";
      context.font = "40px Helvetica";
      context.fillText("Score: " + score, 20, 50);
    }

    let lastTime = 0;

    function animationLoop(timeStamp){
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      ctx.clearRect(0,0,canvas.width, canvas.height);
      background.draw(ctx);
      background.update();
      player.draw(ctx);
      player.update(input, deltaTime);
      displayStatus(ctx);
      requestAnimationFrame(animationLoop);

    }
    animationLoop(0);
  });

} else { //You are on the server; don't use window here
}
