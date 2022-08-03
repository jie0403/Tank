import config from "../../config";
import { directionEnum } from "../enum/positionEnum";
import audio from "../service/audio";
import { ICanvas, IModel } from "../vite-env"

export default abstract class modelAbstract {
    abstract name: string
    abstract canvas: ICanvas
    abstract render(): void
    protected abstract image(): HTMLImageElement
    public direction: directionEnum = directionEnum.top
    public width = config.model.width
    public height = config.model.height

    constructor(
        public x: number,
        public y: number
    ) {
        this.randomDirection()
    }
    // 随机方向
    protected randomDirection(): void {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    }

    protected draw() {
        this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
    }

    public destory() {
        this.canvas.removeModel(this)
        this.canvas.renderModels()
    }

    protected blast(model: IModel) {
        // 子弹爆炸的声音
        audio.blast()
        Array(...Array(8).keys()).reduce((promise, index) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const img = new Image
                    img.src = `/src/static/images/blasts/blast${index}.gif`
                    img.onload = () => {
                        this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height)
                        resolve(promise)
                    }
                }, 200)
            })
        }, Promise.resolve())
    }
}