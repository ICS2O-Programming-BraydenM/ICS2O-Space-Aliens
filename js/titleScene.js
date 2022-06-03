/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Title Scene 

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'titleScene' })
    // adding a variable that can hold a background image to my title scene, a starry night
    this.titleSceneBackgroundImage = null
    // adding text to this title scene
    this.titleSceneText = null
    // adding style to the text
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
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
    console.log('Title Scene')
    // loading image so we can have a background image for my title scene
    this.load.image('titleSceneBackground', '../images/stars.jpg')
  }

  /**
   * Can be defined on your own Scenes. 
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    // create that background image for menu scene that was preloaded
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground')
    this.titleSceneBackgroundImage.x = 1920 / 2 
    this.titleSceneBackgroundImage.y = 1080 / 2
    // adding text to title scene 
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Falling STARS', this.titleSceneTextStyle).setOrigin(0.5)
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update (time, delta) {
    // switch to menu scene after title scene is displayed for 6 seconds
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene