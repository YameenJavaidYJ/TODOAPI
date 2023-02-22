function authMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        // res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        next();
    } else {
        res.status(401).json({"Auth": 'Not authorized'});
    }
}
module.exports = authMiddleware;





