const first = document.querySelector('#first-name');
const last = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');

// Validation regex
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

// Listeners
first.addEventListener('change', (e) => validate(nameRegex, e.target));
last.addEventListener('change', (e) => validate(nameRegex, e.target));
email.addEventListener('change', (e) => validate(emailRegex, e.target));
phone.addEventListener('change', (e) => validate(phoneRegex, e.target));
password.addEventListener('change', (e) => confirmPassword(e.target));
confirmPass.addEventListener('change', (e) => confirmPassword(e.target));

// Validates based on regex statement
function validate(regex, el) {
	// Remove mark if present
	if (el.parentNode.lastElementChild.classList.contains('fa-solid')) {
		el.parentNode.lastElementChild.remove();
	}

	if (!regex.test(el.value)) {
		el.style.borderColor = 'red';
		el.parentNode.insertBefore(createCheck('xmark'), el.nextSibling);
	} else {
		el.style.borderColor = 'green';
		el.parentNode.insertBefore(createCheck('checkmark'), el.nextSibling);
	}
}

// Confirms value of password matches
function confirmPassword(el) {
	// Remove mark if present
	if (el.parentNode.lastElementChild.classList.contains('fa-solid')) {
		el.parentNode.lastElementChild.remove();
		password.parentNode.lastElementChild.remove();
	}

	if (el === password) {
		console.log('working with password');
	} else if (el.value === password.value) {
		password.style.borderColor = 'green';
		el.style.borderColor = 'green';
		el.parentNode.insertBefore(createCheck('checkmark'), el.nextSibling);
		password.parentNode.insertBefore(
			createCheck('checkmark'),
			password.nextSibling
		);
	} else {
		password.style.borderColor = 'red';
		el.style.borderColor = 'red';
		el.parentNode.insertBefore(createCheck('xmark'), el.nextSibling);
		password.parentNode.insertBefore(
			createCheck('xmark'),
			password.nextSibling
		);
	}
}

// Creates a check or xmark element
function createCheck(type) {
	if (type === 'checkmark') {
		const check = document.createElement('i');
		check.classList.add('fa-solid', 'fa-circle-check', 'checkmark');
		return check;
	} else {
		const check = document.createElement('i');
		check.classList.add('fa-solid', 'fa-circle-xmark', 'xmark');
		return check;
	}
}
