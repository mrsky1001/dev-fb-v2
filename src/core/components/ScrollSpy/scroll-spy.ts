export interface IScrollSpyArr {
    name: string
    arr?: IScrollSpyArr[]
}

export class ScrollSpyArr implements IScrollSpyArr {
    name = ''
    arr?: ScrollSpyArr[] = []

    constructor(name = '', arr: ScrollSpyArr[] = []) {
        this.name = name
        this.arr = arr
    }
}