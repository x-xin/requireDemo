define(function(require){
    // 导入组件a,b无需后缀名
    var a = require("app/a"),
        b = require("app/b");
    return{
        a: a,
        b: b
    }
});