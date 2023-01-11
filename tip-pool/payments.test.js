describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 10;
    });
  
    it('should calculate tipPercent using inputs', function () {
      submitPaymentInfo();
  
      expect(allPayments['payment1'].tipPercent).toEqual(10);
    });
  
    it('should payment update #paymentTable on appendPaymentTable()', function () {
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
  
      appendPaymentTable(curPayment);
  
      let td = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(td[0].innerText).toEqual('$100');
      expect(td[1].innerText).toEqual('$10');
      expect(td[2].innerText).toEqual('10%');
    });
  
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '100',
        tipAmt: '10',
        tipPercent: 10,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });
  