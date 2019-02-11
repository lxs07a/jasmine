describe("My calculator", function() {
  it("Returns 0 when the array is empty", function() {
    expect(sumArray([])).toEqual(0);
  });

  it("Returns the same number when the array has just one element", function(){
    expect(sumArray([2])).toEqual(2);
  });

  it("Returns the sum of the numbers in the array", function() {
    expect(sumArray([2,3])).toEqual(5);
  });
});