
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
    this.mySprite2 = {};
    this.previousTime = Date.now();

    this.img = new Image(); //create new image element
    this.img2 = new Image();
    this.playerAnimator = new AnimationManager();

    this.playerPos = { x: 150, y: 150 };
    this.scaleX = 1;
    this.scaleY = 1;
    this.currentState = true;
    this.elapsedTime = 0;
    this.timeToSwitch = 3000;
    this.first = true;
  }
  /**
   * game initialiser
   */
  initWorld() {
    this.initCanvas();
    var gameInstance = this;
    this.img.addEventListener('load', function () {
      gameInstance.mySprite = new Animation(gameInstance.img, 197, 260, 30);
      gameInstance.playerAnimator.addAnimation("idle", gameInstance.mySprite);

      gameNs.game.loop();
    });

    this.img.src = "player_idle.png";

    this.img2.addEventListener('load', function () {
      gameInstance.mySprite2 = new Animation(gameInstance.img2, 313, 282, 30);
      gameInstance.playerAnimator.addAnimation("running", gameInstance.mySprite2);
      gameInstance.playerAnimator.changeTo("idle");

      gameNs.game.loop();
    });

    this.img2.src = "player_run.png";

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
    if(this.first)
    {
      this.playerAnimator.changeTo("idle");
    }
    var now = Date.now();
    var deltaTime = now - this.previousTime;
    this.previousTime = now;

    this.elapsedTime += deltaTime;
    if (this.elapsedTime > this.timeToSwitch && !this.first) {
      if(this.playerAnimator.isAnimationFinished())
      {
        this.playerAnimator.changeTo("running");
        this.elapsedTime = 0;
      }
    }

    this.playerAnimator.update(deltaTime, this.playerPos.x, this.playerPos.y);
    this.first = false;
  }

  /**
   * This is the game draw function
   */
  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.playerAnimator.draw(this.ctx);
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