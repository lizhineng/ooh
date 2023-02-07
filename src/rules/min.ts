import Rule from "../contracts/rule"

class Min implements Rule {
    protected min: number

    constructor(min: number) {
        this.min = min
    }

    apply(value: number): boolean {
        if (value < this.min) {
            return false
        }

        return true
    }

    message(): string {
        return `The value  must be greater than ${this.min}.`
    }
}

export default Min
