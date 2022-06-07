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
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'gameScene' })
    // create a variable to hold the background of our game scene 
    this.background = null
    // create a variable that represents our sprite 
    this.deer = null
    // create a variable that shoots meteorites
    this.fireMeteor = false
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
    // loading image so we can have meteors attacking sprite
    this.load.image('meteor', '../images/meteor.png')

    // adding sound files for game 
    this.load.audio('crash', '../sounds/meteor.wav')
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
    // using physics to move sprite around the screen
    this.deer = this.physics.add.sprite(1920 / 2, 1080 - 100, 'deer').setScale(0.5)

    // create a group for the meteors
    this.meteorGroup = this.physics.add.group()
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
      if (this.fireMeteor === false) {
        // fire meteor
        this.fireMeteor = true
        // variable that will shoot a new meteor every time space bar is clicked
        const aNewMeteor = this.physics.add.sprite(this.deer.x, this.deer.y, 'meteor')
        this.meteorGroup.add(aNewMeteor)
        // add a meteor crash sound to gamescene
        this.sound.play('crash')
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMeteor = false
    }

    // move meteors up the screen
    this.meteorGroup.children.each(function (item) {
      item.y = item.y -15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene
