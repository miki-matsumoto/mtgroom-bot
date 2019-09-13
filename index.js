const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express()
const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log('Bot is listening on port ' + PORT);
});
