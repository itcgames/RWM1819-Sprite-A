/**
 *  Sprite Manager class, allows for drawing of sprites onto a 2D canvas
 * @class
 * @classdesc Creates a Sprite Manager object that upon initialisation 
 * can be updated and drawn to a 2d canvas.
 * The component requires the programer to know 
 * the size of the source rectangle positions and size. 
 * The component will calculate all of the nessecery rectangles 
 * at runtime and therefore does not require the programmer to give 
 * an array of all rectangles
 */
class Animation {
  /**
   * Constructor
   * @param {HTMLImageElement} image
   * image containing frames
   * @param {Number} width
   * defines width of a single frame
   * @param {Number} height
   * defines height of a single frame
   * @param {Number} frameStart
   * this variable is either the total about of frames
   * if passed in without frameEnd variable
   * or it is the first frame of the animation
   * @param {Number} frameEnd
   * This defines the last frame of the animation
   * to be set only if the animation does not begin at
   * the first frame of the sprite sheet.
   */
  constructor(image, width, height, frameStart, frameEnd) {


    this.atlasX = image.width / width; //getting number of columns
    this.atlasY = image.height / height; //getting number of rows
    if (frameEnd === undefined) {
      this.atlasTotal = frameStart;
      this.initialX = 0;
      this.initialY = 0;
      this.indexX = 0;
      this.indexY = 0;
    } else {
      if (frameEnd > this.atlasX) {
        this.atlasTotal = frameEnd - frameStart; //get total frames in anim
        this.initialX = (frameStart - 1) % this.atlasX;
        this.indexX = this.initialX - 1;
        this.initialY = Math.floor(frameStart / (this.atlasX - 1));
        this.indexY = this.initialY;
      }
    }

    this.image = image;
    //minus so we start at 0, let user put in the number without accounting for 0
    this.atlasX = this.atlasX - 1;
    this.atlasY = this.atlasY - 1;
    this.source = new AnimationRectangle((this.indexX + 2) * width
      , (this.indexY + 1) * height, width, height);
    this.destination = new AnimationRectangle(100, 100, width, height);
    this.rotation = 0;
    this.sx = 0; //index * width
    this.sy = 0; //index * height
    this.fps = 60;
    this.ticksPerFrame = 0;
    this.tickCount = 0;
    this.angle = 0;
    this.currentFrame = 0;
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    //scale the rectangle to default scale
    this.destinationCurrent = new AnimationRectangle(this.destination.posX
      , this.destination.posY
      , this.destination.width * this.scaleX
      , this.destination.height * this.scaleY);
    this.offsetX = 0;
    this.offsetY = 0;
    this.isPlaying = true;
    this.looping = true;
    this.finishedSingleLoop = false;
    this.reverse = false;
    //Needed for a specific case of reversing a non looping animation
    //and wanting it to loop from the end
    this.firstUpdate = true;
    this.finishedCurrentLoop = false;
  }

  /**
   * This function will update the animation logic
   * @param {Number} deltaTime time since last update in milliseconds.
   * @param {Number} xPos the x position of the animation on the screen
   * @param {Number} yPos the y position of the animation on the screen
   */
  update(deltaTime, xPos, yPos) {
    this.destination.posX = xPos;
    this.destination.posY = yPos;
    this.tickCount += deltaTime;
    this.ticksPerFrame = 1000 / this.fps;
    //Looped playing animation that is not reversing
    if (this.isPlaying && this.looping && !this.reverse) {
      if (this.tickCount > this.ticksPerFrame) {
        if (this.indexX !== this.atlasX) {
          this.indexX++;
        } else if (this.indexY !== this.atlasY) {
          this.indexY++;
          this.indexX = 0;
        }
        this.currentFrame++;
        if (this.currentFrame === this.atlasTotal) {
          this.indexX = this.initialX;
          this.indexY = this.initialY;
          this.currentFrame = 0;
        }
        this.tickCount = 0;
      }
    } else if (this.isPlaying && !this.looping && !this.finishedSingleLoop && !this.reverse) {
      if (this.tickCount > this.ticksPerFrame) {
        if (this.indexX < this.atlasX) {
          this.indexX++;
        } else if (this.indexY !== this.atlasY) {
          this.indexY++;
          this.indexX = 0;
        }
        this.currentFrame++;
        if (this.currentFrame === this.atlasTotal) {
          this.finishedSingleLoop = true;
          this.isPlaying = false;
          this.currentFrame = 0;
          this.indexX = this.initialX;
          this.indexY = this.initialY;
        }
        this.tickCount = 0;
      }
    } else if (this.isPlaying && this.looping && this.reverse) {
      if (this.tickCount > this.ticksPerFrame) {
        if (this.indexX !== 0) {
          this.indexX--;
        } else if (this.indexY !== 0) {
          this.indexY--;
          this.indexX = this.atlasX;
        }
        this.currentFrame--;
        if (this.currentFrame < 0) {
          this.indexX = (this.atlasTotal - 1) % (this.atlasX + 1);
          this.indexY = this.atlasY;
          this.currentFrame = this.atlasTotal;
        }
        this.tickCount = 0;
      }
    }
    else if (this.isPlaying && !this.looping && this.reverse && !this.finishedSingleLoop) {
      if (this.tickCount > this.ticksPerFrame) {
        if (this.firstUpdate) {
          this.indexX = (this.atlasTotal - 1) % (this.atlasX + 1);
          this.indexY = this.atlasY;
          this.currentFrame = this.atlasTotal;
        }
        if (this.indexX !== 0) {
          this.indexX--;
        } else if (this.indexY !== 0) {
          this.indexY--;
          this.indexX = this.atlasX;
        }
        this.currentFrame--;
        if (this.currentFrame === 0) {
          this.finishedSingleLoop = true;
        }
        this.tickCount = 0;
      }
    }
    //calculates the position of the current source rectangle
    this.sx = this.indexX * this.source.width;
    this.sy = this.indexY * this.source.height;
    this.firstUpdate = false;

    if(this.currentFrame === this.atlasTotal - 1 && !this.reverse){
      this.finishedCurrentLoop = true;
    }
    else if(this.currentFrame === 0 && this.reverse){
      this.finishedCurrentLoop = true;
    }
    else{
      this.finishedCurrentLoop = false;
    }
  }

  /**
   * A setter function for the rotation of the sprite.
   * @param {Number} angle Angle of rotation in degrees
   */
  setAngle(angle) {
    this.angle = angle;
  }

  /**
   * @returns {Number} 
   * current angle of rotation in degrees. 
   */
  getAngle() {
    return this.angle;
  }

  /**
   * @returns {Object} current position (origin)
   */
  getPosition() {
    return {
      x: this.destination.posX,
      y: this.destination.posY
    };
  }

  /**
   * Setter for the position of the sprite on the screen.
   * @param {Number} posX X position in pixels on the canvas
   * @param {Number} posY Y position in pixels on the canvas
   */
  setPosition(posX, posY) {
    this.destination.posX = posX;
    this.destination.posY = posY;
  }

  /**
   * Function draws the animation in the defined position and rotation.
   * @param {CanvasRenderingContext2D} context 
   * this is the documents 2d context canvas
   */
  draw(context) {
    context.save();

    // Next, we'll translate (move the origin) to the center
    // of where we'll be drawing the rectangle
    context.translate(this.destination.posX + this.offsetX,
      this.destination.posY + this.offsetY);
    // Any transformations applied from here on out will be
    // relative to the origin of the destination rectangle
    // Note that we're using radians, not degrees to specify 
    //rotation therefore we must convert the angle to radians
    context.rotate(this.angle * Math.PI / 180);
    context.scale(this.scaleX, this.scaleY);
    context.translate(-(this.destinationCurrent.width * 0.5),
      -(this.destinationCurrent.height * 0.5));

    context.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.source.width,
      this.source.height,
      0,
      0,
      this.destinationCurrent.width,
      this.destinationCurrent.height);

    context.restore();
  }

  /**
   * Returns the current destination rectangle
   * @returns {AnimationRectangle} 
   * destination rectangle as animation rectangle object
   */
  getDestRect() {
    return this.destinationCurrent;
  }


  /**
   * Scales the destination rectangle by passed in factors
   * @param {Number} scaleX 
   * factor by which to scale the animation width (1.0 is default scale)
   * @param {Number} scaleY 
   * factor by which to scale the animation height (1.0 is default scale)
   */
  scale(scaleX, scaleY) {
    this.scaleX = scaleX;
    this.scaleY = scaleY;

    this.destinationCurrent.width = this.destination.width * this.scaleX;
    this.destinationCurrent.height = this.destination.height * this.scaleY;
  }

  /**
   * Sets the looping variable to passed state 
   * @param {boolean} state
   * new state of the looping variable
   */
  isLooping(state) {
    this.looping = state;
  }

  /**
   * Sets reverse to new state
   * @param {boolean} state
   * new state of the reverse boolean
   */
  isReversing(state) {
    this.reverse = state;
  }

  /**
   * Setter for the fps of the animation.
   * @param {Number} newFPS 
   * new value for the fps
   * default is 60.
   */
  setAnimFPS(newFPS) {
    //prevent negative numbers and other invalid data
    if (newFPS > 0 && newFPS && typeof newFPS === 'number') {
      this.fps = newFPS;
    }
  }

  /**
   * Getter for whether current loop is finished or not.
   * Finished defines last frame of the animation cycle.
   * @returns {Boolean}
   * boolean specifying if animation is finished its cycle.
   */
  isFinished(){
    return this.finishedCurrentLoop;
  }

  /**
   * this function resets animation to its initial state.
   */
  reset() {
    this.currentFrame = 0;
    this.indexX = this.initialX;
    this.indexY = this.initialY;
    this.finishedCurrentLoop = false;

  }
  
}
if (typeof module !== "undefined") {
  module.exports = Animation;
}
