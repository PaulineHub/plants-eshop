const ImagesPack = require('../models/detailImage')

// Get all detail images for a category of products
const getPackDetailImages = async (req, res) => {
  const { category } = await req.query
  const imagesPack = await ImagesPack.findOne({ category })
  /* if(!imagesPack) {
            //return next(createCustomError(`No imagesPack with category : ${category}`,404))
            res.status(404).json(`Images not founded with ${category}`);
    } */
  res.status(200).json({ imagesPack })
}

module.exports = {
  getPackDetailImages,
}
