/// <reference types="vite/client" />

import { directionEnum } from "./enum/positionEnum"
import bullet from "./model/bullet"


interface IMdodelConstructor {
    new(x: number, y: number): IModel
}

interface BulletModelConstructor {
    new(tank: IModel): IModel
}

interface IModel {
    name: string
    render(): void
    x: number
    y: number
    width: number
    height: number
    tank?: IModel
    direction: string
    destory(): void
}

interface ICanvas {
    model(): IMdodelConstructor | BulletModelConstructor
    num(): number
    ctx: CanvasRenderingContext2D
    removeModel(model: IModel): void
    renderModels(): void
    stop(): void
}