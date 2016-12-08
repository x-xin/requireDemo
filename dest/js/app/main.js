define('app/a',[],function(){
    return function(x,y){
        return x+y;
    }
});
define('app/b',[],function(){
    return function(x,y){
        return x-y;
    }
});
define('app/main',['require','app/a','app/b'],function(require){
    // 导入组件a,b无需后缀名
    var a = require("app/a"),
        b = require("app/b");
    return{
        a: a,
        b: b
    }
});
