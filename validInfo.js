module.exports = function(req, res, next) {
    const { username, consumer_password } = req.body;
  
    if (req.path === "/register") {
      if (![username, consumer_password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } 
    } else if (req.path === "/login") {
      if (![username, consumer_password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } 
    }
  
    next();
  };