const User = require('../models/User.model');
const UserImages = require('../models/UserImages.model');
const fs = require('fs');

class UserImagesController {
  async findAllImages(req, res) {
    const result = await UserImages.findAll();

    return res.json(result);
  }

  async upload(req, res) {
    const { user_id } = req.params;

    const userImages = await UserImages.create({
      name: req.body.name,
      src: req.file?.path,
      user_id,
    });

    return res.json(userImages);
  }

  async deleteImg(req, res) {
    const { img_id } = req.params;
    const image = await UserImages.findByPk(img_id);

    if (!image) {
      return res.status(400).json({ error: 'image not found' });
    }

    await UserImages.destroy({
      where: {
        id: img_id,
      },
    });

    fs.unlinkSync(image.dataValues.src);

    return res.json({ img: 'image deleted' });
  }
}

const userImagesController = new UserImagesController();

module.exports = userImagesController;
