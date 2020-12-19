const express = require('express');
const path = require('path');

const app = express();

// API space (coming)

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.port || 3000;

app.listen(port)