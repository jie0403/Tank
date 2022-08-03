import config from "../../config"
import canvasAbstract from "./canvas"
import model from '../model/water'
import { ICanvas, IMdodelConstructor } from "../vite-env"

export default new (class extends canvasAbstract implements ICanvas {
    num(): number {
        return config.water.num
    }
    model(): IMdodelConstructor {
        return model
    }

    render(): void {
        super.createModels()
        super.renderModels()
    }
})('water')
