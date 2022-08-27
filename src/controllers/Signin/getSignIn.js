const { join } = require('path');

const getSignIn = (req, res) => {
  const path = join(__dirname, '..', '..', '..', 'public', 'pages', 'signin', 'index.html');
  res.sendFile(path);
};

module.exports = getSignIn;
