let input = Number(prompt('Input a number under 1000: '))

function isPrime(input) {
    if (input >= 1000) {
        prompt('Please input a number under 1000: ')
    } else {
        for (let i = 2; i <= input; i++) {
            if (input % i == 0) {
                break;
            }
        }
    }
    result = `${input} is a prime number`;
    return result;
}