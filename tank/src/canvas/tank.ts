import config from "../../config"
import canvasAbstract from "./canvas"
import model from '../model/tank'
import position from "../service/position"
import { ICanvas, IMdodelConstructor } from "../vite-env"

export default new (class extends canvasAbstract implements ICanvas {
    intervalId = 0

    num(): number {
        return config.tank.num
    }
    model(): IMdodelConstructor {
        return model
    }

    stop(): void {
        clearInterval(this.intervalId)
    }

    render(): void {
        this.createModels()
        super.renderModels()

        this.intervalId = setInterval(() => {
            this.renderModels()
        }, config.timeOut)
    }

    public renderModels() {
        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
        super.renderModels()
        // this.models.forEach(model => {
        //     model.render()
        //     this.ctx.drawImage(model.image(), model.x, model.y, config.model.width, config.model.height)
        // })
    }

    // 生成模型实例
    protected createModels() {
        for (let i = 0; i < this.num(); i++) {
            const pos = position.position()
            const model = this.model()
            const instance = new model(pos.x, 0)
            this.models.push(instance)
        }
    }
})('tank')
