// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/comments');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.listen(port, () => console.log(`Server is listening on port ${port}`));