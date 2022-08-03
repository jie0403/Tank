import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import water from "../canvas/water";
import { ICanvas, IModel } from "../vite-env"

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = water
    name: string = 'water'

    image(): HTMLImageElement {
        return image.get('water')!
    }
    render(): void {
        super.draw()
    }
}