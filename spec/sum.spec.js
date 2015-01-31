import Sum from './../src/sum';

describe("Sum suite", () => {
  var mySum = new Sum(1,2,3,4,5);
  it("sums up to 15", () => {
    expect(mySum.sum()).toBe(15);
  });
});
