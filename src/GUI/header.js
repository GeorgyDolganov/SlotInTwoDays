import Phaser from "phaser"
export default class Header extends Phaser.GameObjects.Container {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene, x, y, children) {
        super(scene, x, y, children)
        this.bg = scene.add.graphics()
        this.bg.fillStyle(0x000000, 1)
        this.bg.fillRect(x, y, 800, 75)
        this.add(this.bg)

        this.debug = {
            container: document.createElement('div'),
            title: document.createElement('h3'),
            input: document.createElement('input'),
        }
        this.debug.title.innerHTML = 'Balance:'
        this.debug.title.style.cssText = `color: rgb(255, 255, 255);margin: 5px 0; font-family: 'Circular-Loom';`
        this.debug.input.value = 10000
        this.debug.container.style.cssText = 'position: absolute; display: flex; top: 25px'
        let canvas = document.getElementsByTagName('canvas')[0]
        let offset = canvas.getBoundingClientRect().left - document.body.getBoundingClientRect().left
        this.debug.container.style.left = ` ${ offset + 20 }px `
        window.addEventListener('resize', () => {
            offset = canvas.getBoundingClientRect().left - document.body.getBoundingClientRect().left
            this.debug.container.style.left = ` ${ offset + 20 }px `
        })
        this.debug.container.append(this.debug.title, this.debug.input)
        document.body.append(this.debug.container)

        scene.add.existing(this)
    }
}