//value evaluation has methods on it
// a = 1 ;
// a.toString()
// "1"
// 1.toString()
// error
// this creates a scope
var people = (function (){
    "use strict";
    var name = 'Dijin';

    function sayName (){
        alert(name);
    }
    return {
        sayName : sayName
    }
})();

// people.sayName() -- will alert name
// people.name = 'bob'  --- it will add people.name as in returning {name} no actual variable
//
// can pass data on to function })(value)