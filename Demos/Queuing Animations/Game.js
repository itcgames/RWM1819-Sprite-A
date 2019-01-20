
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
    this.mySprite3 = {};
    this.mySprite4 = {};
    this.mySprite5 = {};
    this.previousTime = Date.now();

    this.img = new Image(); //create new image element
    this.img2 = new Image();
    this.img3 = new Image();
    this.img4 = new Image();
    this.img5 = new Image();
    this.playerAnimator = new AnimationManager();

    this.playerPos = { x: 150, y: 150 };
    this.scaleX = 1;
    this.scaleY = 1;
    this.currentState = true;
    this.elapsedTime = 0;
    this.timeToSwitch = 3000;
    this.first = true;

    this.switched = false;
  }
  /**
   * game initialiser
   */
  initWorld() {
    this.initCanvas();
    var gameInstance = this;


    this.img2.addEventListener('load', function () {
      gameInstance.mySprite2 = new Animation(gameInstance.img2, 231, 360, 10);
      gameInstance.playerAnimator.addAnimation("jump_start", gameInstance.mySprite2);

      gameNs.game.loop();
    });

    this.img2.src = "player_jump_start.png";

    this.img3.addEventListener('load', function () {
      gameInstance.mySprite3 = new Animation(gameInstance.img3, 230, 338, 18);
      gameInstance.playerAnimator.addAnimation("jump_loop", gameInstance.mySprite3);

      gameNs.game.loop();
    });

    this.img3.src = "player_jump_loop.png";

    this.img4.addEventListener('load', function () {
      gameInstance.mySprite4 = new Animation(gameInstance.img4, 275, 355, 15);
      gameInstance.playerAnimator.addAnimation("fall_start", gameInstance.mySprite4);

      gameNs.game.loop();
    });

    this.img4.src = "player_fall_start.png";

    this.img5.addEventListener('load', function () {
      gameInstance.mySprite5 = new Animation(gameInstance.img5, 270, 352, 10);
      gameInstance.playerAnimator.addAnimation("fall_loop", gameInstance.mySprite5);

      gameNs.game.loop();
    });

    this.img5.src = "player_fall_loop.png";

        this.img.addEventListener('load', function () {
      gameInstance.mySprite = new Animation(gameInstance.img, 197, 260, 30);
      gameInstance.playerAnimator.addAnimation("idle", gameInstance.mySprite);

      gameNs.game.loop();
    });

    this.img.src = "player_idle.png";
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
      //this.playerAnimator.changeTo("idle");
    }
    var now = Date.now();
    var deltaTime = now - this.previousTime;
    this.previousTime = now;

    this.elapsedTime += deltaTime;
    if (this.elapsedTime > this.timeToSwitch && !this.first && !this.switched) {
      //if(this.playerAnimator.isAnimationFinished())
      //{
      //  this.playerAnimator.changeTo("running");
      //  this.elapsedTime = 0;
      //}
      this.playerAnimator.addToQueue("idle");
      this.playerAnimator.addToQueue("jump_start");
      this.playerAnimator.addToQueue("jump_loop");
      this.playerAnimator.addToQueue("fall_start");
      this.playerAnimator.addToQueue("fall_loop");
      this.playerAnimator.playQueue();
      this.switched = true;
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