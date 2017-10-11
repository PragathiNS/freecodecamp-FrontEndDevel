// A constructor function is given a capitalized name to make it clear that it is a constructor.
var Car = function() {
    this.wheels = 4;
    this.seats = 5;
    this.engines = 1;
    
    
    // this is a private variable
    var speed = 10;

    // these are public methods
    this.accelerate = function(change) {
      speed += change;
    };

    this.decelerate = function() {
      speed -= 5;
    };

    this.getSpeed = function() {
      return speed;
    };
};
  
// Make Unique Objects by Passing Parameters to our Constructor 
var Car2 = function(wheels, seats, engines) {
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};

// To use a constructor function we call it with the new keyword in front of it like:
var myCar = new Car();
myCar.nickname = "Carsy"; // sets nickname as it's property

//Try it out here
var myCar2 = new Car(4, 7, 2);

console.log("Speed before: " + myCar.getSpeed());
myCar.accelerate(5);
console.log("Speed after acceleration: " + myCar.getSpeed());


console.log("Car2 wheels: " + myCar2.wheels);