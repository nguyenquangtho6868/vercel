exports.getProduct = async (req, res, next) => {
  try {
    res.status(200).json({ message: "product OK" });
  } catch (err) {
    next(err);
  }
};
