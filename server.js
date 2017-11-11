const path = require('path');
const express = require(`express`);
const bodyParser = require(`body-parser`);

const router = require(`router`);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(`/api`, router);

app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})