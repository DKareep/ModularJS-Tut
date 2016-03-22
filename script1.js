//(function(){
    var people = {
        people: ['Sj','shiva'],
        init: function() {
            "use strict";
            this.cacheDOM();
            this.bindEvents()
            this.render()
        },
        cacheDOM: function() {
            "use strict";
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#peopleTemplate').html()
        },
        bindEvents : function() {
            "use strict";
          this.$button.on("click", this.addPerson.bind(this));
          this.$ul.delegate('div.del').on('click',this.removePerson.bind(this))
        },
        render: function(){
            "use strict";
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.to_html(this.template,data));
        },
        addPerson: function(value) {
            "use strict";
            this.people.push(value || this.$input.val());
            this.render();
            this.$input.val('');
        },
        removePerson: function(e){
            "use strict";
            var $remove = $(e.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            this.people.splice(i,1);
            this.render();
        }

    };
    people.init();
//})();
