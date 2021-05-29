import Phaser from 'phaser'
import Symbol from './Symbol'
export default class Reel extends Phaser.GameObjects.Container {
    constructor(scene, x, y, children) {
        super(scene, x, y, children)
        this.images = ['BAR', '2xBAR', '3xBAR', '7', 'Cherry']
        this.symbols = []
        this.bg = scene.add.rectangle(x, y + 300, 120, 240, 0xffffff)
        this.bg.setStrokeStyle(4, 0xFDE74C);
        for (let i = 0; i < 5; i++) {
            this.symbols[i] = new Symbol(scene, 0, y + 120 * i - 120, this.images[Math.round(Math.random() * (this.images.length - 1))])
        }
        this.add(this.symbols)
        scene.add.existing(this)
    }
}