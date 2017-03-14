/*
    Basically whenever we create a new Class in javascript all the
    member variables & methods are by default declare as public.
    As a result, anyone can execute it.

    By default we declare member variable using 'this' keyword and declared methods
    using 'prototype' keyword, like:

    function Point(x, y) {
        this._x = x;
        this._y = y
    }

    Point.prototype.position = function() {
        return("x:" + this._x + ", y: " + this._y);
    }

    Here we will declare a class which member variables and some methods are private,
    hidden from outside. And will provide some public methods for this class.

    - To make any member variable private you have to use 'var' to declare them.
    - To make any method private define the method inside the class scope and not declare
      them using 'prototype'


    Reference:
        - http://javascript.crockford.com/private.html
        - http://www.htmlgoodies.com/html5/tutorials/class-member-encapsulation-in-javascript-advanced-data-hiding-techniques.html#fbid=EZPhuiNmNor

*/

var Rectangle = function(w, h) {
    // define member variables
    var _width = w || 0;
    var _height = h || 0;

    // Private methods

    // Public methods
    this.set = function(w, h) { _width = w || _width; _height = h || _height; },
    this.setWidth = function(w) { _width = w || _width; },
    this.setHeight = function(h) { _height = h || _height; },
    this.getWidth = function() { return(_width); },
    this.getHeight = function() { return(_height); },
    this.area = function() { return( _width * _height); },
    this.perimeter = function() { return ((2 * _width) + (2 * _height)); },
    this.toString = function() { return "Rectangle of width: " + _width + " & height: " + _height; }
}


/* Inheritance */
// Define ctor of DepthRectangle class
var DepthRectangle = function (w, h, d) {
    // member variables
    var _depth = d;

    // call parent class ctor
    Rectangle.call(this, w, h);

    // Public methods
    // Methods of DepthRectangle class
    this.volume = function() {
        return(this.area() * _depth);
    }

    this.toString = function() {
        return "DepthRectangle of width: " + this.getWidth() + " & height: " + this.getHeight() + " & depth: " + _depth;
    }
}

// Set prototype of the subclass to it's superclass. Otherwise, we just get a
// subclass of 'object'.
DepthRectangle.prototype = new Rectangle();

// As DepthRectangle prototype was just created with Rectangle constructor, we
// have to re-assign it to DepthRectangle.
DepthRectangle.prototype.constructor = DepthRectangle;
