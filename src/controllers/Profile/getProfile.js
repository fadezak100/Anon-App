const { join } = require('path');

const getProfile = (req, res) => {
  const path = join(__dirname, '..', '..', '..', 'public', 'pages', 'profile', 'index.html')
  res.sendFile(path);
};

module.exports = getProfile;
