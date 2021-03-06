
/**
 * @class Game
 * @classdesc This class will control the game
 */
class Game {
  /**
   * @constructor
   */
  constructor() {
    this.drawImg = false;
    this.canvas = {};
    this.ctx = {};
    this.mySprite = {};
    this.mySpriteRotated = {};
    this.previousTime = 0;

    this.img = new Image(); //create new image element
    this.cometAnimator = new AnimationManager();
    this.cometScaledAnimator = new AnimationManager();

    this.cometPos = { x: 100, y: 100 };
    this.cometRotatedPos = { x: 300, y: 100 };
    this.scaleX = 1;
    this.scaleY = 1;

  }
  /**
   * game initialiser
   */
  initWorld() {
    this.initCanvas();
    var gameInstance = this;
    this.img.addEventListener('load', function () {
        gameInstance.mySprite = new Animation(gameInstance.img, 266, 162, 50);
        gameInstance.cometAnimator.addAnimation("Comet", gameInstance.mySprite);
        gameInstance.cometAnimator.setScale("Comet", 1.0, 1.0);

        gameInstance.mySpriteRotated = new Animation(gameInstance.img, 266, 162, 50);
        gameInstance.cometScaledAnimator.addAnimation("Comet"
            ,gameInstance.mySpriteRotated);
        gameInstance.cometScaledAnimator.setScale("Comet", 0.7, 0.7);
        gameNs.game.loop();
    });

    this.img.src = "Comet.png";
  }

  /**
   * This is the game loop accessing a global callback function
   */
  loop() {
    //call update
    gameNs.game.update();
    //call the draw function
    gameNs.game.draw();
    //call itself
    window.requestAnimationFrame(gameNs.game.loop);
  }

  update() {
    var now = Date.now();
    var deltaTime = (now - gameNs.game.previousTime);
    this.previousTime = now;
    this.cometAnimator.update(deltaTime, this.cometPos.x, this.cometPos.y);
    this.cometScaledAnimator.update(deltaTime, this.cometRotatedPos.x, this.cometRotatedPos.y);
  }

  /**
   * This is the game draw function
   */
  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.cometAnimator.draw(this.ctx);
    this.cometScaledAnimator.draw(this.ctx);
  }

  /**
   * This function will initialise the canvas
   */
  initCanvas() {
    // Use the document object to create a new element canvas.
    this.canvas = document.createElement("canvas");
    // Assign the canvas an id so we can reference it elsewhere.
    this.canvas.id = 'mycanvas';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // We want this to be a 2D canvas.
    this.ctx = this.canvas.getContext("2d");
    // Adds the canvas element to the document.
    document.body.appendChild(this.canvas);
  }
}