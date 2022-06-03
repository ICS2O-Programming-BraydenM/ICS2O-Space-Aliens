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
   * This method is the constuctor.
   */
  constructor () {
    super({ key: 'menuScene' })
    // creating a variable that can hold the background image for menu scene
    this.menuSceneBackgroundImage = null
    // creating a variable so that users can click a button from menu scene to open game scene
    this.startButton = null
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
    console.log('Menu Scene')
    // loading image so we can have a background image for my menu scene
    this.load.image('menuSceneBackground', '../images/galaxy.jpg')
    // loading image so we can have a button to take us to game scene 
    this.load.image('startButton', '../images/button.png')
  }

  /**
   * Can be defined on your own Scenes. 
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
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
  }

  /**
   * Should be overidden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
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