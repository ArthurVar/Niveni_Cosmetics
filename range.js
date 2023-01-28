module.exports = (req, res, next) => {
    res.header('Content-Range', 'cosmetics 0-10/10');
    next()
};