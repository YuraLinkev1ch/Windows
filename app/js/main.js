/*modal-windows-start */

const modals = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelectorAll('.modal-form__close');

modalBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});


    /*close-button-start*/
modalCloseBtn.forEach((el) => {
	el.addEventListener('click', (e) => {
		modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	});
});
    /*close-button-end */

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
    }

});

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

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('keydown', function(event) {
		if (event.code == 'Enter'){
			change([btns, items], i)
		}

	})
}

/*glazing-tabs-end*/

/*

/*order-finishing-start*/

let OrderFinishingTabs = document.querySelector('.order-finishing')
let OrderFinishingBtns = OrderFinishingTabs.querySelectorAll('.order-finishing__item ')
let OrderFinishingBtnsItems = OrderFinishingTabs.querySelectorAll('.order-finishing__description')

function change2(arr2, j) {
	arr2.forEach( OrderFinishingBtnsItems => {
		OrderFinishingBtnsItems.forEach( j => {j.classList.remove('order-finishing-active')})
		OrderFinishingBtnsItems[j].classList.add('order-finishing-active')
	})
}

for(let j = 0; j < OrderFinishingBtns.length; j++) {
	OrderFinishingBtns[j].addEventListener('click', () => {
		change2([OrderFinishingBtns, OrderFinishingBtnsItems], j)
	})
}

for(let j = 0; j < OrderFinishingBtns.length; j++) {
	OrderFinishingBtns[j].addEventListener('keydown', function(event) {
		if (event.code == 'Enter'){
			change2([OrderFinishingBtns, OrderFinishingBtnsItems], j)
		}
	})
}





/*order-finishing-end*/



/*flipdown-start */

document.addEventListener('DOMContentLoaded', () => {

	// Unix timestamp (in seconds) to count down to
	var twoDaysFromNow = (new Date().getTime() / 1000) + (1086400 * 2) + 1;
  
	// Set up FlipDown
	var flipdown = new FlipDown(twoDaysFromNow)
  
	  // Start the countdown
	  .start()
  
	  // Do something when the countdown ends
	  .ifEnded(() => {
		console.log('The countdown has ended!');
	  });
  

  });
  

/*flipdown-end*/



/*back-to-top-button-start*/

(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset +300;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

/*back-to-top-button-end*/

/*call-the-measurer-btn-start*/

(function() {
    'use strict';
  
    function trackScroll2() {
      var scrolled2 = window.pageYOffset -650;
      var coords2 = document.documentElement.clientHeight;
  
      if (scrolled2 > coords2) {
        goTopBtn2.classList.add('call-the-measurer-btn-show');
      }
      if (scrolled2 < coords2) {
        goTopBtn2.classList.remove('call-the-measurer-btn-show');
      }
    }
    
    var goTopBtn2 = document.querySelector('.call-the-measurer-btn');
  
    window.addEventListener('scroll', trackScroll2);

  })();


/*call-the-measurer-btn-end*/



/*aos-start */

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



/*aos-end*/