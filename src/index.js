const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRoute = require('./routes/usersRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoute);


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
