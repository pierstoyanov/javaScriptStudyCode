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
}