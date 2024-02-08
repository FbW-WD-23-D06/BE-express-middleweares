export function authentication(req, res, next) {
  const { username, password } = req.body;
  const isValideUsername = username.length > 4 && username.length <= 20;
  const isValidePassword = /^(?=.*[A-Z])(?=.*[0-9])(?=^\S+$).{8,}$/.test(
    password
  );

  if (!isValideUsername || !isValidePassword) {
    res.status(400).json({ message: "Username and password are wrong!" });
    return;
  }
  next();
}
