var n = 100;

//square of sums
var sq_of_sm = Math.pow(n*(n+1)/2,2);

//sum of squares
var sm_of_sq = Math.pow(n,3)/3+Math.pow(n,2)/2+n/6;

console.log("Square of Sums: "+sq_of_sm);
console.log("Sum of Squares: "+sm_of_sq);
console.log(sq_of_sm-sm_of_sq);