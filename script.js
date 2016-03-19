var people = [];
var template = $('#peopleTemplate').html();
console.log(template);
// .html() jquery func
$('#peopleModule').find('button').on('click', function () {
    "use strict";
    people.push($('#peopleModule').find('input').val());
    $('#peopleModule').find('input').val('');
    //.val() jquery func
    var data = {
        people: people
    };
    var html = Mustache.to_html(template, data);
    $('#peopleModule').find('ul').html(Mustache.to_html(template, data));
});

$('#peopleModule').find('ul').delegate('div.del', 'click', function (e) {
    "use strict";
    var $remove = $(e.target).closest('li');
    //closest jQuey
    var i = $('#peopleModule').find('ul').find('li').index($remove);
    $remove.remove();
    people.slice(i, 1);
});