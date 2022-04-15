const express = require('express');
const { listen } = require('express/lib/application');
const app = express();
// app.use(express.json());
app.use('/', express.static('./public'));

app.listen(5555, () => {
    console.log("Start");
})