class Calculator {
	constructor(displayElement) {
		this.displayElement = displayElement;
		this.currentInput = '';
	}

	addNumber(number) {
		this.currentInput += number;
		this.updateDisplay();
	}

	addOperator(op) {
		this.currentInput += op;
		this.updateDisplay();
	}

	calculate() {
		this.currentInput = eval(this.currentInput);
		this.updateDisplay();
	}

	clearDisplay() {
		this.currentInput = '';
		this.updateDisplay();
	}

	updateDisplay() {
		this.displayElement.value = this.currentInput;
	}
}
const display = document.getElementById('display');
let calculator = new Calculator(display);

const numberButtons = document.getElementsByClassName('number');

for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener('click', function () {
		calculator.addNumber(this.innerText);
		console.log({ this: this });
	});
}

const operatorButtons = document.getElementsByClassName('operator');

for (let i = 0; i < operatorButtons.length; i++) {
	operatorButtons[i].addEventListener('click', function () {
		calculator.addOperator(this.innerText);
	});
}

document.querySelector('.equal').addEventListener('click', function () {
	calculator.calculate();
});

document.querySelector('.clear').addEventListener('click', function () {
	calculator.clearDisplay();
});
