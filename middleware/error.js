const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //Wrong mongo db id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid : ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    //Mongoose Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400)
    }

    //Wrong JWT error 
    if (err.name === "JsonWebTokenError") {
        const message = `Json web token is invalid , try again !`;
        err = new ErrorHandler(message, 400)
    }

    //Jwt exxpire error
    if (err.name === "TokenExpireError") {
        const message = `Json web token is Expired , try again !`;
        err = new ErrorHandler(message, 400)
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}