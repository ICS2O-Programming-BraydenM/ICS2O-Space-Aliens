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

     // creating a variable so that users can click a button from s3econd game over scene back to menu scene
    this.startFinalButton = null 
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
     // loading image so we can have a button to take us back to menu scene after second level has been completed
    this.load.image('startFinalButton', './images/finalbutton.png')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create that background image for splash scene that was preloaded
    this.secondGameOverSceneBackgroundImage = this.add.sprite(0, 0, 'secondGameOverSceneBackground').setScale(2.4)
    this.secondGameOverSceneBackgroundImage.x = 1920 / 2 
    this.secondGameOverSceneBackgroundImage.y = 1080 / 2

    // create text that says game over
    this.secondGameOverText = this.add.text(1920 /2, 1080 / 2, 'Game Over!\nClick on the button below to return to the menu scene.', this.gameOverTextStyle).setOrigin(0.5).setScale(2)

    // creating a button that will be on our menu scene image 
    this.startFinalButton = this.add.sprite(1920 / 2, (1080 / 2) + 350, 'startFinalButton').setScale(0.5)
    // making the button interactive so that when we click on it we get transported to game scene
    this.startFinalButton.setInteractive({ useHandCursor: true })
    // when the person clicks on image, make a button
    this.startFinalButton.on('pointerdown', () => this.clickFinalButton())
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // pass
    }

  // function for the button to work
  clickFinalButton () {
    this.scene.start('menuScene')
    this.sound.play('click')
    }
  }

export default SecondGameOverScene
