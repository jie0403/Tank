import modelAbstract from "./modelAbstract";
import { image } from '../service/image'
import boss from "../canvas/boss";
import { ICanvas, IModel } from "../vite-env"

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = boss
    name: string = 'boss'

    image(): HTMLImageElement {
        return image.get('boss')!
    }
    render(): void {
        super.draw()
    }
}