function log(req, res, next){
    console.log("logging...0");
    next();
};
module.exports = log;