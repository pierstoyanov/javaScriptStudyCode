function add(x) {
    let sum = 0;
    sum += x;

    function calc(y) {
        sum += y;
        return calc      
    }

    calc.toString = () => sum;
    return calc;
};

console.log(""+ add(1)(6)(-3))
console.log(""+ add(1))
