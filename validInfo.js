module.exports = function(req, res, next) {
    const { username, consumer_password } = req.body;

    if (![username, consumer_password].every(Boolean)) {
      return res.status(401).json("Consumer Does Not Have Correct Information");
    } 
  
    next();
  };