import config from "../../config"
import canvasAbstract from "./canvas"
import model from '../model/boss'
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
        this.renderModels()
    }

    protected createModels() {
        [{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(position => {
            const model = this.model() as IMdodelConstructor
            const instance = new model(position.x, position.y)
            this.models.push(instance)
        }
        )
    }
})('boss')
