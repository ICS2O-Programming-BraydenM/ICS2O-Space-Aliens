/* global Phaser */

// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This is the Phaser3 configuration file

// scene import statements
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'
import GameOverScene from './gameOverScene.js'
import YouWinScene from './youWinScene.js'
import InstructionsScene from './instructionsScene.js'
import SecondGameScene from './secondGameScene.js'
import SecondGameOverScene from './secondGameOverScene.js'
import SecondYouWinScene from './secondYouWinScene.js'

// Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()
const gameOverScene = new GameOverScene()
const youWinScene = new YouWinScene()
const instructionsScene = new InstructionsScene()
const secondGameScene = new SecondGameScene()
const secondGameOverScene = new SecondGameOverScene()
const secondYouWinScene = new SecondYouWinScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)
game.scene.add('gameOverScene', gameOverScene)
game.scene.add('youWinScene', youWinScene)
game.scene.add('instructionsScene', instructionsScene)
game.scene.add('secondGameScene', secondGameScene)
game.scene.add('secondGameOverScene', secondGameOverScene)
game.scene.add('secondYouWinScene', secondYouWinScene)

// start title
game.scene.start('splashScene')