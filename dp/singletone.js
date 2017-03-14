var Hero = function(name) {
    // check object is already exists or not.
    if(typeof Hero.instance === 'object') {
        return Hero.instance;;
    }

    // Create single object
    this.name = name;
    Hero.instance = this;

    return this;
}
