import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import wall from "../canvas/wall";
import { ICanvas, IModel } from "../vite-env"

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = wall
    name: string = 'wall'

    image(): HTMLImageElement {
        return image.get('wall')!
    }
    render(): void {
        super.draw()
    }
}