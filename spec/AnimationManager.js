/////////////////////////////////////////////////////
///  FUNCTION TESTS
/////////////////////////////////////////////////////
describe('Function', function () {
  'use strict';
  /////////////////////////////////////////////////////
  ///  ANIMATION
  /////////////////////////////////////////////////////
  describe('Animation', function () {
    it('update function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.update).to.be.a('function');
    });
    it('set angle function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.setAngle).to.be.a('function');
    });
    it('get angle function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.getAngle).to.be.a('function');
    });
    it('getPosition function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.getPosition).to.be.a('function');
    });
    it('setPosition function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.setPosition).to.be.a('function');
    });
    it('draw function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.draw).to.be.a('function');
    });
    it('scale function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.scale).to.be.a('function');
    });
    it('isLooping function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.isLooping).to.be.a('function');
    });
    it('isReversing function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.isReversing).to.be.a('function');
    });
    it('setAnimFPS function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.setAnimFPS).to.be.a('function');
    });
    it('isFinished function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.isFinished).to.be.a('function');
    });
    it('reset function exists', function () {
      var image = new Image();
      var sourceWidth = 100;
      var sourceHeight = 100;
      var totalFrames = 5;

      var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
      expect(animation.reset).to.be.a('function');
    });
  });
  /////////////////////////////////////////////////////
  ///  ANIMATION MANAGER
  /////////////////////////////////////////////////////
  describe('AnimationManager', function () {
    it('Rotation function exists', function () {
      var animator = new AnimationManager();
      expect(animator.setRotation).to.be.a('function');
    });
    it('Add animation function exists', function () {
      var animator = new AnimationManager();
      expect(animator.addAnimation).to.be.a('function');
    });
    it('update function exists', function () {
      var animator = new AnimationManager();
      expect(animator.update).to.be.a('function');
    });
    it('draw function exists', function () {
      var animator = new AnimationManager();
      expect(animator.draw).to.be.a('function');
    });
    it('setScale function exists', function () {
      var animator = new AnimationManager();
      expect(animator.setScale).to.be.a('function');
    });
    it('isPlaying function exists', function () {
      var animator = new AnimationManager();
      expect(animator.isPlaying).to.be.a('function');
    });
    it('stop function exists', function () {
      var animator = new AnimationManager();
      expect(animator.stop).to.be.a('function');
    });
    it('continue function exists', function () {
      var animator = new AnimationManager();
      expect(animator.continue).to.be.a('function');
    });
    it('isLooping function exists', function () {
      var animator = new AnimationManager();
      expect(animator.isLooping).to.be.a('function');
    });
    it('isReversing function exists', function () {
      var animator = new AnimationManager();
      expect(animator.isReversing).to.be.a('function');
    });
    it('setAnimationFPS function exists', function () {
      var animator = new AnimationManager();
      expect(animator.setAnimationFPS).to.be.a('function');
    });
    it('isAnimationFinished function exists', function () {
      var animator = new AnimationManager();
      expect(animator.isAnimationFinished).to.be.a('function');
    });
    it('changeTo function exists', function () {
      var animator = new AnimationManager();
      expect(animator.changeTo).to.be.a('function');
    });
    it('addToQueue function exists', function () {
      var animator = new AnimationManager();
      expect(animator.addToQueue).to.be.a('function');
    });
    it('clearQueue function exists', function () {
      var animator = new AnimationManager();
      expect(animator.clearQueue).to.be.a('function');
    });
    it('playQueue function exists', function () {
      var animator = new AnimationManager();
      expect(animator.playQueue).to.be.a('function');
    });
  });
});

/////////////////////////////////////////////////////
///  CONSTRUCTOR TESTS
/////////////////////////////////////////////////////
describe('Constructor', function () {
  it('AnimationManager constructor exists', function () {
    expect(AnimationManager).to.be.a('Function');
  });
  it('Animation constructor exists', function () {
    expect(Animation).to.be.a('Function');
  });
  it('AnimationRectangle constructor exists', function () {
    expect(AnimationRectangle).to.be.a('Function');
  });
});

/////////////////////////////////////////////////////
///  ROTATION TESTS
/////////////////////////////////////////////////////
describe('Rotation', function () {
  it('Should handle positive numbers', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setRotation("idle", 20);
    expect(animation.getAngle()).to.equal(20);
  });
  it('Should handle negative numbers', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setRotation("idle", -20);
    expect(animation.getAngle()).to.equal(-20);
  });
  it('Should handle zero', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setRotation("idle", 0);
    expect(animation.getAngle()).to.equal(0);
  });
  it('Should not alter position', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setRotation("idle", 25);
    expect(animation.getPosition().x).to.equal(100);
    expect(animation.getPosition().y).to.equal(100);
  });
});

/////////////////////////////////////////////////////
///  SCALING TESTS
/////////////////////////////////////////////////////
describe('Scaling', function () {
  it('Should not alter position', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setScale("idle", 2, 2);
    expect(animation.getPosition().x).to.equal(100);
    expect(animation.getPosition().y).to.equal(100);
  });
  it('Should allow scaling by positive numbers', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setScale("idle", 3, 3);
    expect(animation.getDestRect().width).to.equal(sourceWidth * 3);
    expect(animation.getDestRect().height).to.equal(sourceHeight * 3);
  });
  it('Should allow scaling by positive numbers', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setScale("idle", 3, 3);
    expect(animation.getDestRect().width).to.equal(sourceWidth * 3);
    expect(animation.getDestRect().height).to.equal(sourceHeight * 3);
  });
  it('Should allow scaling by negative numbers', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setScale("idle", -3, -3);
    expect(animation.getDestRect().width).to.equal(-sourceWidth * 3);
    expect(animation.getDestRect().height).to.equal(-sourceHeight * 3);
  });
});

/////////////////////////////////////////////////////
///  STOP/PAUSE TESTS
/////////////////////////////////////////////////////
describe('Stop/Pause', function () {
  it('Should set animations isPlaying to false', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.stop();
    expect(animator.currentAnimation.isPlaying).to.equal(false);
  });
  it('Should not update frames after pausing', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    var previousFrame = animator.currentAnimation.indexX;
    animator.stop();
    animator.update(1000, 1, 1);
    expect(animator.currentAnimation.indexX).to.equal(previousFrame);
  });
  it('Should play after calling continue from a pause', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    var previousFrame = animator.currentAnimation.indexX;
    animator.stop();
    animator.update(1000, 1, 1);
    animator.continue();
    animator.update(1000, 1, 1);
    expect(animator.currentAnimation.indexX).to.not.equal(previousFrame);
  });
});

/////////////////////////////////////////////////////
///  LOOPING/REVERSE TESTS
/////////////////////////////////////////////////////
describe('Loop/Reverse', function () {
  it('If looping should go to first frame after last one.', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.isLooping("idle", true);
    for (i = 0; i !== totalFrames; i++) {
      animator.update(1000, 1, 1);
    }
    expect(animator.currentAnimation.currentFrame).to.equal(0);
  });
  it('If not looping should go to first frame and stop.', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.isLooping("idle", false);
    for (i = 0; i !== totalFrames + 2; i++) {
      animator.update(1000, 1, 1);
    }
    expect(animator.currentAnimation.currentFrame).to.equal(0);
  });
  it('If looping and reversing should go to last frame after first.', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.isLooping("idle", true);
    animator.isReversing("idle", true);
    for (i = totalFrames + 2; i > 0; i--) {
      animator.update(1000, 1, 1);
    }
    expect(animator.currentAnimation.currentFrame).to.equal(totalFrames);
  });
  it('If reversing and not looping should stay on first frame.', function () {
    var check = false;
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.isLooping("idle", false);
    animator.isReversing("idle", true);
    for (i = totalFrames + 2; i > 0; i--) {
      animator.update(1000, 1, 1);
    }
    expect(animator.currentAnimation.currentFrame).to.equal(0);
  });
});

/////////////////////////////////////////////////////
///  SLOWING DOWN/SPEEDING UP TESTS
/////////////////////////////////////////////////////
describe('Slow down/Speed up', function () {
  it('Set animation FPS method should change the fps property of the animation.', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setAnimationFPS("idle", 120);
    expect(animation.fps).to.equal(120);
  });

  it('An animation with 4 frames and 2fps should finish no earlier than 2 seconds.', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 4;
    var dt = 200;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setAnimationFPS("idle", 2);
    //set animation to not loop to check the finished flag
    animator.isLooping("idle", false);
    //10 loops since 200ms * 10 = 2seconds
    for (i = 0; i <= 10; i++) {
      animator.update(dt, 1, 1);
      if (i === 6) {
        //check its not finished early (current frame starts at 0)
        expect(animation.currentFrame).to.equal(2);
      }
      if (i === 10) {
        //check animation is on last frame at 10th update
        expect(animation.currentFrame).to.equal(3);
      }
    }
  });

  it('FPS stays the same if negative is passed in.', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setAnimationFPS("idle", -120);
    //if negative fps does not change
    expect(animation.fps).to.equal(60);
  });

  it('FPS stays the same if NaN is passed in.', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.setAnimationFPS("idle", 'not a number');
    //if not a number fps does not change
    expect(animation.fps).to.equal(60);
  });
});

/////////////////////////////////////////////////////
///  CHANGING ANIMATION TESTS
/////////////////////////////////////////////////////
describe('Changing Animation', function () {
  it('Can change to another animation', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animation2 = new Animation(image, sourceWidth, sourceHeight, 10);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.addAnimation("running", animation);
    //currently animation of the animator is the last added so running, switch to idle.
    animator.changeTo("idle");
    //check if current animation is idle by checking if frames are 5
    expect(animator.currentAnimation.atlasTotal).to.equal(5);

  });

  it('isAnimationFinished returns true at the last frame', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 6;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    expect(animator.isAnimationFinished()).to.equal(false);
    //although there are 6 frames the count starts at 0, 6-1 = 5
    for (i = 0; i < 5; i++) {
      animator.update(1000, 1, 1);

    }
    //check if the isAnimationFinished method returns at last frame.
    expect(animator.isAnimationFinished()).to.equal(true);
  });
});

/////////////////////////////////////////////////////
///  QUEUING ANIMATIONS TESTS
/////////////////////////////////////////////////////
describe('Queuing Animations', function () {
  it('Able to add animations to the queue', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animation2 = new Animation(image, sourceWidth, sourceHeight, 10);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.addAnimation("running", animation2);
    animator.addToQueue("idle");
    animator.addToQueue("running");
    //check if animation queue has the 2 animations
    expect(animator.animQueue.length).to.equal(2);
  });

  it('Current animation is not switched if animation queue is empty', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animation2 = new Animation(image, sourceWidth, sourceHeight, 10);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    animator.addAnimation("running", animation2);
    //currently animation of the animator is the last added so running, switch to idle.

    animator.playQueue();
    for (i = 0; i < 15; i++) {
      animator.update(1000, 1, 1);
    }
    //check if still updating the running animation by checking frame amount
    expect(animator.currentAnimation.atlasTotal).to.equal(10);
  });

  it('Reset method for animation properly resets the animation', function () {
    var image = new Image();
    var sourceWidth = 100;
    var sourceHeight = 100;
    var totalFrames = 5;
    var animation = new Animation(image, sourceWidth, sourceHeight, totalFrames);
    var animator = new AnimationManager();
    animator.addAnimation("idle", animation);
    //currently animation of the animator is the last added so running, switch to idle.

    animator.playQueue();
    for (i = 0; i < 15; i++) {
      animator.update(1000, 1, 1);
    }
    animator.currentAnimation.reset();
    //check if still updating the running animation by checking frame amount
    expect(animator.currentAnimation.currentFrame).to.equal(0);
    expect(animator.currentAnimation.indexX).to.equal(0);
    expect(animator.currentAnimation.indexY).to.equal(0);
    expect(animator.currentAnimation.finishedCurrentLoop).to.equal(false);

  });
});
