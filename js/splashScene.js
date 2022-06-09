/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Splash Scene 

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'splashScene' })
    // creating a variable that can hold the background image for splash scene
    this.splashSceneBackgroundImage = null
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
    // loading image so we can have a background image for my splash scene
    this.load.image('splashSceneBackground', '../images/immaculata.jpeg')
  }

  /**
   * Can be defined on your own Scene, use it to create game objects like images and text
   */
  create (data) {
    // create that background image for splash scene that was preloaded
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground').setScale(1.5)
    this.splashSceneBackgroundImage.x = 1920 / 2 
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  /**
   * Should be overridden by your own Scenes, this method is called once per game step while the scene is running, and can control how long scenes run for and what keys perform what in the game, along with other things
   */
  update (time, delta) {
    // switch to title scene after the splash scene is displayed for 4 seconds
    if (time > 4000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene

