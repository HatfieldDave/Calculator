const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumInput() {
	return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function add() {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult += enteredNum;
	createAndWriteOutput('+', initialResult, enteredNum);
	writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtract() {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult -= enteredNum;
	createAndWriteOutput('-', initialResult, enteredNum);
	writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiply(params) {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult *= enteredNum;
	createAndWriteOutput('*', initialResult, enteredNum);
	writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide(params) {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult /= enteredNum;
	createAndWriteOutput('/', initialResult, enteredNum);
	writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
