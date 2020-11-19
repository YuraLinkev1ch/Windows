
/*modal-windows-start*/

class Modal {
	constructor(options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
		}
		this.options = Object.assign(defaultOptions, options);
		this.modal = document.querySelector('.modal');
		this.speed = false;
		this.animation = false;
		this.isOpen = false;
		this.modalContainer = false;
		this.previousActiveElement = false;
		this.fixBlocks = document.querySelectorAll('.fix-block');
		this.focusElements = [
			'a[href]',
			'input',
			'button',
			'select',
			'textarea',
			'[tabindex]'
		];
		this.events();
	}

	events() {
		if (this.modal) {
			document.addEventListener('click', function(e){
				const clickedElement = e.target.closest('[data-path]');
				if (clickedElement) {
					let target = clickedElement.dataset.path;
					let animation = clickedElement.dataset.animation;
					let speed = clickedElement.dataset.speed;
					this.animation = animation ? animation : 'fade';
					this.speed = speed ? parseInt(speed) : 300;
					this.modalContainer = document.querySelector(`[data-target="${target}"]`);
					this.open();
					return;
				}

				if (e.target.closest('.modal-form__close')) {
					this.close();
					return;
				}
			}.bind(this));

			window.addEventListener('keydown', function(e) {
				if (e.keyCode == 27) {
					if (this.isOpen) {
						this.close();
					}
				}

				if (e.keyCode == 9 && this.isOpen) {
					this.focusCatch(e);
					return;
				}

			}.bind(this));

			this.modal.addEventListener('click', function(e) {
				if (!e.target.classList.contains('modal-form') && !e.target.closest('.modal-form') && this.isOpen) {
					this.close();
				}
			}.bind(this));
		}
	}

	open() {
		this.previousActiveElement = document.activeElement;

		this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
		this.modal.classList.add('is-open');
		this.disableScroll();
		
		this.modalContainer.classList.add('modal-open');
		this.modalContainer.classList.add(this.animation);

		setTimeout(() => {
			this.options.isOpen(this);
			this.modalContainer.classList.add('animate-open');
			this.isOpen = true;
			this.focusTrap();
		}, this.speed);
	}

	close() {
		if (this.modalContainer) {
			this.modalContainer.classList.remove('animate-open');
			this.modalContainer.classList.remove(this.animation);
			this.modal.classList.remove('is-open');
			this.modalContainer.classList.remove('modal-open');

			this.enableScroll();
			this.options.isClose(this);
			this.isOpen = false;
			this.focusTrap();
		}
	}

	focusCatch(e) {
		const focusable = this.modalContainer.querySelectorAll(this.focusElements);
		const focusArray = Array.prototype.slice.call(focusable);
		const focusedIndex = focusArray.indexOf(document.activeElement);

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus();
			e.preventDefault();
		}

		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus();
			e.preventDefault();
		}
	}

	focusTrap() {
		const focusable = this.modalContainer.querySelectorAll(this.focusElements);
		if (this.isOpen) {
			focusable[0].focus();
		} else {
			this.previousActiveElement.focus();
		}
	}

	disableScroll() {
		let pagePosition = window.scrollY;
		this.lockPadding();
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	enableScroll() {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		this.unlockPadding();
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({ top: pagePosition, left: 0 });
		document.body.removeAttribute('data-position');
	}

	lockPadding() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		this.fixBlocks.forEach((el) => {
			el.style.paddingRight = paddingOffset;
		});
		document.body.style.paddingRight = paddingOffset;
	}

	unlockPadding() {
		this.fixBlocks.forEach((el) => {
			el.style.paddingRight = '0px';
		});
		document.body.style.paddingRight = '0px';
	}
}

const modal = new Modal({
	isOpen: (modal) => {
		console.log(modal);
		console.log('opened');
	},
	isClose: () => {
		console.log('closed');
	},
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