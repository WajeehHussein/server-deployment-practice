'use strict';
const express = require('express')

const stamp = require('../middleWares/stamp')
const notFoundHandler = require('../handleErorrs/404')
const errorHandler = require('../handleErorrs/500')

const app = express();

app.get("/", (req, res) => {
    res.status(200).send('hello')
})

app.get("/data", (req, res) => {
    res.json({
        id: 1,
        name: 'Wajeeh',
        Email: "wajeeh@gamil.com"
    });
});

app.get("/test", stamp, (req, res) => {
    res.json({
        id: 2,
        name: 'Issam',
        email: 'test@gmail.com',
        time: req.timeStamp
    })
})

app.get("/bad", (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);

})

app.use('*', notFoundHandler)
app.use(errorHandler)


function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    })
}
module.exports = {
    app: app,
    start: start,
}

