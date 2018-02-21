var sum = 2;
fib1 = 1;
fib2 = 2;
newfib = fib1 +fib2;
while (newfib <= 4e6) {
    if (newfib%2==0) {
        sum = sum+newfib;
    }
    fib1 = fib2;
    fib2 = newfib;
    newfib = fib1 + fib2;
}
console.log(sum)