//main loop
n=19;
while(!isDivisable(n)) {
    n+=19;
}
console.log(n);

//helper function
function isDivisable(n) {
    divisors = [11,12,13,14,15,16,17,18,19,20];
    for (var i = 0; i<divisors.length; i++) {
        if (n%divisors[i]!=0) {
            return false;
        }
    }
    return true;
}