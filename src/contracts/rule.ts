interface Rule {
    apply(value: unknown): boolean

    message(): string
}

export default Rule
