import Phaser from 'phaser'
import ReelsManager from './ReelsManager'
export default class Spin extends Phaser.GameObjects.Container {

    constructor(scene, x, y, children = null) {
        super(scene, x, y, children)
        this.reelsManager = new ReelsManager(scene, x, y)
        this.start = this.reelsManager.start
        scene.add.existing(this)

    }
}