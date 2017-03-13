/*
    In this section we conver below commented code into
    Object Literal format.
    Then we build a module out of that Object Literal.
    We are following below mentioned steps:
        - Wrap $(document).ready(...) block into a self calling function
          to encapsulate all the variables.

        - Create a Object and transfer below code into that object and
          will apply all object literal properties & methods.

*/

/*$(document).ready( function() {
    var people = [];
    var template = $('#people-template').html();

    $('#peopleModule').find('button').on('click', function() {
        var peopleName = $('#peopleModule').find('input').val();
        if(peopleName != '') {
            people.push(peopleName);
            $('#peopleModule').find('input').val('');

            //data for mustache template
            var data = {
                people: people,
            };

            $('#peopleModule').find('ul').html(Mustache.render(template, data));
        }
    });

    $('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
        var $remove = $(e.target).closest('li');
        var i = $('#peopleModule').find('ul').find('li').index($remove);

        $remove.remove();
        people.splice(i, 1);
    });
});*/


// - Wrap $(document).ready(...) block into a self calling function
/*( function() {
    var people = [];
    var template = $('#people-template').html();

    $('#peopleModule').find('button').on('click', function() {
        var peopleName = $('#peopleModule').find('input').val();
        if(peopleName != '') {
            people.push(peopleName);
            $('#peopleModule').find('input').val('');

            //data for mustache template
            var data = {
                people: people,
            };

            $('#peopleModule').find('ul').html(Mustache.render(template, data));
        }
    });

    $('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
        var $remove = $(e.target).closest('li');
        var i = $('#peopleModule').find('ul').find('li').index($remove);

        $remove.remove();
        people.splice(i, 1);
    });
})();*/

//- Create a Object and transfer below code into that object and
//  will apply all object literal properties & methods.

var people = {
    people:[],
    template:'',
    dom: {
        $el:null,
        $button:null,
        $input:null,
        $ul:null
    },

    init: function() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
    },

    cacheDOM: function() {
        this.dom.$el = $('#peopleModule');
        this.dom.$button = this.dom.$el.find('button');
        this.dom.$input = this.dom.$el.find('input');
        this.dom.$ul = this.dom.$el.find('ul');

        this.template = this.dom.$el.find('#people-template').html();
    },

    bindEvents: function() {
        this.dom.$button.on('click', this.addPerson.bind(this));
        this.dom.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },

    render: function() {
        //data for mustache template
        var data = {
            people: this.people,
        };
        this.dom.$ul.html(Mustache.render(this.template, data));
    },

    addPerson: function(name) {
        var person = (typeof name === 'string') ? name : this.dom.$input.val();
        if(person != '') {
            this.people.push(person);
            this.dom.$input.val('');
            this.render();
        }
    },

    deletePerson: function(event) {
        var $remove = $(event.target).closest('li');
        var i = this.dom.$ul.find('li').index($remove);

        this.people.splice(i, 1);
        this.render();
    }
};


people.init();
