function attachEventsListeners() {
    const inputDistance = document.querySelector('#inputDistance');
    const outputDistance = document.querySelector('#outputDistance');

    let convertTable = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    }

    document.querySelector('#convert').addEventListener('click', function(e) {
        const inputUnit = document.querySelector('#inputUnits').value;
        const outputUnit = document.querySelector('#outputUnits').value;
    
        let result = convertTable[inputUnit]/convertTable[outputUnit] * Number(inputDistance.value);
        outputDistance.value = result;

    })
}