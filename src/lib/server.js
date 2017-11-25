// @flow
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('router'); // eslint-disable-line

const app = express();
const port: number = Number(process.env.PORT) || 3000;

console.log("YES")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', router);

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`); // eslint-disable-line
});
