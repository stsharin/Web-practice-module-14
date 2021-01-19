function isPrime(n){
    for(i=2; i<n; i++){
        // console.log(i, n%i);
        if(n%i==0){
            return "This is not a prime number.";
        }
        return "This is a prime number.";
    }
}
var result = isPrime(129);
console.log(result);