var events = {
    events: {},
    on: function (eventName, fn) {
        "use strict";
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    off: function (eventName, fn) {
        "use strict";
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName]; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    },
    emit: function(eventName,data){
        "use strict";
        if(this.events[eventName]) {
            this.events[eventName].forEach(function(fn){
               fn(data);
            });
        }
    }
};