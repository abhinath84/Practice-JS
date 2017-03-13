/*
    Some ground rules for module:
    - Self-contained module.
        - everything to do with my module is in my module.
        - no global Variables.
        - if a module manage more than one thing then it shuold be split up.
    - Seperation of concerns.
    - DRY code: Don't Repeat Yourself.
    - efficient DOM usage.
        - very few $(selections)
    - no memory leaks
        - allow events can be unbound.

*/


/*  What was the problem of Object Literal in 'script.js' file's example?
        - Any other module can access any variable and methods of 'people' object
          and modify them.
          Which might introduce bugs.

        - SO, we need to give permission to other module to access those methods Which
          'people' object allowed. Like: addPerson & deletePerson methods.
        - How to do that?
            - To solve this problem we modify our code in a better way and make it a true module.
*/
/*
    - Basic step to make a module:
        - Create a self calling function/object.
        - Create your sub-object inside that function/object.
          Now, sub-object is encapsulated and hidden from outside modules.
        - Returns an object which contain methods and variables which will give others
          access to this module.
*/

var people = ( function() {
    var people=[];
    var template='';
    var dom = {
        $el:null,
        $button:null,
        $input:null,
        $ul:null
    };

    function _init() {
        _cacheDOM();
        _bindEvents();
        _render();
    }

    function _cacheDOM() {
        dom.$el = $('#peopleModule');
        dom.$button = dom.$el.find('button');
        dom.$input = dom.$el.find('input');
        dom.$ul = dom.$el.find('ul');

        template = dom.$el.find('#people-template').html();
    }

    function _bindEvents() {
        dom.$button.on('click', addPerson);
        dom.$ul.delegate('i.del', 'click', deletePerson);
    }

    function _render() {
        //data for mustache template
        var data = {
            people: people,
        };
        dom.$ul.html(Mustache.render(template, data));
        stats.setPeople(people.length);
    }

    function addPerson(name) {
        var person = (typeof name === 'string') ? name : dom.$input.val();
        if(person != '') {
            people.push(person);
            dom.$input.val('');
            _render();
        }
    }

    function deletePerson(event) {
        var i;
        if(typeof event === 'number'){
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = dom.$ul.find('li').index($remove);
        }

        people.splice(i, 1);
        _render();
    }

    // calling basic function.
    _init();

    // return methods to access from outside.
    return({
        addPerson: addPerson,
        deletePerson: deletePerson
    });
})();
