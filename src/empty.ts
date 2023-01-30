import Rule from './contracts/rule'

class Empty implements Rule {
    apply(value: unknown): boolean {
        if (typeof value === 'string') {
            return value !== ''
        }

        return true
    }

    message(): string {
        return 'The value is requried'
    }
}

export default Empty
