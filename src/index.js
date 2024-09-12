const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRoute = require('./routes/usersRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const recipesRoute = require('./routes/recipesRoute');
const ingredientsRoute = require('./routes/ingredientsRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoute);
app.use('/categories', categoriesRoute);
app.use('/recipes', recipesRoute);
app.use('/ingredients', ingredientsRoute);


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
