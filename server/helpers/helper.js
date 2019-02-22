import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },

  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  generateToken(id) {
    const token = jwt.sign({
      userId: id,
    },
    process.env.SECRET, { expiresIn: '30m' });
    return token;
  },
  // checking
  verifyToken(req, res, next) {
    const token = req.headers['access-token'] || req.body['access-token'] || null;

    if (!token) {
      return res.status(401).json({
        error: 'you are not authorized!!!, please sign in!',
      });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'authentication fail!!!',
        });
      }
      req.id = decoded.id || null;
      req.email = decoded.email || null;
      next();
      return true;
    });
    return true;
  },

};

export default Helper;
