import "core-js";
import "regenerator-runtime";
import Phaser from 'phaser'
import BARPNG from './assets/BAR.png'
import TwoBARPNG from './assets/2xBAR.png'
import ThreeBARPNG from './assets/3xBAR.png'
import SevenPNG from './assets/7.png'
import CherryPNG from './assets/Cherry.png'
import SpinnerSVG from './assets/Spinner.svg'
import Spin from './Spin'
import GUI from './GUI'
import io from "./io";



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
        const canvas = document.getElementsByTagName('canvas')
        canvas[0].style.margin = 'auto'
        this.cameras.main.backgroundColor.setTo(0, 93, 80);
        this.spin = new Spin(this, 280, 0)
        this.GUI = new GUI(this, 0, 0, null, {
            spin: () => {
                io.spin()
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