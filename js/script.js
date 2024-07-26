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
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
					
				}
			});
		}, { threshold: [0] });

		observer.observe(sliderInit);
		
		let atEnd = false;
		let isScrolling = false;

		const imagesSliderInit = new Swiper('.imagesSlider', {
			direction: 'vertical',
			slidesPerView: 1,
			spaceBetween: 30,
			mousewheel: true,
			on: {
				reachEnd: function() {
					atEnd = true;
					enablePageScroll();
				},
				reachBeginning: function() {
					atEnd = true;
					enablePageScroll();
				},
				fromEdge: function() {
					disablePageScroll();
				},
				slideChange: function() {
					atEnd = false;
				}
			}
		});


		function enablePageScroll() {
			if (atEnd) {
				sliderInit.style.position = 'relative';

			}
		}

		function disablePageScroll() {
			sliderInit.style.position = 'fixed';
		}

		function scrollToNextSection(currentSection) {
			const nextSection = currentSection.nextElementSibling;
			if (nextSection) {
				nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}

		function scrollToPreviousSection(currentSection) {
			const previousSection = currentSection.previousElementSibling;
			if (previousSection) {
				previousSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}

		if (imagesSliderInit.isEnd || imagesSliderInit.isBeginning) {
			enablePageScroll();
		}

		window.addEventListener('wheel', (event) => {
			if (atEnd && !isScrolling) {
				isScrolling = true;
				setTimeout(() => {
					if (event.deltaY > 0) {
						scrollToNextSection(sliderInit);
					} else if (event.deltaY < 0) {
						scrollToPreviousSection(sliderInit);
					}
					isScrolling = false;
				}, 100); 
			}
		});
	}
}