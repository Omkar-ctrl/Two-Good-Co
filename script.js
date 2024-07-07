gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function LoadANimationh1() {
  gsap.from("#page1 h1", {
    y: 250,
    opacity: 0.1,
    scrub: 3,
    duration: 1,
  });
  gsap.from("#video-container", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    delay: 1.2,
    scrub: 1,
  });
}
LoadANimationh1();

var crsr = document.querySelector("#cursor");
var child1 = document.querySelector("#child1");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

child1.addEventListener("mouseenter", function () {
  gsap.to(crsr, {
    transform: "translate(-50%,-50%) scale(1)",
  });
});
child1.addEventListener("mouseleave", function () {
  gsap.to(crsr, {
    transform: "translate(-50%,-50%) scale(0)",
  });
});

function Video_Container_Animation() {
  var vdContainer = document.querySelector("#video-container");
  var play = document.querySelector("#play");

  vdContainer.addEventListener("mouseenter", function () {
    gsap.to(play, {
      scale: 1,
      opacity: 1,
      scrub: true,
    });
  });

  vdContainer.addEventListener("mouseleave", function () {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
      scrub: true,
    });
  });

  main.addEventListener("mousemove", function (dets) {
    play.style.left = dets.x - 40 + "px";
    play.style.top = dets.y - 20 + "px";
  });
}

Video_Container_Animation();

// Elem1 Container

function elem1Animation() {
  var dets = document.querySelector(" #elem1 .dets");

  dets.addEventListener("mouseenter", function () {
    gsap.to("#elem1 .dets", {
      height: "40vh",
      duration: 0.5,
      scrub: true,
      transformOrigin: "bottom",
    });

    gsap.to(" #elem1 .dets_Container img", {
      opacity: 1,
    });
  });

  dets.addEventListener("mouseleave", function () {
    gsap.to(" #elem1 .dets_Container img", {
      opacity: 0,
    });
    gsap.to("#elem1 .dets", {
      height: "8vh",
      duration: 0.3,
    });
  });
}

elem1Animation();

// elem2 Animation

function elem2Animation() {
  var dets = document.querySelector(" #elem2 .dets");

  dets.addEventListener("mouseenter", function () {
    gsap.to("#elem2 .dets", {
      height: "40vh",
      duration: 0.5,
      transformOrigin: "bottom",
    });

    gsap.to(" #elem2 .dets_Container img", {
      opacity: 1,
    });
  });

  dets.addEventListener("mouseleave", function () {
    gsap.to(" #elem2 .dets_Container img", {
      opacity: 0,
    });
    gsap.to("#elem2 .dets", {
      height: "8vh",
      duration: 0.5,
    });
  });
}

elem2Animation();

// elem3 Animation

function elem3Animation() {
  var dets = document.querySelector(" #elem3 .dets");

  dets.addEventListener("mousemove", function () {
    gsap.to("#elem3 .dets", {
      height: "40vh",
      duration: 0.5,
      transformOrigin: "bottom",
    });

    gsap.to(" #elem3 .dets_Container img", {
      opacity: 1,
    });
  });

  dets.addEventListener("mouseleave", function () {
    gsap.to(" #elem3 .dets_Container img", {
      opacity: 0,
    });
    gsap.to("#elem3 .dets", {
      height: "8vh",
      duration: 0.5,
      ease: "expoScale(0.5,7,none)"
    });
  });
}

elem3Animation();





gsap.to("#nav-part1 svg", {
  
  transform: "translateY(-100%)",
   scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -5%",
    scrub: 2
  },
});


// gsap.to("#nav-part1 svg", {
  
//   transform: "translateY(-100%)",
//    scrollTrigger: {
//     trigger: "#page1",
//     scroller: "#main",
//     start: "10% 15%",
//     end: "10% 15%",
//     scrub: 2
//   },
// });

gsap.to("#nav-part2 #links", {
  
  transform: "translateY(-100%)",
  opacity:0,
   scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "10% 15%",
    end: "10% 15%",
    scrub: 3
  },
});

gsap.from("#nav-part2 #links", {
  transform: "translateY(-150%)",
 
  duration:1.5,
  ease: "expoScale(0.5,7,none)",
  stagger: 0.1, // Delay between each link animation
});




function elem1ANimationResponsive(){


  function addAnimation() {
    var dets = document.querySelector("#elem1 .dets");
  
    function mouseEnterHandler() {
      gsap.to("#elem1 .dets", {
        height: "45vh",
        duration: 0.5,
        scrub: true,
        transformOrigin: "bottom",
      });
  
      gsap.to("#elem1 .dets_Container img", {
        opacity: 1,
      });
    }
  
    function mouseLeaveHandler() {
      gsap.to("#elem1 .dets_Container img", {
        opacity: 0,
      });
      gsap.to("#elem1 .dets", {
        height: "4.5vh",
        duration: 0.3,
      });
    }
  
    dets.addEventListener("mouseenter", mouseEnterHandler);
    dets.addEventListener("mouseleave", mouseLeaveHandler);
  
    // Clean up the event listeners if screen width is more than 600px
    function removeAnimation() {
      dets.removeEventListener("mouseenter", mouseEnterHandler);
      dets.removeEventListener("mouseleave", mouseLeaveHandler);
    }
  
    return removeAnimation;
  }
  
  // Function to check screen width and add/remove the event listener
  function checkScreenWidth() {
    const removeAnimation = addAnimation();
  
    if (window.innerWidth <= 600) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }
  
  // Initial check on page load
  checkScreenWidth();
  
  // Check screen width on window resize
  window.addEventListener("resize", checkScreenWidth);
  

}


elem1ANimationResponsive()


