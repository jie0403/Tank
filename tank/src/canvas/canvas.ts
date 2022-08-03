import config from "../../config"
import modelAbstract from "../model/modelAbstract"
import position from "../service/position"
import { BulletModelConstructor, IMdodelConstructor, IModel } from "../vite-env"


export default abstract class canvasAbstract {
    public models: IModel[] = []
    abstract num(): number
    abstract model(): IMdodelConstructor | BulletModelConstructor
    abstract render(): void

    constructor(
        protected name: string,
        protected app = document.querySelector('#app') as HTMLDivElement,
        protected el = document.createElement('canvas')!,
        public ctx = el.getContext('2d')!
    ) {
        this.createCanvas()
    }

    // 创建画布
    protected createCanvas() {
        this.el.width = config.canvas.width
        this.el.height = config.canvas.height
        this.el.setAttribute('name', this.name)
        this.app.appendChild(this.el)
        // this.app.insertAdjacentElement('afterbegin', this.el)
    }

    // 绘制模型
    protected createModels() {
        position.getCollection(this.num()).forEach(position => {
            const model = this.model() as IMdodelConstructor
            const instance = new model(position.x, position.y)
            this.models.push(instance)
        }
        )
    }

    // 将模型渲染到画布上
    public renderModels() {
        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
        this.models.forEach(model => model.render())
    }

    public removeModel(model: IModel) {
        this.models = this.models.filter(m => m !== model)
    }
}