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

    const input = new ControlInput();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    
      
    // Display score || Game Over text

    // function displayStatus(){

    // }
    function animationLoop(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      background.draw(ctx);
      background.update();
      player.draw(ctx);
      player.update(input);
      requestAnimationFrame(animationLoop);

    }
    animationLoop();
  });

} else { //You are on the server; don't use window here
}
