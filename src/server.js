const express = require('express');

const app = express();
const PORT = 3000;

console.log(__dirname)

app.use(express.static(`${__dirname}/../static/`));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});