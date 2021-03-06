if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	setTimeout(function () {
		document.querySelector('.lding').style.display = 'none';
	}, 2342)
}
document.onreadystatechange = function () {
	if (document.readyState == 'complete') {
		var arr = document.querySelectorAll('.swiper-pagination-custom .active');
		arr.forEach(function (item, i, arr) {
			item.click();
		});
		if (document.querySelector('#form_text_10')) var phoneMask = new IMask(document.querySelector('#form_text_10'), {
			mask: '+{375}(00)000-00-00'
		});
		if (document.querySelector('#perezv5min')) document.querySelector('#perezv5min').addEventListener('click', swlCallMe, false);
		document.querySelectorAll('.want-zamer').forEach(function (item, i, arr) {
			document.querySelectorAll('.want-zamer')[i].addEventListener('click', wantZamer, false);
		});
		document.querySelector('.navbar-collapse').addEventListener('click', function () {
			if (document.querySelector('.navbar-toggle').getAttribute('aria-expanded') == 'true') document.querySelector('.navbar-toggle').click();
		});
		document.querySelector('.lding').style.display = 'none';
	}
};

function swlCallMe() {
	if (document.querySelector('#form_text_10').value == '' || document.querySelector('#form_text_10').value.length < 17) {
		document.querySelector('.es17_input .invalid-feedback').style.display = 'block';
		return;
	}
	var verifyCallback = function verifyCallback(response) {
		document.querySelector('.swal2-footer .zak-btn').style.display = 'block';
		document.querySelector('.g-recaptcha').style.display = 'none';
	};
	swal({
		title: 'Закажите бесплатный звонок!',
		html: '<div class="container-fluid call"><label>Пожалуйста, введите реальные фамилию имя и отчество, чтобы мы знали как к вам обращаться</label><input type="text" class="form-control" onchange="checkEmpty(this)"><div class="invalid-feedback">Поле обязательно для заполнения!</div></div>',
		showCloseButton: true,
		showConfirmButton: false,
		width: 600,
		footer: '<div id="recaptcha" class="g-recaptcha" data-sitekey="6Lf68W4UAAAAABPphYIkPzVIVKQWSUqk-WfHLu_9"></div><a class="red-button-sm zak-btn">Заказать</a></form>',
		onOpen: function onOpen() {
			grecaptcha.render('recaptcha', {
				'sitekey': '6Lf68W4UAAAAABPphYIkPzVIVKQWSUqk-WfHLu_9',
				'callback': verifyCallback
			});
		}
	});

	document.querySelector('.swal2-footer .red-button-sm').addEventListener('click', function () {
		if (document.querySelector('#swal2-content .form-control').value == '') {
			document.querySelector('.swal2-content .invalid-feedback').style.display = 'block';
		} else {
			document.querySelector('.lding').style.display = 'block';
			var templateParams = {
				from_name: document.querySelector('#swal2-content .form-control').value,
				phone_number: document.querySelector('#form_text_10').value
			};
			//console.log('templateParams ', templateParams);
			emailjs.send('gmail', 'callmeplse', templateParams).then(function (response) {
				document.querySelector('.lding').style.display = 'none';
				console.log('SUCCESS!', response.status, response.text);
				swal({
					showConfirmButton: false,
					type: 'success',
					title: '<br>Спасибо! Ваша заявка отправлена',
					timer: 3000
				});
			}, function (error) {
				console.error('FAILED...', error);
				document.querySelector('.lding').style.display = 'none';
				swal({
					type: 'error',
					title: '<br>По техническим причинам сервис временно приостановлен.<br>Вы можете связаться с нами по телефону: <a href="tel:+375(33)670-34-04">+375(33)670-34-04</a><br>Просим извинения за причинённые неудобства.'
				});
			});
		}
	});
}

function wantZamer() {
	var verifyCallback = function verifyCallback(response) {
		document.querySelector('.swal2-footer .zak-btn').style.display = 'block';
		document.querySelector('.g-recaptcha').style.display = 'none';
	};
	swal({
		title: 'Закажите бесплатный замер!',
		showCloseButton: true,
		width: 600,
		html: '<div class="container-fluid zamer"><div><label>Пожалуйста, введите реальные фамилию имя и отчество, чтобы мы знали как к вам обращаться</label><input type="text" class="form-control name" onchange="checkEmpty(this)"><div class="invalid-feedback">Поле обязательно для заполнения!</div></div><br><div><label>Пожалуйста, введите реальный номер телефона чтобы мы смогли с вами связаться</label><input type="text" class="form-control tele" onchange="checkEmpty(this)"><div class="invalid-feedback">Поле обязательно для заполнения!</div><br></div></div>',
		showConfirmButton: false,
		footer: '<div id="recaptcha" class="g-recaptcha" data-sitekey="6Lf68W4UAAAAABPphYIkPzVIVKQWSUqk-WfHLu_9"></div><a class="red-button-sm zak-btn">Заказать</a>',
		onOpen: function onOpen() {
			grecaptcha.render('recaptcha', {
				'sitekey': '6Lf68W4UAAAAABPphYIkPzVIVKQWSUqk-WfHLu_9',
				'callback': verifyCallback
			});
		}
	});
	var phoneMask = new IMask(document.querySelector('.tele'), {
		mask: '+{375}(00)000-00-00'
	});
	document.querySelector('.swal2-footer .red-button-sm').addEventListener('click', function () {
		if (document.querySelector('#swal2-content .name').value == '') {
			document.querySelector('.swal2-content .invalid-feedback').style.display = 'block';
		}
		if (document.querySelector('#swal2-content .tele').value == '') {
			document.querySelectorAll('.swal2-content .invalid-feedback')[1].style.display = 'block';
		} else {
			document.querySelector('.lding').style.display = 'block';
			var templateParams = {
				from_name: document.querySelectorAll('#swal2-content .form-control')[0].value,
				phone_number: document.querySelectorAll('#swal2-content .form-control')[1].value
			};
			console.log('templateParams ', templateParams);
			emailjs.send('gmail', 'wantzamerplz', templateParams).then(function (response) {
				document.querySelector('.lding').style.display = 'none';
				console.log('SUCCESS!', response.status, response.text);
				swal({
					showConfirmButton: false,
					type: 'success',
					title: '<br>Спасибо! Ваша заявка отправлена',
					timer: 3000
				});
			}, function (error) {
				console.error('FAILED...', error);
				document.querySelector('.lding').style.display = 'none';
				swal({
					type: 'error',
					title: '<br>По техническим причинам сервис временно приостановлен.<br>Вы можете связаться с нами по телефону: <a href="tel:+375(33)670-34-04">+375(33)670-34-04</a><br>Просим извинения за причинённые неудобства.'
				});
			});
		}
	});
}

function swl($div) {
	// all items page
	var $thiSwal = $div.parentNode.parentNode.parentNode.parentNode.parentNode;
	swal({
		title: $thiSwal.querySelector('.swiper-pagination-custom .active .model-info .col-md-5').innerHTML.replace(/(^\s*)|(\s*)$/g, '') + ' - ' + $thiSwal.querySelector('.swiper-pagination-custom .active .model-info .col-md-7').innerHTML.replace(/(^\s*)|(\s*)$/g, '') + ', ' + $thiSwal.querySelector('.swiper-pagination-custom .active .color-info .col-md-5').innerHTML.replace(/(^\s*)|(\s*)$/g, '') + ' - ' + $thiSwal.querySelector('.swiper-pagination-custom .active .color-info .col-md-7').innerHTML.replace(/(^\s*)|(\s*)$/g, ''),
		showCloseButton: true,
		width: 800,
		html: $thiSwal.querySelector('.swiper-slide-active img').outerHTML + '<div class="about-inf">' + $thiSwal.querySelector('.swiper-pagination-custom .active .invisible').innerHTML + '</div>',
		showConfirmButton: false,
		footer: '<a class="red-button-sm" onclick="swlZakazMain(this)">Заказать</a>'
	});
}

function swl2($div) {
	// main page
	var $html = '';
	$div.parentNode.parentNode.querySelectorAll('img').forEach(function (item, i, arr) {
		$html = $html + $div.parentNode.parentNode.querySelectorAll('img')[i].outerHTML;
	});
	swal({
		title: $div.parentNode.parentNode.querySelector('.head-txt').innerHTML,
		showCloseButton: true,
		width: 800,
		html: $html + '<div class="about-inf">' + $div.parentNode.parentNode.querySelector('.invisible').innerHTML + '</div>',
		showConfirmButton: false,
		footer: '<a class="red-button-sm" onclick="swlZakazMain(this)">Заказать</a>'
	});
}

function swlZakazMain($div) {
	var verifyCallback = function verifyCallback(response) {
		document.querySelector('.swal2-footer .zak-btn').style.display = 'block';
		document.querySelector('.g-recaptcha').style.display = 'none';
	};
	swal({
		title: 'Ваш заказ',
		showCloseButton: true,
		width: 800,
		html: '<div class="zakaz-modal"><h3>' + $div.parentNode.parentNode.querySelector('.swal2-title').innerHTML + '</h3>' + $div.parentNode.parentNode.querySelectorAll('img')[1].outerHTML + '<div class="container-fluid"><div class="descroption-text">После заполнения и успешной отправки данной формы в кратчайшие сроки с вами свяжутся наши специалисты для уточнения наличия на складе нужных моделей и расцветок дверей, а также подробностей оплаты и доставки</div><div class="row"><div class="col-md-6"><label>Фамилия, имя, отчество:</label></div><div class="col-md-6"><input type="text" class="form-control input-name" placeholder="Иван Петрович" onchange="checkEmpty(this)" required><div class="invalid-feedback">Поле обязательно для заполнения!</div></div></div><div class="row"><div class="col-md-6"><label>Телефон для связи:</label></div><div class="col-md-6"><input type="tel" class="form-control input-tel" placeholder="+375(XX)XXX-XX-XX" onchange="checkEmpty(this)" required><div class="invalid-feedback">Поле обязательно для заполнения!</div></div></div><div class="row"><div class="col-md-6"><label>Примечание (по желанию):</label></div><div class="col-md-6"><textarea class="form-control user-comment" rows="3"></textarea></div></div><div class="form-group"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="invalidCheck" required><label class="form-check-label" for="invalidCheck">Подтверждая заявку, вы соглашаетесь с <a href="#">условиями использования</a> сайта</label></div></div></div>',
		showConfirmButton: false,
		footer: '<div id="recaptcha" class="g-recaptcha" data-sitekey="6Lf68W4UAAAAABPphYIkPzVIVKQWSUqk-WfHLu_9"></div><button class="red-button-sm button-approve zak-btn" disabled>Подтвердить</button>',
		onOpen: function onOpen() {
			grecaptcha.render('recaptcha', {
				'sitekey': '6Lf68W4UAAAAABPphYIkPzVIVKQWSUqk-WfHLu_9',
				'callback': verifyCallback
			});
		}
	});
	var phoneMask = new IMask(document.querySelector('.input-tel'), {
		mask: '+{375}(00)000-00-00'
	});

	document.querySelector('.form-check-input').addEventListener('change', function () {
		if (document.querySelector('.form-check-input').checked == true) {
			document.querySelector('.button-approve').removeAttribute('disabled');
			document.querySelector('.button-approve').style.opacity = '1';
		} else {
			document.querySelector('.button-approve').setAttribute('disabled', 'true');
			document.querySelector('.button-approve').style.opacity = '0.5';
		}
	});

	document.querySelector('.button-approve').addEventListener('click', function () {
		if (document.querySelector('.input-name').value == '' || document.querySelector('.input-tel').value == '') {
			alert('Пожалуйста, заполните все необходимые поля!');
		} else {
			document.querySelector('.lding').style.display = 'block';
			var templateParams = {
				from_name: document.querySelector('.input-name').value,
				item_name: document.querySelector('.zakaz-modal h3').innerHTML,
				message_html: document.querySelector('.user-comment').value,
				phone_number: document.querySelector('.input-tel').value
			};
			console.log('templateParams ', templateParams);
			emailjs.send('gmail', 'template_nZ7144jC', templateParams).then(function (response) {
				document.querySelector('.lding').style.display = 'none';
				console.log('SUCCESS!', response.status, response.text);
				swal({
					showConfirmButton: false,
					type: 'success',
					title: '<br>Спасибо! Ваша заявка отправлена',
					timer: 3000
				});
			}, function (error) {
				console.error('FAILED...', error);
				document.querySelector('.lding').style.display = 'none';
				swal({
					type: 'error',
					title: '<br>По техническим причинам обработка онлайн-заявок приостановлена.<br>Вы можете связаться с нами по телефону: <a href="tel:+375(33)670-34-04">+375(33)670-34-04</a><br>Просим извинения за причинённые неудобства.'
				});
			});
		}
	});
}

function credit() {
	swal({
		title: 'Рассрочка без переплат до 12 месяцев!',
		showCloseButton: true,
		width: 690,
		html: document.querySelector('.modal-credit').innerHTML,
		showConfirmButton: false
	});
}

document.querySelector('#go-main').addEventListener('click', function () {
	document.querySelector('.outdoor-page').style.display = 'none';
	document.querySelector('.main-page').style.display = 'block';
	document.querySelector('.indoor-page').style.display = 'none';
});

function checkEmpty($div) {
	if ($div.value == '') {
		$div.parentNode.querySelector('.invalid-feedback').style.display = 'block';
	} else {
		$div.parentNode.querySelector('.invalid-feedback').style.display = 'none';
	}
}
