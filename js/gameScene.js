/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Game Scene 

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  // create a meteor enemy
  createMeteor() {
    // create a variable that generates a random number/area for our enemy to come from
    const meteorXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920
    let meteorXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50
    meteorXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add a minus sign in 50% of cases
    const aMeteor = this.physics.add.sprite(meteorXLocation, -100, 'meteor').setScale(0.3)
    // bring enemy downwards
    aMeteor.body.velocity.y = 200
    // allow enemy to move in different directions
    aMeteor.body.velocity.x = meteorXVelocity
    this.meteorGroup.add(aMeteor)
    // add sound to meteor
    this.sound.play('bam')
  }

  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'gameScene' })
    // create a variable to hold the background of our game scene 
    this.background = null
    // create a variable that represents our sprite 
    this.deer = null
    // create a variable that shoots falling stars to protect sprite from enemy
    this.fireFallingStar = false
    // a variable that will hold the score, initialize to zero
    this.score = 0
    // add text to gamescene for score
    this.scoreText = null
    // a variable to change font of text for score
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }

    // a variable that will hold the lives, initialize to three lives
    this.lives = 3
    // add text to gamescene for lives
    this.livesText = null
    // a variable to change font of text for num lives
    this.livesTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }

    // a variable to hold the game over score
    this.gameOverText = null
    // a variable that will hold the game over score text style
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called the Scene Manager when the scene starts,
   *  before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Game Scene')
    // loading image so we can have a background image for my game scene
    this.load.image('starBackground', '../images/gamestar.jpg')
    // loading image so we can have an image for my sprite
    this.load.image('deer', '../images/deer.png')
    // loading image so we can have falling stars protecting the sprite, attacking our enemy
    this.load.image('fallingstar', '../images/fallingstar.png')
    // loading image so we have an ememy, the meteors, which will be attacking the sprite
    this.load.image('meteor', '../images/meteor.png')

    // adding sound files for game for our falling star
    this.load.audio('crash', '../sounds/fallingstar.wav')
    // adding sound files for game for our meteors (enemy)
    this.load.audio('bam', '../sounds/meteor.wav')
    // adding sound file for when meteors and falling stars collide
    this.load.audio('explosion', '../sounds/explosion.wav')

    // adding sound file for when meteors collide with sprite
    this.load.audio('lose', '../sounds/youlose.wav')
  }

  /**
   * Can be defined on your own Scenes. 
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    // create that background image for game scene that was preloaded
    this.background = this.add.image(0, 0, 'starBackground').setScale(1.0)
    this.background.setOrigin(0, 0)

    // make text appear on screen showing user score
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    // make text appear on screen showing user lives
    this.livesText = this.add.text(400, 10, 'Lives: ' + this.lives.toString(), this.livesTextStyle)
    
    // using physics to move sprite around the screen
    this.deer = this.physics.add.sprite(1920 / 2, 1080 - 100, 'deer').setScale(0.3)

    // create a group for the falling stars
    this.fallingStarGroup = this.physics.add.group()

    // create a group for the meteors
    this.meteorGroup = this.add.group()
    // create a function for meteors
    this.createMeteor()

    // collisions between meteors and falling stars
    this.physics.add.collider(this.fallingStarGroup, this.meteorGroup, function (fallingStarCollide, meteorCollide) {
      meteorCollide.destroy()
      fallingStarCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createMeteor()
    }.bind(this))

    // collisions between deer and meteors
    this.physics.add.collider(this.deer, this.meteorGroup, function (deerCollide, meteorCollide) {
      this.sound.play('lose')
      this.lives -= 1
      this.livesText.setText('Lives: ' + this.lives.toString())
      meteorCollide.destroy()
      this.deer.body.velocity.y = 0
      this.createMeteor()
      // if statement to have game over text appear after 3 lives have been taken
      if (this.lives <= 0) {
        deerCollide.destroy()
        this.physics.pause()
        this.gameOverText = this.add.text(1920 /2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      }
    }.bind(this))
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update (time, delta) {
    // called 60 times a second, hopefully!
    // create variables that allow us to move sprite left and right
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    // create a variable that shoots a meteor when we hot the space bar
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    
    // if left arrow key is pressed, move sprite 10 pixels to the left
    if (keyLeftObj.isDown === true) {
      this.deer.x -= 10
      if (this.deer.x < 0) {
        this.deer.x = 1920
      }
    }
    // if right arrow key is pressed, move sprite 10 pixels to the right
    if (keyRightObj.isDown === true) {
      this.deer.x += 10
      if (this.deer.x > 1920) {
        this.deer.x = 0
      }
    }
    // if spacebar is pressed, drop a meteor onto the game scene
    if (keySpaceObj.isDown === true) {
      if (this.fireFallingStar === false) {
        // fire falling star
        this.fireFallingStar = true
        // variable that will shoot a falling star every time spacebar is clicked
        const aNewFallingStar = this.physics.add.sprite(this.deer.x, this.deer.y, 'fallingstar')
        this.fallingStarGroup.add(aNewFallingStar)
        // add a falling star crash sound to gamescene
        this.sound.play('crash')
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireFallingStar = false
    }

    // move meteors up the screen
    this.fallingStarGroup.children.each(function (item) {
      item.y = item.y -15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene
