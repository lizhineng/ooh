import Rule from "../contracts/rule"

class Required implements Rule {
    protected attribute: string|null

    constructor(attribute?: string) {
        this.attribute = attribute
    }

    apply(value: unknown): boolean {
        if (value === undefined || value === null) {
            return false
        }

        if (typeof value === 'string') {
            return value !== ''
        }

        return true
    }

    message(): string {
        return 'The value is required.'
    }
}

export default Required
