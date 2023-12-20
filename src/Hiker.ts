export class Hiker {
  public askQuestion(question: number) {
    return 6 * 7
  }

  public printNumber(num: number) {
    console.log(num);
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

  public printFizzBuzz(num: number) {
    for (let i = 1;i <= 100; i++) {
      this.printNumber(i);
    }
  }
}
