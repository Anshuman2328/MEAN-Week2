var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
console.log(myString);
// myString was assigned a type string but 9 is not a a string hence the error


// function sayHello(name: string){
//     return `Hello, ${name}!`;
//  }
//  // This is working great:
//  console.log(sayHello("Kermit"));
//  // Why isn't this working? I want it to return "Hello, 9!"
//  console.log(sayHello('9'));

// //  same thing, the function takes in name as an argument. name is of type string but the console.log(sayHello(9)) has 9 as argument, which is not a string


// function fullName(firstName: string, lastName: string, middleName: string){
//     let fullName = `${firstName} ${middleName} ${lastName}`;
//     return fullName;
//  }
//  // This works:
//  console.log(fullName("Mary", "Moore", "Tyler"));
//  // What do I do if someone doesn't have a middle name?
//  console.log(fullName("Jimbo", "Jones", "tyler"));

// //  answer: We declared all the three names i.e. 3 parametes and if we fail to provide any of the 3 required arguments then we will have an error as above

// interface Student {
//     firstName: string;
//     lastName: string;
//     belts: number;
//  }
//  function graduate(ninja: Student){
//     return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
//  }
//  const christine = {
//     firstName: "Christine",
//     lastName: "Yang",
//     belts: 2
//  }
//  const jay = {
//     firstName: "Jay",
//     lastName: "Patel",
//     belts: 4
//  }
//  // This seems to work fine:
//  console.log(graduate(christine));
//  // This one has problems:
//  console.log(graduate(jay));

 
// //   answer: for Jay, we have 3 declarations, firstname, lastname and belt where as students have belts therfore we cannot use student interface to call jay

 
//  class Ninja {
//     fullName: string;
//     constructor(
//        public firstName: string,
//        public lastName: string){
//           this.fullName = `${firstName} ${lastName}`;
//        }
//     debug(){
//        console.log("Console.log() is my friend.")
//     }
//  }
//  // This is not making an instance of Ninja, for some reason:
//  const shane = new Ninja("shane", "mac");
//  // Since I'm having trouble making an instance of Ninja, I decided to do this:
//  const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
//  }
//  // Now I'll make a study function, which is a lot like our graduate function from above:
//  function study(string){
//     return `Ready to whiteboard an algorithm, ${turing.fullName}?`
//  }
//  // Now this has problems:
//  console.log(study(turing));
 
//  // turing is not an instance of Ninja, hence if we have parameter as Ninja
//  // then we must pass an instance of the class. 
//  // turing is however a varibale that is declared, if we need to pass turing
//  // then we must pass in a string and use turing as argument
 
//  var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => (x * x); 
// // parenthesis were needed

// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:



// // parenthesis required
// var multiply = (x,y) => x * y;
// // Nor is this working:


// // use function call and ensure return is in the function call.
// function math(x, y) {
//     let sum = x + y;
//     let product = x * y;
//     let difference = Math.abs(x - y);
//    return [sum, product, difference];
// }



// class Elephant {
//     constructor(public age: number){}
//     birthday = function(){
//        this.age++;
//     }
//  }
//  const babar = new Elephant(8);
//  setTimeout(babar.birthday, 1000)
//  setTimeout(function(){
//     console.log(`Babar's age is ${babar.age}.`)
//     }, 2000)
//  // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 