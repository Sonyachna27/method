const HMTLELEMENT = document.querySelector("html");
const BURGER = document.querySelector('.burger');
document.addEventListener("DOMContentLoaded", function () {
	openMobMenu();
	killPreload();
	animateImagesFucntion();
});

//функція для завантаження контенту  ат прибирання прелоад

const killPreload = () =>{

	const preloadWrap = document.querySelector('.preload');
	if(preloadWrap){
		const preloadSwitch = document.querySelector('.preload-switch');
		const animateLetters = document.querySelectorAll('.animate-logo svg:not([class])');
		const animeCircle = document.querySelector('.anime-circle');
		const animeCirclePath = animeCircle.querySelector('path');
		preloadWrap.addEventListener('click', ()=>{
			preloadWrap.style.animationName = 'removeOpacityPreload';
		preloadSwitch.style.animationName = 'changeSwitchPadding';
		HMTLELEMENT.style.overflow = "visible";
		function animateCharacters(){
			animateLetters.forEach(ch => ch.style.animationName = 'animateLetters')
			animeCirclePath.style.fill = "#00E600";
		}
		setTimeout(() => animateCharacters(), 100);
		setTimeout(() => BURGER.style.animationName = 'burgerOpacity', 500);

		setTimeout(() => preloadWrap.style.display = "none", 1000);
	});
}
}

const openMobMenu = () =>{
	const mobileMenu = document.querySelector(".header-nav");
	
	if(BURGER){
		BURGER.addEventListener('click', () =>{
			HMTLELEMENT.classList.toggle('active');
		})
	}

}

const animateImagesFucntion = () =>{
	const sliderInit = document.querySelector('.slider');

if (sliderInit) {
  const imagesSliderInit = new Swiper('.imagesSlider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    parallax: true,
		onlyInViewport: true,
		releaseOnEdges:true,
		touchReleaseOnEdges:true,
		mousewheel: {
		sensitivity: 1,
		},
		on: {
    slideChange: function () {
      setTimeout(function () {
        imagesSliderInit.params.mousewheel.releaseOnEdges = false;
      }, 500);
    },
    reachEnd: function() {
      setTimeout(function () {
        imagesSliderInit.params.mousewheel.releaseOnEdges = true;
      }, 750);
		},
    reachBeginning: function() {
      setTimeout(function () {
        imagesSliderInit.params.mousewheel.releaseOnEdges = true;
      }, 750);
		}
	
	},
	
  });


	let lastScrollTop = 0;
	window.addEventListener("scroll", function() {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop) {
			console.log("Прокрутка вниз");
		} else {
			console.log("Прокрутка вверх");
		}
		lastScrollTop = scrollTop;
	});
}

}


		// function scrollToNextSection(currentSection) {
		// 	const nextSection = currentSection.nextElementSibling;
		// 	if (nextSection) {
		// 		nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// 	}
		// }
	
		// function scrollToPreviousSection(currentSection) {
		// 	const previousSection = currentSection.previousElementSibling;
		// 	if (previousSection) {
		// 		previousSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// 	}
		// }

		// window.addEventListener('wheel', (event) => {
		
			// 	if(!atEnd){
			// 		console.log(event.deltaY);
			// 	}
	
			// 	if (atEnd && !isScrolling) {
			// 		isScrolling = true;
			// 		setTimeout(() => {
	
			// 			if ((event.deltaY > 0)) {
			// 				console.log(event.deltaY);
			// 				console.log(isScrolling);
			// 				scrollToNextSection(sliderInit);
			// 			} else if ((event.deltaY < 0) ) {
			// 				scrollToPreviousSection(sliderInit);
			// 			}
			// 			isScrolling = false;
			// 		}, 100); 
			// 	}
			// });