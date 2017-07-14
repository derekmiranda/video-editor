const express = require('express');

const app = express();
const { PORT } = require('./shared');

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));