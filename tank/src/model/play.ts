import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import play from "../canvas/play";
import { ICanvas, IModel } from "../vite-env"
import _ from "lodash";
import { directionEnum } from "../enum/positionEnum";
import util from "../util";
import bullet from "../canvas/bullet";

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = play
    name: string = 'play'
    bindEvent: boolean = false

    image(): HTMLImageElement {
        let direction = this.name + _.upperFirst(this.direction)
        return image.get(direction as any)!
    }
    render(): void {
        super.draw()
        if (this.bindEvent === false) {
            this.bindEvent = true
            document.addEventListener('keydown', this.changeDirection.bind(this))
            document.addEventListener('keydown', this.move.bind(this))
            document.addEventListener('keydown', (event: KeyboardEvent) => {
                if (event.code == 'Space') bullet.addPlayBullet()
            })
        }
    }

    changeDirection(event: KeyboardEvent) {
        console.log(event.code);
        switch (event.code) {
            case 'KeyW':
            case 'ArrowUp':
                this.direction = directionEnum.top
                break
            case 'KeyD':
            case 'ArrowRight':
                this.direction = directionEnum.right
                break
            case 'KeyS':
            case 'ArrowDown':
                this.direction = directionEnum.bottom
                break
            case 'KeyA':
            case 'ArrowLeft':
                this.direction = directionEnum.left
                break
        }
        this.canvas.renderModels()
    }

    move(event: KeyboardEvent) {
        let x = this.x
        let y = this.y
        switch (event.code) {
            case 'KeyW':
            case 'ArrowUp':
                y -= 10
                break
            case 'KeyD':
            case 'ArrowRight':
                x += 10
                break
            case 'KeyS':
            case 'ArrowDown':
                y += 10
                break
            case 'KeyA':
            case 'ArrowLeft':
                x -= 10
                break
        }
        if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y)) {
            return
        }
        this.x = x
        this.y = y
        this.canvas.renderModels()
    }
}