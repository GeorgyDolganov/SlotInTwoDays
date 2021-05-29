import Phaser from "phaser"
import SpinButton from "./buttons/spin"
import Header from "./header"
export default class GUI extends Phaser.GameObjects.Container {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene, x, y, children, actions) {
        super(scene, x, y, children)
        this.spinButton = new SpinButton(scene, 350, 450, actions.spin)
        this.header = new Header(scene, 0, 0)
        scene.add.existing(this)
    }
}