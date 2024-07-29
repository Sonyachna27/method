const HMTLELEMENT = document.querySelector("html");
const BURGER = document.querySelector('.burger');
document.addEventListener("DOMContentLoaded", function () {
	openMobMenu();
	killPreload();
	heartAnimation();
	scrollHeader();
	playVideo();
	fullSwiperSlider();
	horizontalScroll();
	animateImagesFunction();
});



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
const scrollHeader = () =>{
	const scrollHeader = document.querySelector('.scroll-header');
	if(scrollHeader){
		window.addEventListener("scroll", function () {
			let lastScrollTop = 0;
			const headerLogo = document.querySelector('.hidden-logo')
			const windowInnerWidth = window.innerWidth;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		
				if (scrollTop > lastScrollTop) {
					if (scrollTop > 100) {
						scrollHeader.classList.add("fixed-header-nav");
						scrollHeader.style.animationName = "smoothScroll";
						// setTimeout(() => BURGER.style.animationName = 'burgerOpacity', 300);
						setTimeout(() => headerLogo.style.display = 'block', 100);
						setTimeout(() => headerLogo.style.animationName = 'burgerOpacity', 500);
					}
				} else if (scrollTop <= 0) {
					scrollHeader.classList.remove("fixed-header-nav");
					scrollHeader.style.animationName = "removeSmoothScroll";
					// setTimeout(() => BURGER.style.animationName = 'removeBurgerOpacity', 300);
					setTimeout(() => headerLogo.style.animationName = 'removeBurgerOpacity', 300);
					setTimeout(() => headerLogo.style.display = 'none', 500);
				}
				lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
				// updateMenuPosition(scrollTop);
			}
		)
	}

};

const playVideo = () =>{
	const startVideoBtns = document.querySelectorAll('.start-video');
	const videos = document.querySelectorAll('video');

	startVideoBtns.forEach((startBtn) => {
			startBtn.addEventListener('click', () => {
				
					const btnData = startBtn.getAttribute('data-btn');
					videos.forEach((video) => {
							const videoData = video.getAttribute('data-video');
							const videoPosterAtribute = video.getAttribute('poster');

							if (btnData === videoData) {
									if (video.paused) {
											video.play();
											video.removeAttribute('poster');
											startBtn.classList.add('play');
									} else {
											video.pause();
											video.setAttribute('poster', `${videoPosterAtribute}`);
											startBtn.classList.remove('play');
									}
							}
					});
			});
	});
};


const horizontalScroll = () => {
  const process = document.querySelector('.process');
  if ((typeof(process) != 'undefined' && process != null)) {
    let sections = gsap.utils.toArray('.process__item');
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        process.style.width = `calc(100% * ${sections.length})`;
        sections.forEach(item => item.style.width = `calc((100% / ${sections.length}) / 3)`);
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: process,
            markers: false,
            scrub: 1,
            pin: true,
            end: () => "+=" + document.querySelector(".process").offsetWidth
          },
        });
      },
      "(max-width: 767px)": function() {
        process.style.width = `calc(100% * ${sections.length})`;
        sections.forEach(item => item.style.width = `100%`);
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: process,
            markers: false,
            scrub: 1,
            pin: true,
            end: () => "+=" + document.querySelector(".process").offsetWidth
          },
        });
      }
    });
  }
}

const animateImagesFunction = () => {
  const sliderWrapBlock = document.querySelector('.slider');
  if ((typeof(sliderWrapBlock) != 'undefined' && sliderWrapBlock != null)) {
    let fullSlide = gsap.utils.toArray('.full-slide');
    gsap.to(fullSlide, {
      yPercent: -100 * (fullSlide.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sliderWrapBlock,
        markers: true, 
        scrub: 1,
        pin: true,
				refreshPriority: 1,
        end: () => "+=" + document.querySelector(".slider").offsetHeight
      },
    });

    let rightImages = gsap.utils.toArray('.right');
    rightImages.forEach((image, index) => {
			console.log(image.parentElement);
      gsap.fromTo(image, 
        { yPercent: 100, autoAlpha: 0 }, 
        { 
          yPercent: 0, autoAlpha: 1,
          ease: "none",
					markers: true,
          scrollTrigger: {
            trigger: image.parentElement, 
            start: '100%', 
            // end: () => "+=" + image.parentElement.offsetHeight,
            end: "50% 100%",
            scrub: 1
          }
        }
      );
    });
    let leftImages = gsap.utils.toArray('.left');
    leftImages.forEach((leftImage, index) => {
      gsap.fromTo(leftImage, 
        { yPercent: -100, autoAlpha: 0 }, 
        { 
          yPercent: 0, autoAlpha: 1,
          ease: "none",
					markers: true,
          scrollTrigger: {
            trigger: leftImage.parentElement, 
            start: '100', 
            // end: "50% 100%",
            scrub: 1
          }
        }
      );
    });
  }
}



const heartAnimation = () =>{
const heartWrap = document.querySelector('.heart');
	if(heartWrap){
		const customOrder = [0, 2, 4, 7, 9, 11, 12, 13, 10, 8, 6, 3, 1, 5];
		const heartOptions = {
				root: null,
				rootMargin: "0px",
				threshold: .2, 
		};
		const heartCallback = function (entries) {
			entries.forEach(entry => {
					if (entry.isIntersecting) {
							const target = entry.target;
							const imgs = [...document.querySelectorAll('.heart-img')];
							const index = imgs.indexOf(target);
									const orderIndex = customOrder.indexOf(index);
									
									if (orderIndex >= 0) {
											const delay = orderIndex * 0.1;	
											target.style.animationDelay = `${delay}s`;
											target.style.animationName = 'heartAnimation';
											target.classList.add('animate');
									}
					}
			});
	};
	
	const heartObserver = new IntersectionObserver(heartCallback, heartOptions);
	
	document.querySelectorAll('.heart-img').forEach(img => {
			heartObserver.observe(img);
	});

}
}
const fullSwiperSlider = () =>{
	const fullSliderInit = document.querySelector('.fullSlider');
	if(fullSliderInit){
	
		var fullSlider = new Swiper(".fullSlider", {
      
      freeMode: true,
      watchSlidesProgress: true,
			pagination: {
        el: ".full-pagination",
				clickable: true,
				type: 'bullets',
      },
    });
    var fullSlider2 = new Swiper(".fullSlider2", {
     pagination: {
        el: ".full-pagination",
				clickable: true,
				type: 'bullets',
      },
      thumbs: {
        swiper: fullSlider,
      },
    });
	}
}