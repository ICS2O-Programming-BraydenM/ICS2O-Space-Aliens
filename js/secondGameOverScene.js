/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Game Over Scene 

/**
 * This class is the Game Over Scene.
 */
class SecondGameOverScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'secondGameOverScene' })
    // creating a variable that can hold the background image for game over scene
    this.secondGameOverSceneBackgroundImage = null

    // a variable to hold the game over score
    this.secondGameOverText = null
    // a variable that will hold the game over score text style
    this.secondGameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
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
    console.log('Second Game Over Scene')
    // loading image so we can have a background image for my game over scene
    this.load.image('secondGameOverSceneBackground', './images/starrynight.gif')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create that background image for splash scene that was preloaded
    this.secondGameOverSceneBackgroundImage = this.add.sprite(0, 0, 'secondGameOverSceneBackground').setScale(1.5)
    this.secondGameOverSceneBackgroundImage.x = 1920 / 2 
    this.secondGameOverSceneBackgroundImage.y = 1080 / 2

    // create text that says game over
    this.secondGameOverText = this.add.text(1920 /2, 1080 / 2, 'Game Over!\nClick here to play again.', this.gameOverTextStyle).setOrigin(0.5)
    this.secondGameOverText.setInteractive({ useHandCursor: true })
    this.secondGameOverText.on('pointerdown', () => this.scene.start('gameScene'))
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
    }
  }

export default SecondGameOverScene
