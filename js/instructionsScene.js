/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Instructions Scene 

/**
 * This class is the instructions Scene.
 */
class InstructionsScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'instructionsScene' })
    // creating a variable that can hold the background image for our inrtructions scene
    this.instructionsSceneBackgroundImage = null

    // create a variable to add text to instructions scene for instructions
    this.instructionsSceneInstructions = null

    this.instructionsSceneTextStyle = { font: '29.3px Arial', fill: '#ffffff', align: 'left' } 

    // creating a variable so that users can click a button from instruction scene back to menu scene
    this.startReturnButton = null
  }

  /**
   * Can be defined on your own Scenes, this is where the scene starts, before the preload or the create 
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined on your own Scene, use this to load image and sound files
   */
  preload () {
    console.log('Instructions Scene')
    // loading image so we can have a background image for my instructions scene
    this.load.image('instructionsSceneBackground', './images/instructions.jpg')
    // loading image so we can have a button to take us back to menu scene
    this.load.image('startReturnButton', './images/buttonmenu.png')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create that background image for splash scene that was preloaded
    this.instructionsSceneBackgroundImage = this.add.sprite(0, 0, 'instructionsSceneBackground').setScale(1.5)
    this.instructionsSceneBackgroundImage.x = 1920 / 2 
    this.instructionsSceneBackgroundImage.y = 1080 / 2

    // create text that says game over
    this.instructionsText = this.add.text(200, 100, 'Hi there! And welcome to Falling STARS!\n To play the game, move the character left or right with the left and right arrow keys.\n Meteors will be falling from the sky, trying to hit you.\n You have 3 lives, and each time a new meteor hits you, you lose a life.\n Try to avoid the meteors at all costs.\n Your defense weapon are falling stars, which you can shoot at the meteor to destroy them before they destroy you.\n Each time you blast a meteor with a falling star, you will gain a point.\n If you collect 20 points, you win! If you lose your 3 lives, you lose.\n If you want a challenge, press "p" to spawn new meteors.\n There is a second level to play if you successfully beat the meteors - but this time you have to face mighty planets!\n Have fun!\n Click on the button below to return to the menu scene. ', this.instructionsSceneTextStyle)

    // creating a button that will be on our instructions scene image 
    this.startReturnButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startReturnButton').setScale(0.5)
    // making the button interactive so that when we click on it we get transported to menu scene
    this.startReturnButton.setInteractive({ useHandCursor: true })
    // when the person clicks on image, make a button
    this.startReturnButton.on('pointerdown', () => this.clickReturnButton())
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
    }

  // function for the button to work, to menu scene
  clickReturnButton () {
    this.scene.start('menuScene')
    this.sound.play('click')
    }
  }

export default InstructionsScene
