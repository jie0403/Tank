import config from '../config'
import boss from './canvas/boss'
import steel from './canvas/steel'
import wall from './canvas/wall'
import water from './canvas/water'
import { IModel } from './vite-env'

export default {
    isCanvasTouch(
        x: number,
        y: number,
        width = config.model.width,
        height = config.model.height,
    ): boolean {
        return x < 0 ||
            x + width > config.canvas.width ||
            y < 0 ||
            y + height > config.canvas.height

    },
    // 碰撞检测
    isModelTouch(
        x: number,
        y: number,
        width = config.model.width,
        height = config.model.height,
        models = [...wall.models, ...steel.models, ...boss.models]
    ): IModel | undefined {
        return models.find(model => {
            const state = x + width <= model.x ||
                x >= model.x + model.width ||
                y + height <= model.y ||
                y >= model.y + model.height
            return !state
        })
    }
}