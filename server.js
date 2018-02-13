const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join('public')));

const port = process.env.PORT || 3000;


app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});
