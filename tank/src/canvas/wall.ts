import config from "../../config"
import canvasAbstract from "./canvas"
import model from '../model/wall'
import { ICanvas, IMdodelConstructor } from "../vite-env"

export default new (class extends canvasAbstract implements ICanvas {
    num(): number {
        return config.wall.num
    }
    model(): IMdodelConstructor {
        return model
    }

    render(): void {
        super.createModels()
        this.createBossWall()
        super.renderModels()
    }

    createBossWall() {
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.model.width
        const mh = config.model.height
        const pos = [
            {
                x: cw / 2 - mw * 2,
                y: ch - mh
            },
            {
                x: cw / 2 - mw * 2,
                y: ch - mh * 2
            },
            {
                x: cw / 2 - mw * 2,
                y: ch - mh * 3
            },
            {
                x: cw / 2 - mw,
                y: ch - mh * 3
            },
            {
                x: cw / 2,
                y: ch - mh * 3
            },
            {
                x: cw / 2 + mw,
                y: ch - mh * 3
            },
            {
                x: cw / 2 + mw * 2,
                y: ch - mh * 3
            },
            {
                x: cw / 2 + mw * 2,
                y: ch - mh * 2
            },
            {
                x: cw / 2 + mw * 2,
                y: ch - mh
            }
        ]

        pos.forEach(position => {
            const model = this.model() as IMdodelConstructor
            const instance = new model(position.x, position.y)
            this.models.push(instance)
        })
    }
})('wall')
