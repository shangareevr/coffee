document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

	new WOW().init();

	Fancybox.bind("[data-fancybox]", {
    closeExisting:false
		// Your custom options
	});
  
  //header animation
	let header = document.querySelector('header.header');
	setTimeout(() => {
		header.classList.add('animated');
	}, 100);
  // show catalog
  const catalogBtn = document.querySelector('.header__catalog');
  const catalog = document.querySelector('.catalog');
  if (catalogBtn){
    catalogBtn.addEventListener('click', e=>{
      closeElement(searchBtn, search);
      closeElement(menuBtn, menu);
      catalogBtn.classList.toggle('active');
      catalog.classList.toggle('active');
    })
  }
  // hide menu
  function closeElement(icon, wrapper){
    if (icon.classList.contains('active')){
      icon.classList.remove('active');
      wrapper.classList.remove('active');
    }
  }
  // show search
  const searchBtn = document.querySelector('.header__search');
  const search = document.querySelector('.search');
  if (searchBtn){
    searchBtn.addEventListener('click', e=>{
      closeElement(catalogBtn, catalog);
      closeElement(menuBtn, menu);
      searchBtn.classList.toggle('active');
      search.classList.toggle('active');
    })
  }
  const searchClose = document.querySelector('.search .close');
  if (searchClose){
    searchClose.addEventListener('click', e=>{
      searchBtn.classList.remove('active');
      search.classList.remove('active');
    })
  }
  // show menu
  const menuBtn = document.querySelector('.header__menu');
  const menu = document.querySelector('.menu');
  if (menuBtn){
    menuBtn.addEventListener('click', e=>{
      closeElement(catalogBtn, catalog);
      closeElement(searchBtn, search);
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    })
  }
// transform start section img
// const startSection = document.querySelector('.start-section');
// const img = document.querySelector(".start-section .image");
// if (startSection && img){
//   let count = 0;
//   startSection.addEventListener('mousemove', e=>{

//     if(img.classList.contains('rotate')){
//       count += 0.5;
//       // img.classList.add('rotate-animate');
//       img.style.transform  = `translate(${e.clientX / 10 - startSection.getBoundingClientRect().top / 10}px,${e.clientY / 10 - startSection.getBoundingClientRect().right / 10}px) rotate(${(e.clientX + e.clientY)/60}deg) rotate(${count}deg)`;
//   } else {
//     img.style.transform  = `translate(${e.clientX / 10 - startSection.getBoundingClientRect().top / 10}px,${e.clientY / 10 - startSection.getBoundingClientRect().right / 10}px)`;
//   }
//   })

// }
// transform form section img
const formSection = document.querySelector('.form');
const formImg = document.querySelector(".form img");
if (formSection && formImg){
  formSection.addEventListener('mousemove', e=>{
    formImg.style.transform  = `translate(${e.clientX / 10  - formSection.getBoundingClientRect().top / 10}px,${e.clientY / 10 - formSection.getBoundingClientRect().right / 10}px)`
  })
}
	//mask width 8 fix
	var phoneInputs = document.querySelectorAll('[name="phone"]');
  if(phoneInputs){
    phoneInputs.forEach(function(input) {
      input.addEventListener('input', function() {
        var inputValue = this.value;
        if (inputValue[0] == '8') {
          this.value = '7' + inputValue.substr(1);
        } else if (inputValue[0] == '7') {
        } else if (inputValue[0] == '+') {
          if (inputValue[1] == '8') {
            this.value = '+7' + inputValue.substr(2);
          } else if ((inputValue[1] == '7') || (inputValue.substr(1) === '')) {
          } else {
            this.value = '+7' + inputValue.substr(1);
          }
        } else if (inputValue !== '') {
          this.value = '7' + inputValue;
        }
      });
  
      Inputmask({
        mask: '+9 (999) 999-99-99',
        showMaskOnFocus: false,
        showMaskOnHover: false,
        jitMasking: true,
        onBeforePaste: function (pastedValue, opts) {
          var processedValue = pastedValue;
          if (processedValue[0] == '8') {
            processedValue = '7' + processedValue.slice(1);
          } else if (processedValue[0] == '7') {
          } else if (processedValue[0] == '+') {
            if (processedValue[1] == '8') {
              processedValue = '+7' + processedValue.slice(2);
            } else if ((processedValue[1] == '7') || (processedValue.substr(1) === '')) {
            } else {
              processedValue = '+7' + processedValue.slice(1);
            }
          } else if (processedValue !== '') {
            processedValue = '7' + processedValue;
          }
          return processedValue;
        }
      }).mask(input);
    });
  }

let rotateEl = document.querySelector('.js-rotate-anim');
if (rotateEl) {
  gsap.utils.toArray('.js-rotate-anim').forEach(element => {
    gsap.fromTo(element, {rotate: 0}, {
      rotate: 90,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "+=200%",
        scrub: true,
        toggleActions: "play reverse play reverse"
      }
    })
  });
}
let rotateEl2 = document.querySelector('.js-rotate-anim2');
if (rotateEl2) {
  gsap.utils.toArray('.js-rotate-anim2').forEach(element => {
    gsap.fromTo(element, {scale: 0.7}, {
      scale: 1.3,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "+=200%",
        scrub: true,
        toggleActions: "play reverse play reverse"
      }
    })
  });
}
// catalog
const catalogImg = gsap.timeline({paused: true});
catalogImg.fromTo('.application__img', {rotate: 45}, {rotate: 0}, '')
ScrollTrigger.create({
  trigger: '.application',
  animation: catalogImg,
  scrub: 0
})
  	//sliders
  var swiper = new Swiper('.advantage__slider', {
      speed: 1000,
      loop: false,
      slideClass:'advantage__slide',
      navigation:false,
      spaceBetween:20,
      slidesPerView:'auto',
      mousewheel:{
        enabled:true,
        releaseOnEdges:true,
      }
    });
    	//Counter
	let statistic = document.querySelectorAll('.indicator__number');
	if (statistic) {
		statistic.forEach(function (element) {
			let countUpOptions = {
				useEasing: true,
				useGrouping: true,
				separator: " ",
				enableScrollSpy: true,
				scrollSpyOnce: true,
				duration: 3,
				decimal: " ",
        suffix: "&nbsp;",
			};
			let statisticAnimation = new countUp.CountUp(element, parseInt(element.innerText), countUpOptions);
			statisticAnimation.start();
		});
	}
  // partners
  	//gsap marquee
	let marquee = document.querySelector(".js-marquee");
	if (marquee) {
		const wrapper = marquee;
		const boxes = gsap.utils.toArray(".partners__slide");
		const loop = horizontalLoop(boxes, {paused: false,repeat: -1,});
		function horizontalLoop(items, config) {
			items = gsap.utils.toArray(items);
			config = config || {};
			let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
				length = items.length,
				startX = items[0].offsetLeft,
				times = [],
				widths = [],
				xPercents = [],
				curIndex = 0,
				pixelsPerSecond = (config.speed || 1) * 100,
				snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
				totalWidth, curX, distanceToStart, distanceToLoop, item, i;
			gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
				xPercent: (i, el) => {
					let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
					xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
					return xPercents[i];
				}
			});
			gsap.set(items, {x: 0});
			totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
			for (i = 0; i < length; i++) {
				item = items[i];
				curX = xPercents[i] / 100 * widths[i];
				distanceToStart = item.offsetLeft + curX - startX;
				distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
				tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
					.fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
					.add("label" + i, distanceToStart / pixelsPerSecond);
				times[i] = distanceToStart / pixelsPerSecond;
			}
			function toIndex(index, vars) {
				vars = vars || {};
				(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
				let newIndex = gsap.utils.wrap(0, length, index),
					time = times[newIndex];
				if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
					vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
					time += tl.duration() * (index > curIndex ? 1 : -1);
				}
				curIndex = newIndex;
				vars.overwrite = true;
				return tl.tweenTo(time, vars);
			}
			tl.next = vars => toIndex(curIndex+1, vars);
			tl.previous = vars => toIndex(curIndex-1, vars);
			tl.current = () => curIndex;
			tl.toIndex = (index, vars) => toIndex(index, vars);
			tl.times = times;
			tl.progress(1, true).progress(0, true); // pre-render for performance
			if (config.reversed) {
				tl.vars.onReverseComplete();
				tl.reverse();
			}
			return tl;
		}
	}
  var news = new Swiper('.news__slider', {
    slideClass:'news__slide',
    speed: 1000,
    loop: true,
    spaceBetween:10,
    centeredSlides:false,
    slidesPerView:'auto',
    navigation:{
      nextEl: ".news__arrows .next",
			prevEl: ".news__arrows .prev",
    },
  });
  var using = new Swiper('.using__slider', {
    slideClass:'using__slide',
    speed: 1000,
    loop: true,
    spaceBetween:20,
    centeredSlides:false,
    slidesPerView:'auto',
    navigation:{
      nextEl: ".using__next",
			prevEl: ".using__prev",
    },
    breakpoints:{
      800:{
        slidesPerView:2,
      }
    }
  });
  var blog = new Swiper('.blog__slider', {
    slideClass:'blog__slide',
    speed: 1000,
    loop: true,
    spaceBetween:10,
    centeredSlides:false,
    slidesPerView:'auto',
    navigation:{
      nextEl: ".blog__next",
			prevEl: ".blog__prev",
    },
  });
  var gallery = new Swiper('.gallery__slider', {
    speed: 1000,
    loop: true,
    centeredSlides:true,
    slidesPerView:'auto',
    navigation:{
      nextEl: ".gallery__next",
			prevEl: ".gallery__prev",
    },
  });
  var vertical = new Swiper('.product__vertical', {
    speed: 1000,
    slideClass:'product-vertical',
    loop: false,
    direction: 'horizontal',
    centeredSlides:false,
    slidesPerView: 'auto',
    spaceBetween:12,
    navigation:false,
    breakpoints:{
      800:{
        direction:'vertical',
      }
    }

  });
  var product = new Swiper('.product__slider', {
    speed: 1000,
    slideClass:'product__slide',
    loop: false,
    centeredSlides:false,
    slidesPerView: 1,
    spaceBetween:0,
    effect: 'fade',
    navigation:false,
    thumbs: {
      swiper: vertical,
    },
  });
  const swipeAllSliders = (index) => {
    vertical.slideToLoop(index);
    product.slideToLoop(index);
  };
  vertical.on('slideChange', () => swipeAllSliders(vertical.realIndex));
  product.on('slideChange', () => swipeAllSliders(product.realIndex));
  // answer show
  const questions = document.querySelectorAll('.questions__item .top');
  questions.forEach(question=>{
    question.addEventListener('click', e=>{
      question.parentElement.classList.toggle('active');
    })
  })
  const tfoots = document.querySelectorAll('.parametrs tfoot');
  tfoots.forEach(tfoot=>{
    tfoot.addEventListener('click', e=>{
      tfoot.classList.toggle('hide');
      tfoot.previousElementSibling.classList.toggle('show');
      if (tfoot.classList.contains('hide')){
        document.querySelector('tfoot td').innerText = 'Скрыть';
      } else{
        document.querySelector('tfoot td').innerText = 'Показать больше';
        const scrollTarget = document.querySelector('.infomation .desc');
        const topOffset = 0; 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
      }

    })
  })
  // delevery tabs 
  const tabs = document.querySelectorAll('.delevery__tab');
  tabs.forEach(tab=>{
    tab.addEventListener('click', e=>{
      if(!tab.classList.contains('active')){
        // Получаем предыдущую активную кнопку
      const  prevActiveButton = document.querySelector('.delevery__tab.active');
      console.log(prevActiveButton)
      // Получаем предыдущую активную вкладку
      const prevActiveItem = document.querySelector('.delevery__list.active');
      console.log(prevActiveItem);
      // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
      const nextActiveItemId = `#${tab.getAttribute('data-tab')}`;
      // получаем новую активную вкладку по id
      const nextActiveItem = document.querySelector(nextActiveItemId);
      //Удаляем класс active у предыдущей кнопки если она есть
      if (prevActiveButton) {
        prevActiveButton.classList.remove('active');
      }
      // добавляем класс active кнопке на которую нажали
      tab.classList.add('active');
      if (prevActiveItem) {
        // Проверяем есть или нет предыдущая активная вкладка
        prevActiveItem.classList.remove('active');
      }
      // добавляем класс active новой выбранной вкладке
      nextActiveItem.classList.add('active');

      }
    })
  })
});