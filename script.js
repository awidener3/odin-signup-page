const first = document.querySelector('#first-name');
const last = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password');

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

first.addEventListener('change', (e) => validate(nameRegex, e.target));
last.addEventListener('change', (e) => validate(nameRegex, e.target));
email.addEventListener('change', (e) => validate(emailRegex, e.target));
phone.addEventListener('change', (e) => validate(phoneRegex, e.target));
confirm.addEventListener('change', (e) => confirmPassword(e.target));

function validate(regex, el) {
	// Remove mark if present
	if (el.parentNode.lastElementChild.classList.contains('fa-solid')) {
		el.parentNode.lastElementChild.remove();
	}

	if (!regex.test(el.value)) {
		el.style.borderColor = 'red';
		const check = document.createElement('i');
		check.classList.add('fa-solid', 'fa-circle-xmark', 'xmark');
		el.parentNode.insertBefore(check, el.nextSibling);
	} else {
		el.style.borderColor = 'green';
		const check = document.createElement('i');
		check.classList.add('fa-solid', 'fa-circle-check', 'checkmark');
		el.parentNode.insertBefore(check, el.nextSibling);
	}
}

function confirmPassword(el) {
	if (el.value === password.value) {
		password.style.borderColor = 'green';
		el.style.borderColor = 'green';

		const check1 = document.createElement('i');
		check1.classList.add('fa-solid', 'fa-circle-check', 'checkmark');
		el.parentNode.insertBefore(check1, el.nextSibling);

		const check2 = document.createElement('i');
		check2.classList.add('fa-solid', 'fa-circle-check', 'checkmark');
		password.parentNode.insertBefore(check2, password.nextSibling);
	}
}
