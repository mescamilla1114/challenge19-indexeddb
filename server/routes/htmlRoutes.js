const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>{
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
  }
    //res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
