/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Game Over Scene 

/**
 * This class is the Game Over Scene.
 */
class GameOverScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'gameOverScene' })
    // creating a variable that can hold the background image for game over scene
    this.gameOverSceneBackgroundImage = null

    // a variable to hold the game over score
    this.gameOverText = null
    // a variable that will hold the game over score text style
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
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
    console.log('Splash Scene')
    // loading image so we can have a background image for my game over scene
    this.load.image('gameOverSceneBackground', './images/starrynight.gif')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create a background image for game over scene that was preloaded
    this.gameOverSceneBackgroundImage = this.add.sprite(0, 0, 'gameOverSceneBackground').setScale(1.5)
    this.gameOverSceneBackgroundImage.x = 1920 / 2 
    this.gameOverSceneBackgroundImage.y = 1080 / 2

    // create text that says game over
    this.gameOverText = this.add.text(1920 /2, 1080 / 2, 'Game Over!\nClick here to play again.', this.gameOverTextStyle).setOrigin(0.5)
    this.gameOverText.setInteractive({ useHandCursor: true })
    this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
    }
  }

export default GameOverScene
