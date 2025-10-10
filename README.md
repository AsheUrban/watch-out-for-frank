# _Watch Out For Frank!_

#### By _Ashe Urban, Justin Peters, Daniel Ware, and Derrak Richard_

## Technologies Used
* _JavaScript_
* _HTML_
* _CSS_
* _Markdown_

## Description
_Watch Out For Frank!_ is a 2D side-scrolling browser game created in **JavaScript**, **HTML**, and **CSS**.  
Inspired by **Frank’s Laboratory’s “JavaScript Side Scroller Game Tutorial,”** the project was a hands-on exploration of fundamental game development concepts — including sprite animation, collision detection, user input handling, and state management.

Our goal was to recreate the nostalgic feel of classic arcade platformers while adding a modern, space-themed twist with unique player and enemy sprites, jump mechanics, and scoring logic.

**Tutorial Reference:**  
[JavaScript Side Scroller Game Tutorial (Frank’s Laboratory)](https://www.youtube.com/watch?v=7JtLHJbm0kA&t=2247s)

### Core Features
* Continuous side-scrolling environment  
* Animated characters using sprite sheets  
* Collision detection between player and enemies  
* Responsive keyboard input for player control  
* Points awarded for successful evasion or survival time

### Stretch Goals
* Additional jump and weapon animations  
* Functional scoring and UI display  
* Game over and restart screens  
* Level progression or collectible items

## Setup/Installation Requirements
* Clone or download this repository:
  ```bash
  git clone https://github.com/AsheUrban/Watch-Out-For-Frank.git
  ```
* Navigate into the project directory:
  ```bash
  cd Watch-Out-For-Frank
  ```
* Install dependencies:
  ```bash
  npm install
  ```
* Build and run the game locally:
  ```bash
  npm run build
  npm start
  ```
* Open your browser and navigate to:
  ```
  http://localhost:8080/
  ```

## Known Issues
* Warning 'gameOver' is not defined at runtime (close to use program).
* Logic separation currently prevents shared variables, impacting scoring functionality.  
* No dedicated end-game screen when the player collides with an enemy.  
* Game may freeze upon collision in some builds.

## License
_This software is provided for educational purposes only and is not intended for commercial use._

Copyright (c) _2022_
_Ashe Urban, Justin Peters, Daniel Ware, and Derrak Richard_
