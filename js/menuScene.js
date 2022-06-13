/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Menu Scene 

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'menuScene' })
    // creating a variable that can hold the background image for menu scene
    this.menuSceneBackgroundImage = null
    // creating a variable so that users can click a button from menu scene to open game scene
    this.startButton = null

    // create a variable to add text to menu scene for instructions
    this.menuSceneInstructions = null

    this.menuSceneTextStyle = { font: '30px Arial', fill: '#ffffff', align: 'center' } 
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
    console.log('Menu Scene')
    // loading image so we can have a background image for my menu scene
    this.load.image('menuSceneBackground', './images/galaxy.jpg')
    // loading image so we can have a button to take us to game scene 
    this.load.image('startButton', './images/button.png')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create that background image for menu scene that was preloaded
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    // creating a button that will be on our menu scene image 
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    // making the button interactive so that when we click on it we get transported to game scene
    this.startButton.setInteractive({ useHandCursor: true })
    // when the person clicks on image, make a button
    this.startButton.on('pointerdown', () => this.clickButton())
    // adding instructions to menu scene
    this.menuSceneInstructions = this.add.text(200, 100, 'Hi there! And welcome to Falling STARS!\n To play the game, move the character left or right with the left and right arrow keys.\n Meteors will be falling from the sky, trying to hit you.\n You have 3 lives, and each time a new meteor hits you, you lose a life.\n Try to avoid the meteors at all costs.\n Your defense weapon are falling stars, which you can shoot at the meteor to destroy them before they destroy you.\n Each time you blast a meteor with a falling star, you will gain a point.\n If you collect 40 points, you win! If you lose your 3 lives, you lose.\n If you run out of meteors, press "p" to spawn new meteors.\n Have fun! ', this.menuSceneTextStyle)
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
  }

  // function for the button to work
  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene