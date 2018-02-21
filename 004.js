var palindrome = 0;

//main loop
for (var a = 999; a>0; a--) {
    for (var b = 999; b>0; b--) {
        if (isPalindrome(a*b) && a*b>palindrome) {
            palindrome = a*b;
        }
    }
}
console.log(palindrome);

//helper function
function isPalindrome(n) {
    n=n.toString().split("");
    for (var i=0;i<n.length/2;i++) {
        if (n[i] != n[n.length-1-i]) {
            return false;
        }
    }
    return true;
}