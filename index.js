const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require("./database/db");

const app = express();
const cors = require("cors");



dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`))