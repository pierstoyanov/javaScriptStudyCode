// sort numbers in asc or dsc order
const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};

let mathOperators = {
	/** mathOperators[string](a, b)
	Object to Quickly turn str characters to math operators */
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

function replaceMatch(referece, match, newContent) {
	/** Replace content in DOM element matching a rx
	*referece = el reference, match = rx str, newContent = str to be input
	*/
  const content = referece.textContent;
  const matcher = new RegExp(match, 'g');
  const edited = content.replace(matcher, newContent);
  referece.textContent = edited;
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

// factory function
function createElement(type, content) {
  const element = document.createElement(type);
  element.textContent = content;
  return element;
}


//Test function scope
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



function newDomElement(type, attributes, ...content) {
	/**
	 * (type: str, attributes: obj, ...content)
	 * create new Dom element of type with attrs from obj values and content 
	 */

	const result = document.createElement(type);
	
	for (let [attr, val] of Object.entries(attributes || {})) {
		if (attr.substring(0, 2) == 'on') {
			result.addEventListener(attr.substring(2).toLocaleLowerCase(), val);
		} else {
			result[attr] = val;
		}
	}
	
	content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
	
	content.forEach(e => {
		if (typeof(e) == 'string' || typeof(e) == 'number') {
			const node = document.createTextNode(e);
			result.appendChild(node);
		} else {
			result.appendChild(e);
		}
	})
	return result;
}

async function request(url, options) {
	/**
	* create a request to URL and pass options obj to request
	*/
    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}
