import { customAlphabet, nanoid } from 'nanoid'
const nanoidNum = customAlphabet('1234567890', 12)

export function makeNumId(): number {
    return Number(nanoidNum())
}
export function makeStrId(): string {
    return nanoid(12)
}
