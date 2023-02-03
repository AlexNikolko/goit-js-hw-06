const inputRangeEl = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

const onInput = (value) => {
	inputTextEl.style.fontSize = `${inputRangeEl.value}px`;
	console.log(inputTextEl.style.fontSize);
	};

inputRangeEl.addEventListener("input", onInput);