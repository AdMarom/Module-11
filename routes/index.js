const express = require('express');

//Import modular routers for /note-route
const noteRouter = require('./note-route');

const app = express();

app.use('/note-route', noteRouter);

module.exports = app;