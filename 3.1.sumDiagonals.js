function sumDiagonals(input) {
	/**sum diagonal and reverse diagonal of a matrix*/
    let diagonal = 0;
    let reverseDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        diagonal += array[firstIndex++];
        reverseDiagonal += array[secondIndex--];
    })
    console.log(diagonal + ' ' + reverseDiagonal);
	return [diagonal, reverseDiagonal]
}