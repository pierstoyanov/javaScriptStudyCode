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