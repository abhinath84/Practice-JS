var stats = ( function() {
    var count = 0;
    var template = '';
    var dom = {
        $el:null,
        $label:null
    }

    function _init() {
        dom.$el = $('#peopleStats');
        dom.$label= dom.$el.find('label');
        template = dom.$el.find('#stats-template').html();

        _render();
    }

    function _render() {
        //data for mustache template
        var data = {
            stats: count,
        };
        dom.$label.html(Mustache.render(template, data));
    }

    function setPeople(number) {
        count = number;
        _render();
    }


    // calling basic function.
    _init();

    // return methods to access from outside.
    return({
        setPeople: setPeople
    });
})();
