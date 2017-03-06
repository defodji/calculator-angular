describe('CalculationService', function () {

  var CalculationService;

  beforeEach(function() {
  	module('Calculator');
  	inject(function(_CalculationService_) {
  		CalculationService = _CalculationService_;
  	});
  });

  it('ServiceTestAdditionSpec', function() {
  	CalculationService.init();
  	expect(CalculationService.currentDisplay).toEqual("");
  	CalculationService.initNumberDisplay();
  	expect(CalculationService.currentDisplay).toEqual("");
  	CalculationService.updateNumberDisplay(1);
  	expect(CalculationService.currentDisplay).toEqual("1");
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("12");
  	CalculationService.updateNumberDisplay(5);
  	expect(CalculationService.currentDisplay).toEqual("125");
  	CalculationService.setOperation("+");
  	expect(CalculationService.currentDisplay).toEqual("125 + ");
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("125 + 2");
  	CalculationService.updateNumberDisplay(".");
  	expect(CalculationService.currentDisplay).toEqual("125 + 2.");
  	CalculationService.updateNumberDisplay("5");
  	expect(CalculationService.currentDisplay).toEqual("125 + 2.5");
  	CalculationService.calculate();
  	CalculationService.setResultAsDisplay();
  	expect(CalculationService.currentDisplay).toEqual(127.5);
  	CalculationService.reset();
  	CalculationService.initNumberDisplay();
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("2");
  });

  it('ServiceTestSubtractionSpec', function() {
  	CalculationService.init();
  	CalculationService.initNumberDisplay();
  	expect(CalculationService.currentDisplay).toEqual("");
  	CalculationService.updateNumberDisplay(1);
  	expect(CalculationService.currentDisplay).toEqual("1");
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("12");
  	CalculationService.updateNumberDisplay(5);
  	expect(CalculationService.currentDisplay).toEqual("125");
  	CalculationService.setOperation("-");
  	expect(CalculationService.currentDisplay).toEqual("125 - ");
  	CalculationService.updateNumberDisplay(1);
  	CalculationService.updateNumberDisplay(0);
  	CalculationService.updateNumberDisplay(9);
  	CalculationService.updateNumberDisplay(".");
  	CalculationService.updateNumberDisplay(5);
  	expect(CalculationService.currentDisplay).toEqual("125 - 109.5");
  	CalculationService.calculate();
  	CalculationService.setResultAsDisplay();
  	expect(CalculationService.currentDisplay).toEqual(15.5);
  	CalculationService.reset();
  	CalculationService.initNumberDisplay();
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("2");
  }); 

  it('ServiceTestMultiplicationSpec', function() {
  	CalculationService.init();
  	CalculationService.initNumberDisplay();
  	expect(CalculationService.currentDisplay).toEqual("");
  	CalculationService.updateNumberDisplay(1);
  	expect(CalculationService.currentDisplay).toEqual("1");
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("12");
  	CalculationService.updateNumberDisplay(5);
  	CalculationService.updateNumberDisplay(".");
  	CalculationService.updateNumberDisplay(5);
  	expect(CalculationService.currentDisplay).toEqual("125.5");
  	CalculationService.setOperation("*");
  	expect(CalculationService.currentDisplay).toEqual("125.5 * ");
  	CalculationService.updateNumberDisplay(1);
  	CalculationService.updateNumberDisplay(0);
  	expect(CalculationService.currentDisplay).toEqual("125.5 * 10");
  	CalculationService.calculate();
  	CalculationService.setResultAsDisplay();
  	expect(CalculationService.currentDisplay).toEqual(1255);
  	CalculationService.reset();
  	CalculationService.initNumberDisplay();
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("2");
  });  

  it('ServiceTestDivisionSpec', function() {
  	CalculationService.init();
  	CalculationService.initNumberDisplay();
  	expect(CalculationService.currentDisplay).toEqual("");
  	CalculationService.updateNumberDisplay(1);
  	expect(CalculationService.currentDisplay).toEqual("1");
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("12");
  	CalculationService.updateNumberDisplay(5);
  	CalculationService.updateNumberDisplay(".");
  	CalculationService.updateNumberDisplay(5);
  	expect(CalculationService.currentDisplay).toEqual("125.5");
  	CalculationService.setOperation("/");
  	expect(CalculationService.currentDisplay).toEqual("125.5 / ");
  	CalculationService.updateNumberDisplay(1);
  	CalculationService.updateNumberDisplay(0);
  	expect(CalculationService.currentDisplay).toEqual("125.5 / 10");
  	CalculationService.calculate();
  	CalculationService.setResultAsDisplay();
  	expect(CalculationService.currentDisplay).toEqual(12.55);
  	CalculationService.reset();
  	CalculationService.initNumberDisplay();
  	CalculationService.updateNumberDisplay(2);
  	expect(CalculationService.currentDisplay).toEqual("2");
  });  

});