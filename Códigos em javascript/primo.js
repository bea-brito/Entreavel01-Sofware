function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var numero = 31;

for (var i = 2; i < numero+1; i++) if (primeNumber(i)) console.log(i);