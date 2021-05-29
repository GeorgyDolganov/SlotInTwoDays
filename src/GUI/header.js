import Phaser from "phaser"
export default class Header extends Phaser.GameObjects.Container {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene, x, y, children) {
        super(scene, x, y, children)
        scene.add.existing(this)
    }
}