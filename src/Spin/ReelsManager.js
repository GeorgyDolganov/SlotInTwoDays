import Phaser from 'phaser'
import Reel from './Reel'

const images = ['BAR', '2xBAR', '3xBAR', '7', 'Cherry']
export default class ReelsManager extends Phaser.GameObjects.Container {
    state = 'pending';
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene, x, y, children) {
        super(scene, x, y, children)
        this.reels = []

        this.maskRect = scene.make.graphics()
        this.maskRect.fillStyle(0xffffff)
        this.maskRect.beginPath()
        this.maskRect.fillRect(220, 180, 360, 240);
        scene.add.existing(this.maskRect)
        const mask = this.maskRect.createGeometryMask()
        this.setMask(mask)

        for (let i = 0; i < 3; i++) {
            this.reels[i] = new Reel(scene, x + 120 * i, y)
            this.reels[i].setMask(mask)
        }

        scene.add.existing(this)

    }

    start() {
        if (this.state === 'spin') return
        this.state = 'spin'
        this.scene.add.tween({
            targets: this.reels,
            y: '+=360',
            duration: 200,
            repeat: -1,
            delay: this.scene.tweens.stagger(100),
            onRepeat: (tween, reel) => {
                let resultMap = []
                let j = 0
                for (const symbol of reel.symbols) {
                    resultMap[j] = symbol.texture.key
                    j++
                }
                // console.log(resultMap)
                for (let k = 0; k < 3; k++) {
                    // console.log(resultMap)
                    resultMap.pop()
                    resultMap.unshift(images[Math.round(Math.random() * 4)])
                        // console.log(resultMap)
                }
                reel.symbols.forEach((symbol, i) => symbol.setTexture(resultMap[i]))
            }
        })
    }

    stop(map) {

    }
}