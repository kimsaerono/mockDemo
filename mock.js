var Mock = require("mockjs");
var data = {
    list : Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    }),
    text : Mock.mock({
        'text|2-4' : "na"
    })
}

exports = module.exports = data