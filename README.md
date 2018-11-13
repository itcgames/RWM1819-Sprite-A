# Animation Manager User Guide (v 0.2.0)
## Component Overview:
The Animation Manager Component is a simple to utilize animation component. It is used for managing animations their durations and how they are played. The Component will iterate through rectangles on an animation sheet that are defined by the programer. A simple API is used to then have the ability to alter how the animation is played (eg backwards or looped) or how long it lasts. It also gives the programmer a way to add animations into an animator which can be used to easily switch between animations. The component should be used once the programmer has their sprite atlas and **KNOWS** the individual frame width and height. The correct usage of the component includes creating animations and then adding them to the animator. Component should **NOT** be used with sprite sheets that have bounding boxes of different sizes or with sprite sheets that have images not in sequential order.
## Features:
* **Rotating Animation** - Provide the user a way of easily rotating the animation.
* **Loop/Reverse animation** - Lets user set specific animation to loop or play in reverse.
* **Stop/Pause animation** - let user stop the animation at any point.
* **Scaling animation** - Give flexibility to scale animation up or down.
* **Slowing down/Speeding up animation** - give the user a way to make the animation faster or slower.
* **Changing animation** - Allow switching between animations inside the animator.
* **Queuing animations** - Give the ability to queue animations to play in order.
# Setting up
Here’s an overview of how the component should be set up to be ready to use.
Sample code is provided for each step (this keyword excluded for clarity).

**Step 1:** Define an animator 

```javascript
playerAnimator = new Animator();
```
**Step 2:** Create desired animations using the animation rectangle class provided by this component and animation objects make sure you know the following: 
* Width and height of a single frame
* If the animation starts at the first image in the file just put in a total amount of frames, otherwise provide what position the animation begins and what position it ends.

**If the animation starts at first frame simply put in total frames into constructor:**

```javascript
image = new Image();
sourceWidth = 20;
sourceHeight = 20;
totalFrames = 50;
	playerWalkAnim = new Animation(image,
        sourceWidth,
        sourceHeight,
        totalFrames);
```
**Otherwise you should provide the start frame and end frame of the animation:**
```javascript```
Image = new Image();
sourceWidth = 20;
sourceHeight = 20;
frameStart = 10;
frameEnd = 20;
playerWalkAnim = new Animation(image,
        sourceWidth,
        sourceHeight,
        frameStart,
        frameEnd);

```
**Step 3:** Add animation to the animator giving it a unique name and passing in the animation created in previous step. 
```javascript
playerAnimator.addAnimation(“Walking”, playerWalkAnim);
```
*(note: If the animation already exists animation will not be added and the previously inserted one will be used)*

**Step 4:** once all desired animations are inserted into the animator the animator can be used to update and draw the animation using the delta time (time between cycles in ms) and CanvasRenderingContext2D respectively.
```javascript
 playerAnimator.update(deltaTime); 
 playerAnimator.draw(ctx);
```
*(note: The current animation of the animator will be set to the LAST INSERTED animation by default. To overwrite what animation is currently being played use 
playerAnimation.current(uniqueAnimName); )*


# Rotating Animation
## **Description:**
This feature will provide a way for the programmer to rotate the animation by a specified amount in degrees. It will rotate the animation around its centre. 

## **Sample Code:**
```javascript
player1Animator.setRotation(“idle”, 5);
player2Animator.setRotation(“idle”, -20);
```

# Loop/Reverse Animation
## **Description:**
This feature will give the programmer a way to set whether the specific animation is looping or playing in reverse. If it is looping it plays start to finish and loops back around from last frame to first frame. Reverse allows the animation to play from last frame to first. Reversing an animation can happen mid way through an animation.

## **Sample Code:**
```javascript
//in initialize
player1Animator.isLooping(“idle”, true);
player2Animator.isReversing(“idle”, currentState);

//in the update
if(elapsedTime > timeToSwitch)
{
	currentState = !currentState;
	player2Animator.isReversing(“idle”, currentState);
	elapsedTime = 0;
}
```

# Stop/Pause Animation
## **Description:**
This feature includes the ability to stop the animation while it is playing at the current frame, it also provides a way to resume the playing of the animation from the paused frame. Also provide the player with a way to determine how long to pause in seconds before resuming playing animation.

## **Sample Code:**
```javascript
if(elapsedTime > timeToPause)
{
	player1Animator.stopFor(1);
	elapsedTime = 0;
}
player2Animator.stop();
```

*(note: to resume a paused animation call the continue() function of the animator)*

# Scaling Animation

## **Description:**
This feature allows animations to scale up or down. Feature should provide a simple way to scale the animation. 

## **Sample Code:**
```javascript
player1Animator.setScale(1.5);
player2Animator.setScale(0.5);
```

# Slowing down/Speeding up
## **Description:**
This feature will allow the programmer to easily slow or speed up the animation by providing a time for the animation to play. The component will then internally work out times between frames and play the animation. By default the animation will play at 60 fps.
## **Sample Code:**
```javascript
player1Animator.setAnimationTime(“Walking”, 2.0);
player2Animator.setAnimationTime(“Walking”, 1.0);
```
# Changing Animation

## **Description:**
The purpose of this feature is to give the programmer a fast and simple way to change between animations. Through the use of a map the component will be able to switch from the current playing animation to the next one. The programmer will however have to check if the current animation is done playing in order to make the transition seamless. For looping animations the change will check if animator is at last frame of the animation. If the programmer tries to change to an animation that does not exist in the animator map, the animation will stay in the current state.

## **Sample Code:**
```javascript
if(player1Animator.isAnimationFinished())
{
	player1Animator.changeTo(“running”);
}
```

# Queuing Animations
## **Description:**
Sometimes the programmer may want to play a sequence of animations in order. This feature will allow the programmer to add animations into a queue and play them in order without having to worry about switching them. The programmer also has the ability to loop the Queue, in that case once the final animation of the sequence finishes it goes back to the first one. By default the queue will not loop.

## **Sample Code:**
```javascript
var animQueue = [“Bubbles”, “Smoke”];
potionBottleAnimator.queue(animQueue, true); //true for looping
potionBottleAnimator.playQueue();
```
*(note: as soon as potionBottleAnimator.current(“Bubbles”) is called, the queue is stopped and the animation will play bubbles.)*



