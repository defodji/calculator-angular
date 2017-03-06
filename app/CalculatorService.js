var CalculationService = CalculatorModule.service('CalculationService', function() {
	
			this.currentDisplay =  ""; // Shows the input until the result is shown
			var operation = "";
			var currentNumber =  "0";
			var resultDisplayed = false;
			var result = -1; // Holds the actual result in memory			

			this.init = function() {
				this.reset();
				this.currentDisplay =  ""; 
			}
			
			this.reset = function() {
				result = -1; 
				operation = "";
				currentNumber = "0";
			},
			
			this.setOperation = function(operationToSet) {
				operation = operationToSet;
				if (resultDisplayed) {
					this.currentDisplay = "0";
					resultDisplayed = false;
				}
				if(currentNumber === "0") {
					this.currentDisplay += "0";
				}
				
				this.currentDisplay += " " + operation + " ";
				this.calculate();
				
				currentNumber = "";
			},

			this.calculate = function() {
				if (result == -1) {
					result = parseFloat(currentNumber);
				} else {
					switch(operation) {
						case "+":
							result = result + parseFloat(currentNumber);
							break;
							
						case "-":
							result = result - parseFloat(currentNumber);
							break;

						case "*":
							result = result * parseFloat(currentNumber);
							break;

						case "/":
							result = result / parseFloat(currentNumber);
							break;						
					}
				}
			}	

			this.initNumberDisplay = function() {
				if(currentNumber === "0" || resultDisplayed) {
					currentNumber = "";
					this.currentDisplay = "";
					resultDisplayed = false;
				}
			}

			this.updateNumberDisplay = function(clickedNumber) {
				currentNumber += clickedNumber;
				this.currentDisplay += clickedNumber;
			}

			this.setResultAsDisplay = function() {
				this.currentDisplay = result;
				resultDisplayed = true;
			}
});