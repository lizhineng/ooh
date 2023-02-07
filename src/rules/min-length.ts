import Rule from '../contracts/rule'

class MinLength implements Rule {
    protected length: number

    constructor(length: number) {
        this.length = length
    }

    apply(value: string): boolean {
        if (value.length < this.length) {
            return false
        }

        return true
    }

    message(): string {
        return `The length of the value must be greater than ${this.length}.`
    }
}

export default MinLength
