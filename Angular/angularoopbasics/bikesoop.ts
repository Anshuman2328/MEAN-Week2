

class Bike {
    price : number;
    max_speed : number;
    miles : number;
    name : string;
    constructor (price:number, max_speed:number, miles : number, name : string ){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
        this.name = name;
    }
    dispayInfo(){
        return console.log("Hello " + this.price + " " + " "+ this.name + " " + this.miles);
    }

    ride(){
        this.miles = this.miles + 10;
        return this;
    }
    reverse(){
        this.miles = this.miles - 5;
        return this;
    }


}
let bike1 = new Bike(1500,200, 0 , "ninja")
let bike2 = new Bike(1500,200, 200, "kawa" )

bike1.dispayInfo();
bike2.dispayInfo();
bike2.ride().ride().ride().dispayInfo();
bike2.reverse().dispayInfo();
bike2.reverse().reverse().reverse().reverse().reverse().reverse().dispayInfo();



// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");
