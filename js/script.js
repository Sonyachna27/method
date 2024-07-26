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
	const sliderWrapper = document.querySelector('.sliderWrap');
const sliderSlide = document.querySelectorAll('.full-slide');
const sliderSlideLength = [...sliderSlide].length;
const nextSection = sliderInit.nextElementSibling;
const previousSection = sliderInit.previousElementSibling;

observer()
	const imagesSliderInit = new Swiper('.imagesSlider', {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: {
			sensitivity: 1,
		},
		parallax: true,
		onlyInViewport: true,
		releaseOnEdges: true,
		touchReleaseOnEdges: true,
		on: {
			slideChange: function () {
				setTimeout(function () {
					imagesSliderInit.params.mousewheel.releaseOnEdges = false;
				}, 500);
			},
			reachEnd: function () {
				setTimeout(function () {
					imagesSliderInit.params.mousewheel.releaseOnEdges = true;
				}, 750);
			},
	
			reachBeginning: function () {
				setTimeout(function () {
					imagesSliderInit.params.mousewheel.releaseOnEdges = true;
				}, 750);
			}
		}
	});
	function observer() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.8
		}
	
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {

					const tagTarget = entry.target;
					const tagTargetLabels = (tagTarget.ariaLabel).split(' / ');
					const firstNumber = parseInt(tagTargetLabels[0], 10);
						if((firstNumber === 1) ){
							sliderInit.scrollIntoView({ behavior: 'smooth', block: 'start' });
							sliderWrapper.classList.add('fixed');
					}
					
					sliderSlide.forEach((slide) => slide.addEventListener("wheel", (event) => {
						event.preventDefault();
						let delta = event.deltaY; 
						if(((firstNumber === sliderSlideLength ) && (delta < 0))){
								sliderWrapper.classList.add('fixed');
								sliderInit.scrollIntoView({ behavior: 'smooth', block: 'start' });
						} 
						if(((firstNumber === 1) && (delta > 0))){
							sliderWrapper.classList.add('fixed');
							sliderInit.scrollIntoView({ behavior: 'smooth', block: 'start' });
						}
						if(((firstNumber === 1) && (delta < 0)) ){
							previousSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
								sliderWrapper.classList.remove('fixed');
						} 
						if((firstNumber === sliderSlideLength) && (delta > 0)){
							sliderWrapper.classList.remove('fixed');
							nextSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
						}
					}
					)); 
				}
			})
		}, options)

		const arr = sliderSlide;
		arr.forEach(i => {
			observer.observe(i)
		})

}
}





}

// if((firstNumber === 1) && (delta > 0)){
							// 	console.log('down');
							// 	previousSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
							// }
							// if((firstNumber === sliderSlideLength) && (delta > 0)){
							// 	previousSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
							// }