"use strict"

$(function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	const form1 = document.getElementById('pizda');



	async function formSend(e) {
		e.preventDefault();

		let error = await formValidate(form);
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				console.log('result', result);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');

			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}

		} else {
			/*alert('заполните обязательные поля');*/
			console.log('ff');
		}
	}

	async function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.__req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('__email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		console.log(error);
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});