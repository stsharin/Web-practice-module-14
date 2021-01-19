function factorial(n){
    if (n==0){
        return 1;
    }
    else{
        return n*(factorial(n-1));
    }
}
const fact = factorial(6);
console.log(fact);