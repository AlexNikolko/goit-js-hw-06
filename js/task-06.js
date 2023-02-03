const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
	if (inputEl.value.length === Number(inputEl.dataset.length)) {
		
		inputEl.classList.remove('invalid');
		inputEl.classList.add('valid');
		return;
	} inputEl.classList.remove('invalid');
	inputEl.classList.add('invalid');
};