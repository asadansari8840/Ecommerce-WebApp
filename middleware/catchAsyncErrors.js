module.exports = (asyncErrCatch) => (req, res, next) => {
    Promise.resolve(asyncErrCatch(req, res, next)).catch(next)
}