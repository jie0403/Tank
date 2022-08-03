import config from "../../config"
import canvasAbstract from "./canvas"
import model from '../model/play'
import { ICanvas, IMdodelConstructor } from "../vite-env"

export default new (class extends canvasAbstract implements ICanvas {
    num(): number {
        return 0
    }
    model(): IMdodelConstructor {
        return model
    }

    render(): void {
        this.createModels()
        super.renderModels()
    }

    // 绘制模型
    protected createModels() {
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.model.width
        const mh = config.model.height

            ;[{ x: cw / 2 + mw * 4, y: ch - mh }].forEach(position => {
                const model = this.model() as IMdodelConstructor
                const instance = new model(position.x, position.y)
                this.models.push(instance)
            })
    }

})('play')
