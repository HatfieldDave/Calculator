const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumInput() {
	return parseInt(userInput.value);
}

function add() {
	const enteredNum = getUserNumInput();
	const calcDescription = `${currentResult} + ${enteredNum}`;
	currentResult = currentResult + enteredNum;
	outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
