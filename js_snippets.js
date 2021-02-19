// sort numbers in asc or dsc order
const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};


// Quickly turn str characters to math operators
// mathOperators[string](a, b)
let mathOperators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};


// This removes unsafe characters from HTML text
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// edit element
function edit(ref, match, replacer) {
  const content = ref.textContent;
  const matcher = new RegExp(match, 'g');
  const edited = content.replace(matcher, replacer);
  ref.textContent = edited;
};

// quick show hide elements in DOM
function showText() {
	document.querySelector('#').style.display = 'inline';
	document.querySelector('#').style.display = 'none';
};

// Regex extract content between () or other chars
let rx = new RegExp(/\((.*?)\)/g);

// regex to split by dots
/(?<=\.)/


// array get index, filter by index, return str
function reduceArr(arr) {
  return arr.map(x => arr.indexOf(x) % 2 == 0 ? x : 0)
  .filter(x=> x!=0)
  .join(' ')
}

// sum diagonals
function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

// factory function

function createElement(type, content) {
  const element = document.createElement(type);
  element.textContent = content;
  return element;
}




function outer() {
  let a = 5;
  
  function innerA() {
    a = 6;
  }
  function innerB() {
    console.log(a);
  }
  return {
    innerA,
    innerB
  };
}
const result = outer();
result.innerA();
result.innerB();