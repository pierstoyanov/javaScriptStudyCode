function solve(input, fn){ 
    const compareNumbers = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a,
    };
    
    return input.sort((a, b) => compareNumbers[fn](a, b))
}

solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')
