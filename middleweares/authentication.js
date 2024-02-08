export function authentication(req, res, next) {
    if (!req.body.username || !req.body.password) {
      res.status(400).json({ message: "Username and password are required!" });
      return;
    }
    next();
  }
  