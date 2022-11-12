require('dotenv').config();
const express = require('express');
var cors = require('cors');
const dbConnection = require('./db/config');

const app = express();
const port = process.env.PORT;

app.use(cors());

const paths = {
    users: '/api/users',
    auth: "/api/auth",
    products: "/api/products",
}

dbConnection();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(paths.auth, require('./routes/auth'));
app.use(paths.users, require('./routes/users'));
app.use(paths.products, require('./routes/products'));

app.listen(port, () => {
    console.clear();
    console.log(`SERVER ON: http://localhost:${port}/`);
});