import Phaser from 'phaser'
import Reel from './Reel'
export default class Symbol extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image) {
        super(scene, x, y, image)
        scene.add.existing(this)
    }
}