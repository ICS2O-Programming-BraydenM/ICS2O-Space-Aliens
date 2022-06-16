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
     // creating a variable so that users can click a button from menu scene to open instruction scene
    this.startSecondButton = null 
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
    // loading image so we can have a button to take us to instructions scene
    this.load.image('startSecondButton', './images/instructions.png')
    // adding a sound for clicking ALL buttons in the game 
    this.load.audio('click', './sounds/clickbutton.wav')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create that background image for menu scene that was preloaded
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    // creating a button that will be on our menu scene image to go to game scene
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    // making the button interactive so that when we click on it we get transported to game scene
    this.startButton.setInteractive({ useHandCursor: true })
    // when the person clicks on image, make a button
    this.startButton.on('pointerdown', () => this.clickButton())

    // creating a button that will be on our menu scene for instructions 
    this.startSecondButton = this.add.sprite(1000 / 2, (570 / 2) + 570, 'startSecondButton').setScale(0.5)
    // making the button interactive so that when we click on it we get transported to instructions scene
    this.startSecondButton.setInteractive({ useHandCursor: true })
    // when the person clicks on image, make a button
    this.startSecondButton.on('pointerdown', () => this.clickSecondButton())
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
  }

  // function for the button to work, to the game scene
  clickButton () {
    this.scene.start('gameScene')
    this.sound.play('click')
  }

  // function for the button to work, to the instructions scene
  clickSecondButton () {
    this.scene.start('instructionsScene')
    this.sound.play('click')
  }
}

export default MenuScene