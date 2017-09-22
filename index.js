const express = require('express');
const multer = require('multer');

const upload = multer();
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/', upload.single('file'), (req, res) => {
  // Return selected metadata to client
  res.send({
    filename: req.file.originalname,
    type: req.file.mimetype.split('/').pop(),
    size: req.file.size
  });
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
