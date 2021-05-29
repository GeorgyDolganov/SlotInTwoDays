import Phaser from "phaser"
import Button from "./button";

export default class SpinButton extends Button {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene, x, y, action) {
        super(scene, {
            x,
            y,
            width: 100,
            height: 100,
            borderRadius: 50,
            onClick: action
        })
        this.spinIcon = scene.add.image(x + 50, y + 50, 'spinner')
    }
}