const pageNotFound = (req, res) => {
  res.status(404).json({
    msg: 'Page is Not Found',
  });
};

module.exports = pageNotFound;
