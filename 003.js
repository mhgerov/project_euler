//version 2
var n = 600851475143;
var i = 2;
while (n%i != 0 || !isPrime(n/i)) {
    i++;
}
console.log(n/i);

function isPrime(n) {
    if (n<=1) {
        return false;
    } else if (n<=3) {
        return true;
    }
    isprime = true;
    var i = 2;
    do {
        if (n%i==0) {
            isprime = false;
            break;
        }
        i++;
    } while (i<=Math.sqrt(n))
    return isprime;
}