import "core-js";
import "regenerator-runtime";
import Phaser from 'phaser'
import BARPNG from '../src/assets/BAR.png'
import TwoBARPNG from '../src/assets/2xBAR.png'
import ThreeBARPNG from '../src/assets/3xBAR.png'
import SevenPNG from '../src/assets/7.png'
import CherryPNG from '../src/assets/Cherry.png'
import SpinnerSVG from '../src/assets/Spinner.svg'
import Spin from './Spin'
import GUI from './GUI'



class TestSlot extends Phaser.Scene {
    constructor() {
        super()
    }

    preload() {
        this.load.image('BAR', BARPNG)
        this.load.image('2xBAR', TwoBARPNG)
        this.load.image('3xBAR', ThreeBARPNG)
        this.load.image('7', SevenPNG);
        this.load.image('Cherry', CherryPNG)

        this.load.svg('spinner', SpinnerSVG)
    }

    create() {
        this.cameras.main.backgroundColor.setTo(0, 93, 80);
        this.spin = new Spin(this, 280, 0)
        this.GUI = new GUI(this, 0, 0, null, {
            spin: () => {
                console.log('spin')
                this.spin.reelsManager.start()
            }
        })
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: TestSlot
};

const game = new Phaser.Game(config)