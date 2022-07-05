//Directional controls for Player

export default class ControlInput {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", direction => {
      if ((   direction.key === "ArrowDown" ||
              direction.key === "ArrowUp" ||
              direction.key === "ArrowLeft" ||
              direction.key === "ArrowRight")
              && this.keys.indexOf(direction.key) === -1) {
        this.keys.push(direction.key);
      }
      console.log(direction.key, this.keys);
    });

    window.addEventListener("keyup", direction => {
      if (    direction.key === "ArrowDown" ||
              direction.key === "ArrowUp" ||
              direction.key === "ArrowLeft" ||
              direction.key === "ArrowRight") {
        this.keys.splice(this.keys.indexOf(direction.key), 1);
      }
      // console.log(direction.key, this.keys);
    });
  }
  
}