function argInfo(...items) {

    let count = {
        vals: {},
        print: function() {
            result = []
            for (const item in this.vals) {
                    result.push(`${item} = ${this.vals[item]}`)
            }
            result.sort((a, b) => b.split(' = ')[1] - a.split(' = ')[1])
            result.forEach(x=>console.log(x))
        }
    };

    items.forEach( x => {
        let t = typeof(x);
        if (count.vals[t]){
            count.vals[t] += 1;
        } else {
            count.vals[t] = 1;
        }
        
        console.log(`${t}: ${x}`)
        })

    count.print()
}

// argInfo('cat', 42, function () { console.log('Hello world!'); })

// argInfo({ name: 'bob'}, 3.333, 9.999);

argInfo(42, 'cat', 15, 'kitten', 'tomcat')
