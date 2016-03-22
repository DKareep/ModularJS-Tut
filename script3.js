// Revealing module pattern

var people = (function(){
    "use strict";
    var people = ['name1','name2'];
    
    // cache DOM

    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#peopleTemplate').html();

    $button.on("click", addPerson);
    $ul.delegate('div.del').on('click',removePerson);

    _render();
//internal functions
    function _render() {
        "use strict";
        var data = {
            people: people
        };
        $ul.html(Mustache.to_html(template,data));
    }

     function addPerson(value) {
        "use strict";

         //people.addPerson('boom' )
        var name = (typeof value === 'string') ? value : $input.val() ;
        people.push(name);
        _render();
        $input.val('');
    }

    function removePerson(event){

        // people.removePerson(2) api use

        var i ;
        if(typeof event === "number"){
            i = event ;
        }else {
            console.log(event.target);
            var $remove = $(event.target).closest('li');
            console.log($remove);
            i = $ul.find('li').index($remove);
        }

        "use strict";

        people.splice(i,1);
        _render();
    }
    return {
        addPerson : addPerson,
        removePerson: removePerson
    }

})();