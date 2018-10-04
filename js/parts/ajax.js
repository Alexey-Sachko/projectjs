function ajax() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = '<img src="icons/success.svg" width="50">';
	message.failure = "Что то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		form2 = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		input2 = form2.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('alert');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "app;ication/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function(){
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
					statusMessage.classList.add('alert-success');
					//Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for(let i = 0; i < input.length; i++){
			input[i].value = '';
			// Очищаем поля ввода
		}
	});

	form2.addEventListener('submit', function(event) {
		event.preventDefault();
		form2.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "app;ication/x-www-form-urlencoded");

		let formData = new FormData(form2);

		request.send(formData);

		request.onreadystatechange = function(){
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for(let i = 0; i < input2.length; i++){
			input2[i].value = '';
		}
	});
}

export default ajax;