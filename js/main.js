var timer = $('.counter');
if(timer.length) {
  $('.counter').counterUp({
    delay: 10,
    time: 1200,
  });
}


gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".h-section-items");
const spacer = 0;
const minScale = 1;

// const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

cards.forEach((card, index) => {

  ScrollTrigger.create({
    trigger: card,
    start: `top-=${index * spacer} top`,
    endTrigger: ".cards",
    end: `bottom top+=${200 + cards.length * spacer}`,
    pin: true,
    pinSpacing: false,
    // markers: true,
    id: "pin",
    invalidateOnRefresh: true
  });
});






