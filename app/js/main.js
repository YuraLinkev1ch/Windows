/*modal-windows-start */

var modalCallTheMeasurer = document.getElementById('modalCallTheMeasurer');

var btn = document.getElementById("btnModalCallTheMeasurer");

var span = document.getElementsByClassName("modal-form__close")[0];


btn.onclick = function() {
    modalCallTheMeasurer.style.display = "block";
}

span.onclick = function() {
    modalCallTheMeasurer.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalCallTheMeasurer) {
        modalCallTheMeasurer.style.display = "none";
    }
}


/*modal-windows-end */

/*modal-mask-start */

let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

/*modal-mask-end */


/*glazing-tabs-start*/

let tabs = document.querySelector('.container_glazing')
let btns = tabs.querySelectorAll('.glazing__item')
let items = tabs.querySelectorAll('.glazing-description-block')

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('glazing_active')})
		item[i].classList.add('glazing_active')
	})
}

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		change([btns, items], i)
	})
}

/*glazing-tabs-end*/