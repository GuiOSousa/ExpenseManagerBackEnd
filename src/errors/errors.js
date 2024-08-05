export class InvalidIdError extends Error {
    constructor() {
        super("Insira um ID válido.")
    }
}

export class DuplicateDataError extends Error {
    constructor() {
        super("Entrada já existente.")
    }
}