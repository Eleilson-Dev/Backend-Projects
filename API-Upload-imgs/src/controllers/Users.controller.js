const User = require('../models/User.model');
const UserImages = require('../models/UserImages.model');
const fs = require('fs');
const path = require('path');

class UsersController {
  async listUsers(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async findUserById(req, res) {
    const user = await User.findByPk(req.params.user_id, {
      include: { association: 'images' },
    });

    return res.status(200).json(user);
  }

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  }

  async deleteUser(req, res) {
    try {
      const userImages = await UserImages.findAll({
        where: { user_id: req.params.user_id },
      });

      for (const image of userImages) {
        fs.unlinkSync(path.resolve(image.src));
      }

      await UserImages.destroy({ where: { user_id: req.params.user_id } });
      await User.destroy({ where: { id: req.params.user_id } });

      return res.status(200).json({ sucess: 'user and images deleted' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'internal server error' });
    }
  }
}

const usersController = new UsersController();

module.exports = usersController;
