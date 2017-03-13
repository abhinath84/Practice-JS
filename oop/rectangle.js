/* Create a Rectangle class */

// Define ctor of Rectangle class
function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

// Define method of Rectangle class
// area method
Rectangle.prototype.area = function() {
    return( this.width * this.height);
}

// perimeter method
Rectangle.prototype.perimeter = function() {
    return ((2 * this.width) + (2 * this.height));
}

Rectangle.prototype.toString = function() {
    return "Rectangle of width: " + this.width + " & height: " + this.height;
}

Rectangle.prototype.equals = function(other) {
    return((this.width == other.width) && (this.height == other.height));
}

// Static and non-member methods
// Create an empty Rectangle object
Rectangle.EMPTY = new Rectangle(0, 0);

// Get max Rectangle among two.
Rectangle.MAX = function(a, b) {
    if(a.area() == b.area())    return null;
    if(a.area() > b.area())     return a;
    else                        return b;
}


// Define ctor of DepthRectangle class
function DepthRectangle(w, h, d) {
    // call parent class ctor
    Rectangle.call(this, w, h);
    this.depth = d;
}

// Set prototype of the subclass to it's superclass. Otherwise, we just get a
// subclass of 'object'.
DepthRectangle.prototype = new Rectangle();

// As DepthRectangle prototype was just created with Rectangle constructor, we
// have to re-assign it to DepthRectangle.
DepthRectangle.prototype.constructor = DepthRectangle;

// Methods of DepthRectangle class
DepthRectangle.prototype.volume = function() {
    return(this.area() * this.depth);
}

DepthRectangle.prototype.toString = function() {
    return "DepthRectangle of width: " + this.width + " & height: " + this.height + " & depth: " + this.depth;
}
