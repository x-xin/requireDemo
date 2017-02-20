/*
 * Author  2017@Roda.Wang  
 * QQ      835972558
*/

define(function(require){
    // 导入组件a,b无需后缀名
    var a               =    require("app/a"),
        b               =    require("app/b"),
        c               =    require("app/c"),
        person          =    require("app/person"),
        jquery          =    require("jquery"),
        common          =    require("app/common");

    return{
        a               :    a,
        b               :    b,
        c               :    c,
        person          :    person
    }

});