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
    }
    else {
      console.log("Animation " + animName
          + " is already in the animator");
    }
  }

  /**
   * Updates the current animation.
   * @param {Number} deltaTime 
   * time passed since last cycle in milliseconds
   */
  update(deltaTime, xPos, yPos) {
    this.currentAnimation.update(deltaTime, xPos, yPos);
  }

  /**
   * Draws the current animation.
   * @param {CanvasRenderingContext2D} context
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
    }
    else {
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
    }
    else {
      console.log("Animation " + animName
          + "could not be found in the animator");
    }
  }
}