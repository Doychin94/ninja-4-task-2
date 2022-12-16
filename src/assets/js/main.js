
const dropDownMenu = document.querySelector('.dropdown-menu');
const dropDownShow = Array.from(document.querySelectorAll('.dropdown-show'));

dropDownShow.forEach(el => {
	el.addEventListener('click', () => {
		dropDownMenu.classList.toggle("hidden");
	})
})
