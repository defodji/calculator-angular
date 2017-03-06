describe('CalculatorController', function () {
	var $controller;
	var $scope = {};

	beforeEach(function() {
  		module('Calculator');
  		inject(function(_$controller_) {
  			$controller = _$controller_;
  		});
  	});

	it('ServiceTestAdditionSpec', function() { 
		var controller = $controller('CalculatorController', { $scope: $scope });
		expect($scope.calculator.currentDisplay).toEqual("");
		$scope.digitOrPointClicked(1);
		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("12");
		$scope.operationButtonClicked("+");
		expect($scope.calculator.currentDisplay).toEqual("12 + ");
		$scope.digitOrPointClicked(3);
		$scope.digitOrPointClicked(2);
		$scope.digitOrPointClicked(".");
		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("12 + 32.2");
		$scope.answerClicked();
		expect($scope.calculator.currentDisplay).toEqual(44.2);

		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("2");
	}); 	

	it('ServiceTestSubtractionSpec', function() { 
		var controller = $controller('CalculatorController', { $scope: $scope });
		expect($scope.calculator.currentDisplay).toEqual("");
		$scope.digitOrPointClicked(5);
		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("52");
		$scope.operationButtonClicked("-");
		expect($scope.calculator.currentDisplay).toEqual("52 - ");
		$scope.digitOrPointClicked(3);
		$scope.digitOrPointClicked(2);
		$scope.digitOrPointClicked(".");
		$scope.digitOrPointClicked(2);
		$scope.digitOrPointClicked(0);
		expect($scope.calculator.currentDisplay).toEqual("52 - 32.20");
		$scope.answerClicked();
		expect($scope.calculator.currentDisplay).toBeCloseTo(19.8, 2);

		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("2");
	}); 	

	it('ServiceTestMultiplicationSpec', function() { 
		var controller = $controller('CalculatorController', { $scope: $scope });
		expect($scope.calculator.currentDisplay).toEqual("");
		$scope.digitOrPointClicked(1);
		$scope.digitOrPointClicked(2);
		$scope.digitOrPointClicked(".");
		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("12.2");
		$scope.operationButtonClicked("*");
		expect($scope.calculator.currentDisplay).toEqual("12.2 * ");
		$scope.digitOrPointClicked(3);
		expect($scope.calculator.currentDisplay).toEqual("12.2 * 3");
		$scope.answerClicked();
		expect($scope.calculator.currentDisplay).toBeCloseTo(36.6, 2);

		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("2");
	}); 		

	it('ServiceTestDivisionSpec', function() { 
		var controller = $controller('CalculatorController', { $scope: $scope });
		expect($scope.calculator.currentDisplay).toEqual("");
		$scope.digitOrPointClicked(1);
		$scope.digitOrPointClicked(2);
		$scope.digitOrPointClicked(".");
		$scope.digitOrPointClicked(6);
		expect($scope.calculator.currentDisplay).toEqual("12.6");
		$scope.operationButtonClicked("/");
		expect($scope.calculator.currentDisplay).toEqual("12.6 / ");
		$scope.digitOrPointClicked(3);
		expect($scope.calculator.currentDisplay).toEqual("12.6 / 3");
		$scope.answerClicked();
		expect($scope.calculator.currentDisplay).toBeCloseTo(4.2, 2);

		$scope.digitOrPointClicked(2);
		expect($scope.calculator.currentDisplay).toEqual("2");
	}); 		
});