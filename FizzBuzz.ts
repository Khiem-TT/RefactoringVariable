export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let isBuzz = n % 3;
        let isFizz = n % 5;
        if (isBuzz == 0 && isFizz == 0) {
            this.message = 'FizzBuzz';
        } else if (isFizz == 0) {
            this.message = 'Fizz';
        } else if (isBuzz == 0) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}
