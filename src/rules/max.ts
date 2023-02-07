import Rule from "../contracts/rule";

class Max implements Rule {
    protected max: number

    constructor(max: number) {
        this.max = max
    }

    apply(value: number): boolean {
        if (value > this.max) {
            return false
        }

        return true
    }

    message(): string {
        return `The value must not be greater than ${this.max}.`
    }
}

export default Max
