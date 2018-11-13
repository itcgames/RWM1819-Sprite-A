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
    it('draw function exists', function () {
      var animator = new AnimationManager();
      expect(animator.setScale).to.be.a('function');
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
  it('should handle positive numbers', function () {
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
  it('should handle negative numbers', function () {
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
  it('should handle zero', function () {
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
  it('should not alter position', function () {
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
  it('should not alter position', function () {
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
  it('should allow scaling by positive numbers', function () {
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
  it('should allow scaling by positive numbers', function () {
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
  it('should allow scaling by negative numbers', function () {
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