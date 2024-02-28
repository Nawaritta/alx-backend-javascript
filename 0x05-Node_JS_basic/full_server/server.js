const routes = require('./routes/index.js');
const express = require('express');
const port = 1245;
const app = express();

app.use('/', routes);
app.listen(port);
export default app;




