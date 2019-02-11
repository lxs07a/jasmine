function sumArray (array) {
  function getSum(total, num) {
    return total + num;
  };
  
  return (array.length <1?0: array.reduce(getSum));
}