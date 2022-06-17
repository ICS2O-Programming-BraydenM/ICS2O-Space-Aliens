/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Second You Win Scene 

/**
 * This class is the Second You Win Scene.
 */
class SecondYouWinScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'secondYouWinScene' })
    // creating a variable that can hold the background image for my second you win scene
    this.secondYouWinImage = null

    // a variable to hold the you win text
    this.secondYouWinText = null
    // a variable that will hold the you win text style
    this.secondYouWinTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
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
    console.log('Second You Win Scene')
    // loading image so we can have a background image for second you win scene
    this.load.image('secondYouWinSceneBackground', './images/winner.jpg')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create a background image for my second you win scene that was preloaded
    this.secondYouWinSceneBackgroundImage = this.add.sprite(0, 0, 'youWinSceneBackground').setScale(1.5)
    this.secondYouWinSceneBackgroundImage.x = 1920 / 2 
    this.secondYouWinSceneBackgroundImage.y = 1080 / 2

    // create text that says you win, click here to restart (go back to first level, so gameScene)
    this.secondYouWinText = this.add.text(1920 /2, 1080 / 2, 'You Win!\nClick here to restart.', this.secondYouWinTextStyle).setOrigin(0.5)
    this.secondYouWinText.setInteractive({ useHandCursor: true })
    this.secondYouWinText.on('pointerdown', () => this.scene.start('gameScene')).setScale(2.0)
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
    }
  }

export default SecondYouWinScene