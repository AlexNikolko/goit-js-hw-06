const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	console.dir(event.currentTarget.elements);

	const mail = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;

	const formEl = { mail, password };

	console.log(formEl);

	if (mail === '' || password === '') {
		const message = 'Все поля должны быть заполнены!';
		alert(message);
	}

	event.currentTarget.reset();
}