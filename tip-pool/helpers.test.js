describe("Test Helpers.js", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
  
    it('should sum total  bill amount and tip amount after adding new value', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(10);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
        
      expect(sumPaymentTotal('billAmt')).toEqual(300);
      expect(sumPaymentTotal('tipAmt')).toEqual(30);
      
    });
  

    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(10);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 10;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(15);
    });
  
  
    it('should add new td after appendTd', function () {
      let tr = document.createElement('tr');
  
      appendTd(tr, 'test');
  
      expect(tr.children.length).toEqual(1);
      expect(tr.firstChild.innerHTML).toEqual('test');
    });
  
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });