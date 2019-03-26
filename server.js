var express = require("express");
var app = express();
var mockData = require('./mock.js');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    console.log(123)
    });

app.get('/getText', function (req, res) {
    res.send(JSON.stringify(mockData.text));
});
 app.get('/getList', function (req, res) {
    res.send(JSON.stringify(mockData.list))
 });

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});