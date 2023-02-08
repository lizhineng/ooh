class ValidationError extends Error {
    error: string|object

    constructor(error: string|object) {
        super('Failed to validate the data.')

        this.name = this.constructor.name
        this.error = error
    }
}

export default ValidationError
