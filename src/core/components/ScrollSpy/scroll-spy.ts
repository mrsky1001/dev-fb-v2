export interface IScrollSpyArr {
    name: string
    isActive: boolean
    arr?: IScrollSpyArr[]
}

export class ScrollSpyArr implements IScrollSpyArr {
    name = ''
    isActive = false
    arr?: ScrollSpyArr[] = []

    constructor(name = '', isActive = false, arr: ScrollSpyArr[] = []) {
        this.name = name
        this.isActive = isActive
        this.arr = arr
    }
}