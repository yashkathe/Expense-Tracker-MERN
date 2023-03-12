class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
};

module.exports = HttpError;

// super() - call the parent's constructor method and gets access to the parent's properties
// here - get access to message property from Error which httpError extends