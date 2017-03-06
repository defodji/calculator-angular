
var CalculatorController = CalculatorModule.controller('CalculatorController', ['$scope', 'CalculationService', function ($scope, CalculationService) {
    $scope.calculator = CalculationService;
    CalculationService.init();
    
	$scope.digitOrPointClicked = function(clickedNumber) {
		CalculationService.initNumberDisplay();
		CalculationService.updateNumberDisplay(clickedNumber);
	};
	
	$scope.operationButtonClicked = function(clickedOperation) {
		CalculationService.setOperation(clickedOperation);				
	};
	
	$scope.answerClicked = function() {
		CalculationService.calculate();
		CalculationService.setResultAsDisplay();
		CalculationService.reset();
	};
}]);