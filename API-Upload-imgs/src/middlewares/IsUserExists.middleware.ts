const User = require('../models/User.model');

class IsUserExists {
  static async execute(req, res, next) {
    const user = await User.findByPk(req.params.user_id);

    if (!user) {
      return res.status(500).json({ error: 'user not found' });
    }

    next();
  }
}

module.exports = IsUserExists;
