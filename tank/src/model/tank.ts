import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import { directionEnum } from "../enum/positionEnum";
import _ from "lodash"
import config from "../../config";
import wall from "../canvas/wall";
import water from "../canvas/water";
import steel from "../canvas/steel";
import tank from "../canvas/tank";
import { ICanvas, IModel } from "../vite-env"
import util from "../util";

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = tank
    name: string = 'tank'

    render(): void {
        super.draw()
        this.move()
        // Math.floor(Math.random() * 5) == 1
        if (_.random(20) == 1) {
            this.direction = directionEnum.bottom
        }
    }


    randomImage() {
        const direction = this.name + _.upperFirst(this.direction)
        return image.get(direction as keyof typeof config.images)!
    }

    protected move() {
        while (true) {
            let x = this.x
            let y = this.y
            switch (this.direction) {
                case directionEnum.top:
                    y--
                    break
                case directionEnum.right:
                    x++
                    break
                case directionEnum.bottom:
                    y++
                    break
                case directionEnum.left:
                    x--
                    break
            }
            if (util.isModelTouch(x, y) || util.isCanvasTouch(x, y)) {
                this.randomDirection()
            } else {
                this.x = x
                this.y = y
                break
            }
        }
        super.draw()
    }


    image() {
        // 导入lodash库 首字符大写方法
        const direction = 'tank' + _.upperFirst(this.direction)
        // console.log(direction);
        return image.get(direction as keyof typeof config.images)!
    }
}