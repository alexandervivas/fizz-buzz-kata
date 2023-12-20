export class Hiker {

  // It's a function that will print the number but everytime it's divided by 3 you will see in the console Fizz and when it's divided by 5 you will see in the console Buzz
  // and when it's divided by 3 and 5 you will see in the console FizzBuzz. Otherwise it will just print the number
  public printNumber(num: number) {
   if(num % 3 == 0 && num % 5 == 0) {
     console.log("FizzBuzz");
   } else if(num % 5 == 0 ) {
     console.log("Buzz");
   } else if(num % 3 == 0) {
     console.log("Fizz");
   } else {
     console.log(num);
   }
  }

  // It's a function that will go from 1 to 100 and for every number it will call the function printNumber
  public printFizzBuzz() {
    for (let i = 1;i <= 100; i++) {
      this.printNumber(i);
    }
  }
}
