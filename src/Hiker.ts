export class Hiker {

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

  public printFizzBuzz() {
    for (let i = 1;i <= 100; i++) {
      this.printNumber(i);
    }
  }
}
