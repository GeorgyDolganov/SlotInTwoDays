import Phaser from "phaser"

export default class Button extends Phaser.GameObjects.Container {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene, {
        x = 0,
        y = 0,
        width = 200,
        height = 100,
        backgroundColor = 0xffffff,
        backgroundAlpha = 0.4,
        lineWeight = 10,
        borderRadius = 8,
        borderColor = 0xffffff,
        borderAlpha = 0.4,
        onClick = () => { console.log('click') }
    }) {
        super(scene, x, y)
        this.bg = scene.add.graphics()
        this.bg.fillStyle(backgroundColor, backgroundAlpha)
        this.bg.fillRoundedRect(x, y, width, height, borderRadius)
        this.border = scene.add.graphics()
        this.border.lineStyle(lineWeight, borderColor, borderAlpha)
        this.border.strokeRoundedRect(x, y, width, height, borderRadius)

        this.setSize(width, height)
        this.setInteractive({ cursor: 'pointer' });
        this.input.hitArea.x += width * 0.5
        this.input.hitArea.y += height * 0.5


        this.on('pointerup', onClick)
        scene.add.existing(this)
    }
}