function solution() {
    let stock = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0, 
    }

    let recipes = {
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'apple': {
            'carbohydrate': 1,
            'flavour': 2, 
        },
        'burger' : {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3, 
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1, 
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10, 
        },

    }

    const execute = {
        'restock': (i, v) => {
            stock[i] += v;
            return 'Success'
        },
        'prepare': (i, v) => {
            let canMake = undefined;

            for (const [key, val] of Object.entries(recipes[i])) {
                if (stock[key] < val * v) {
                    canMake = false;
                    return `Error: not enough ${key} in stock`
                }
            }

            for (const [key, val] of Object.entries(recipes[i])) {
                stock[key] -= val * v;
            }

            return 'Success'
        },
        'report': () => {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}` 
        }
    };


    return function (input) {
        if (input) {
            let [command, item, value] = input.split(' ');
            // console.log(command, item, value)      
            return execute[command](item, Number(value));
        }
    }
}



let manager = solution (); 
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock carbohydrates 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));

console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare lemonade 2"));
console.log(manager("report"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));
