var stats = (function(){
    "use strict";
    var people = 0;
    var $stats = $('#statusModule');
    var template =  $('#stats-template').html();

    events.on('peopleChanged', setPeople);

    render();
    function render(){
        console.log(people);
        $stats.html(Mustache.to_html(template, {people: people }))
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }
    function destroy() {
         $stats.remove();
        events.off('peopleChanged', setPeople)
    }
    return {
        destroy: destroy
    };
})();