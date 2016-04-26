// instantiation -- classical prototype

var Person = function (name) {
    "use strict";
    this.name = name;
};

function inherits(ctor, superCtor) {
    "use strict";
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
     constructor: {
         value: ctor,
         enumerable: false,
         writable: true,
         configurable: true
     }
  });
};

// get created on Person automatically
Person.prototype = {};

Person.prototype.sayName = function() {
    "use strict";
  console.log("Hi i am", this.name);
};

Person.prototype.shoutName = function () {
    console.log('Hey !! i am ' + this.name);
};

var john = new Person('john');

john.sayName();

var Musician = function(name, instrument) {
    "use strict";
    Musician.super_.call(this,name);
    this.instrument = instrument;
};

inherits(Musician,Person);
Musician.prototype.play = function() {
    "use strict";
    console.log(this.instrument);
};
//Musician.prototype.shoutName = function () {
//    console.log('Hey !! i am ' + this.name + '!!!');
//};
var MJ = new Musician("MJ", "Flute");
MJ.sayName();
MJ.play();
MJ.shoutName();