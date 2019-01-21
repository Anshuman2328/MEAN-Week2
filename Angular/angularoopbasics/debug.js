var myString;
// I can assign myString like this:
myString = "Bee stinger";
console.log(myString);
// Why is there a problem with this? What can I do to fix this?
myString = "9";
console.log(myString);
// myString was assigned a type string but 9 is not a a string hence the error
function sayHello(name) {
    return "Hello, " + name + "!";
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello('9'));
//  same thing, the function takes in name as an argument. name is of type string but the console.log(sayHello(9)) has 9 as argument, which is not a string
function fullName(firstName, lastName, middleName) {
    var fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones", "tyler"));
function graduate(ninja) {
    return "Congratulations, " + ninja.firstName + " " + ninja.lastName + ", you earned " + ninja.belts + " belts!";
}
var christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
};
var jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
};
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
//   answer: for Jay, we have 3 declarations, firstname, lastname and belt where as students have belts therfore we cannot use student interface to call jay
var Ninja = /** @class */ (function () {
    function Ninja(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Ninja.prototype.debug = function () {
        console.log("Console.log() is my friend.");
    };
    return Ninja;
}());
// This is not making an instance of Ninja, for some reason:
var shane = new Ninja("shane", "mac");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
var turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
};
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(string) {
    return "Ready to whiteboard an algorithm, " + turing.fullName + "?";
}
// Now this has problems:
console.log(study(turing));
// turing is not an instance of Ninja, hence if we have parameter as Ninja
// then we must pass an instance of the class. 
// turing is however a varibale that is declared, if we need to pass turing
// then we must pass in a string and use turing as argument
var increment = function (x) { return x + 1; };
// This works great:
console.log(increment(3));
var square = function (x) { return (x * x); };
// parenthesis were needed
// This is not showing me what I want:
console.log(square(4));
// This is not working:
// parenthesis required
var multiply = function (x, y) { return (x * y); };
// Nor is this working:
// use function call and ensure return is in the function call.
function math(x, y) {
    var sum = x + y;
    var product = x * y;
    var difference = Math.abs(x - y);
    return [sum, product, difference];
}
var Elephant = /** @class */ (function () {
    function Elephant(age) {
        var _this = this;
        this.age = age;
        this.birthday = function () {
            _this.age++;
        };
    }
    return Elephant;
}());
var babar = new Elephant(55);
setTimeout(babar.birthday, 1000);
setTimeout(function () {
    console.log("Art's age is " + babar.age + ".");
}, 2000);
// setInterval(() => {
//     this.age++; // |this| properly refers to the Person object
//         console.log(`Babar's age is ${babar.age}.`)
//   }, 1000);
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
//  answer: the arrow function is needed to point the birthday to anoanymous function and arrow pointing to 
// this.age++ then only the birthday will increase
