const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(8002, () => {
  console.log('Server is running on port: 8002');
}); 