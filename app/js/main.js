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



