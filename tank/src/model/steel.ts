import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import steel from "../canvas/steel";
import { ICanvas, IModel } from "../vite-env"

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = steel
    name: string = 'steel'
    image(): HTMLImageElement {
        return image.get('steel')!
    }
    render(): void {
        super.draw()
    }
}