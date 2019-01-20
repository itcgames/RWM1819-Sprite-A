/**
 *  Animator class, controls all animations added 
 *  into it and allows for control over them
 * @class
 * @classdesc The animator holds multiple animations. 
 * The animations can then be manipulated using this class.
 * All animations should be updated and drawn using this class.
 */
class AnimationManager {
  constructor() {
    this.animations = new Map();
    /**
    * @type {Animation}
    */
    this.currentAnimation;

    this.animQueue = [];
    this.playingQueue = false;
    this.currentQueuePos = 0;
    this.animQueueLooping = false;
  }
   
  /**
   * Method to add an animation to the map of animations.
   * @param {string} animName 
   * A string representing the animation
   * @param {Animation} animation 
   * The animation object to add to the animator
   */
  addAnimation(animName, animation) {
    if (!this.animations.has(animName)) {
      this.animations.set(animName, animation);
      this.currentAnimation = animation;
    } else {
      console.log("Animation " + animName
          + " is already in the animator");
    }
  }

  /**
   * Updates the current animation.
   * @param {Number} deltaTime 
   * time passed since last cycle in milliseconds
   * @param {Number} xPos
   * x position of the animation origin.
   * @param {Number} yPos
   * y position of the animation origin
   */
  update(deltaTime, xPos, yPos) {

    if (this.playingQueue) {
      if (this.currentAnimation.isFinished()) {
        this.currentQueuePos += 1;
        if (this.currentQueuePos >= this.animQueue.length
            && this.animQueueLooping) {
          this.currentQueuePos = 0;
        }
        else if (this.currentQueuePos >= this.animQueue.length
            && !this.animQueueLooping) {
          this.playingQueue = false;
        }
        this.changeTo(this.animQueue[this.currentQueuePos], true);
        this.currentAnimation.reset();
      }
    }


    this.currentAnimation.update(deltaTime, xPos, yPos);
  }

  /**
   * Draws the current animation.
   * @param {CanvasRenderingContext2D} context
   * the canvas context 2d to draw the animation on.
   */
  draw(context) {
    this.currentAnimation.draw(context);
  }

  /**
   * Allows for setting of rotation of the animation.
   * @param {string} animName 
   * Name of the animation to rotate
   * @param {Number} degrees 
   * angle in degrees by which to rotate the animation
   */
  setRotation(animName, degrees) {
    if (this.animations.has(animName)) {
      var anim = this.animations.get(animName);
      anim.setAngle(degrees);
    } else {
      console.log("Animation " + animName
          + "could not be found in the animator");
    }
  }

  /**
   * Allows for setting of the scale of the animation.
   * It alters the destination rectangle making the animation 
   * bigger on the screen.
   * @param {string} animName 
   * Name of the animation you wish to scale
   * @param {Number} scaleX 
   * Scale factor on the width of animation (1.0 is default)
   * @param {Number} scaleY 
   * scale factor on the height of animation (1.0 is default)
   */
  setScale(animName, scaleX, scaleY) {
    if (this.animations.has(animName)) {
      var anim = this.animations.get(animName);
      anim.scale(scaleX, scaleY);
    } else {
      console.log("Animation " + animName
          + "could not be found in the animator");
    }
  }

  /**
 * Allows checking if the current animation is playing.
 * @returns {boolean} Whether the animation is playing as a boolean value.
 */
  isPlaying() {
    return this.currentAnimation.isPlaying;
  }

  /**
   * Stops the animation at current frame
   * In order for the animation to continue playing use the continue function
   */
  stop() {
    this.currentAnimation.isPlaying = false;
  }

  /**
   * Continues the animation if it is currently paused.
   */
  continue() {
    this.currentAnimation.isPlaying = true;
    this.currentAnimation.finishedSingleLoop = false;
  }

  /**
   * Determine whether the animation loops or not, 
   * true means it will loop false means it will play once only
   * @param {string} animName 
   * string representing the animation, name you gave the animation within
   * the animator
   * @param {boolean} state
   * Boolean to represent whether the animation is looping or not
   */
  isLooping(animName, state) {
    if (this.animations.has(animName)) {
      var anim = this.animations.get(animName);
      anim.isLooping(state);
    } else {
      console.log("Animation " + animName
        + "could not be found in the animator");
    }
  }

  /**
   * Method that allows to reverse animations.
   * @param {String} animName
   * string representing the animation, name you gave the animation within
   * the animator
   * @param {Boolean} state
   * boolean defining if the animation is reversing.
   */
  isReversing(animName, state) {
    if (this.animations.has(animName)) {
      var anim = this.animations.get(animName);
      anim.isReversing(state);
    } else {
      console.log("Animation " + animName
        + "could not be found in the animator");
    }
  }

  /**
   * sets the specified animations frames per second.
   * Default value being 60 fps.
   * @param {String} animName 
   * String representing animation name within the animator.
   * @param {Number} newFPS 
   * Number representing new value of the animation fps.
   */
  setAnimationFPS(animName, newFPS) {
    if (this.animations.has(animName)) {
      var anim = this.animations.get(animName);
      anim.setAnimFPS(newFPS);
    } else {
      console.log("Animation " + animName
          + "could not be found in the animator");
    }
  }

  /**
   * A check for whether the animation is finished its current cycle.
   * @returns {Boolean}
   * Boolean that specifies if the animation is on its last frame.
   */
  isAnimationFinished(){
      return this.currentAnimation.isFinished();
  }

  /**
   * This method changes the current animation to specified animation.
   * @param {String} nextAnimation 
   * String representing animation to change to.
   * @param {Boolean} queuePlaying
   * a boolean to represent if animation queue is playing
   * defaults to false if not provided
   */
  changeTo(nextAnimation, queuePlaying) {
    if (queuePlaying === undefined) {
      queuePlaying = false;
    }
    if (this.animations.has(nextAnimation)) {
      if (this.playingQueue) {
        this.playingQueue = queuePlaying;
      }
      this.currentAnimation = this.animations.get(nextAnimation);
    } else {
      console.log("Animation " + nextAnimation
          + "could not be found in the animator");
    }
  }

  /**
   * Adds specified animation to the queue.
   * The animation must already be in the animator.
   * @param {String} animName
   * name of the animation to add to the queue.
   */
  addToQueue(animName) {
    if (this.animations.has(animName)) {
      this.animQueue.push(animName);
    } else {
      console.log("Animation " + animName
        + "could not be found in the animator");
    }
  }

  /**
   * This method clears the animation queue
   * preparing it for a new set of animations.
   */
  clearQueue() {
    this.animQueue = [];
  }

  /**
   * This is the method that starts the queue. 
   * method will check that queue is not empty,
   * it will then set the current animation to first in queue
   * @param {Boolean} looping
   * Flag for whether the queue is to loop,
   * true by default
   */
  playQueue(looping) {
    if (looping === undefined) {
      looping = true;
    }
    this.animQueueLooping = looping;
    if (this.animQueue.length > 0) {
      this.playingQueue = true;
      this.currentAnimation = this.animations.get(this.animQueue[0]);
    }
  }
}

if (typeof module !== "undefined") {
  module.exports = AnimationManager;
}