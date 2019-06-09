var modal = document.querySelector('.modal');
var searchButton = document.querySelector('.search__button');

if (modal) {
	var modalShow = modal.classList.contains('modal-show');
	if (modalShow) {
		
		searchButton.addEventListener('click', function(evt) {
			evt.preventDefault();
			modal.classList.toggle('modal-show');
		});

		var form = modal.querySelector('.booking__form');
		var dataIn = modal.querySelector('.modal__datain');
		var dataOut = modal.querySelector('.modal__dataout');
		var senior = modal.querySelector('.modal__senior');
		var junior = modal.querySelector('.modal__junior');

		form.addEventListener('submit', function(evt) {
			modal.classList.remove('modal-error');
			if(!dataIn.value) {
				evt.preventDefault();
				dataIn.focus();
				modal.classList.add('modal-error');
			} else if (dataIn.value && !dataOut.value) {
				evt.preventDefault();
				dataOut.focus();
				modal.classList.add('modal-error');
			} else if (dataOut.value && !senior.value) {
				evt.preventDefault();
				senior.focus();
				modal.classList.add('modal-error');
			} else if (senior.value && !junior.value) {
				evt.preventDefault();
				junior.focus();
				modal.classList.add('modal-error');
			}
		});

	};
};