import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import bullet from "../canvas/bullet";
import config from "../../config";
import { ICanvas, IModel } from "../vite-env"
import { directionEnum } from "../enum/positionEnum";
import util from "../util";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import boss from "../canvas/boss";
import tank from '../canvas/tank';
import play from '../canvas/play';

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = bullet
    name: string = 'water'

    constructor(
        public tank: IModel
    ) {
        super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
        this.direction = tank.direction as unknown as directionEnum
    }

    image(): HTMLImageElement {
        return image.get('bullet')!
    }
    render(): void {
        let x = this.x
        let y = this.y
        let step = this.tank.name == 'paly' ? 10 : 5
        switch (this.direction) {
            case directionEnum.top:
                y -= step
                break
            case directionEnum.right:
                x += step
                break
            case directionEnum.bottom:
                y += step
                break
            case directionEnum.left:
                x -= step
                break
        }
        // 碰撞检测
        const touchModel = util.isModelTouch(x, y, 2, 2,
            [
                ...wall.models,
                ...steel.models,
                ...boss.models,
                ...tank.models,
                ...play.models,
            ]
        )
        if (util.isCanvasTouch(x, y, 2, 2)) {
            this.destory()
        } else if (touchModel && touchModel.name !== this.tank.name) {
            this.destory()
            if (touchModel.name !== 'steel') touchModel.destory()
            this.blast(touchModel)
        }
        else {
            this.x = x
            this.y = y
            this.draw()
        }

    }

    protected draw(): void {
        this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2)
    }

}