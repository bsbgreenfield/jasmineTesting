
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000, years: 1, rate: 0.1})).toEqual("87.91")
  expect(calculateMonthlyPayment({amount: 10000, years: 3, rate: 0.07})).toEqual("308.77")
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 1000, years: 1, rate: 0.1})).toEqual("87.91")
  expect(calculateMonthlyPayment({amount: 10000, years: 3, rate: 0.07})).toEqual("308.77")
});

/// etc
