
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
        this.statusCode = 404;
    }
}

module.exports = CustomError;