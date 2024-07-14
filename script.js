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

function navAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: 2,
    },
  });

  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "10% 15%",
      end: "10% 15%",
      scrub: 3,
    },
  });

  gsap.from("#nav-part2 #links", {
    transform: "translateY(-150%)",

    duration: 1.5,
    ease: "expoScale(0.5,7,none)",
    stagger: 0.1, // Delay between each link animation
  });
}

navAnimation();

function LoadANimationh1() {
  gsap.from("#page1 h1", {
    y: 250,
    opacity: 0.1,
    scrub: 3,
    duration: 0.4,
  });
  gsap.from("#video-container", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    scrub: 1,
  });
}
LoadANimationh1();

// var crsr = document.querySelector("#cursor");
// var child1 = document.querySelector("#child1");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
// });

// child1.addEventListener("mouseenter", function () {
//   gsap.to(crsr, {
//     transform: "translate(-50%,-50%) scale(1)",
//   });
// });
// child1.addEventListener("mouseleave", function () {
//   gsap.to(crsr, {
//     transform: "translate(-50%,-50%) scale(0)",
//   });
// });

function customColorCursoronProduct() {
  var crsr = document.querySelector("#cursor");
  var children = document.querySelectorAll(".child");

  // Track mouse movement
  document.addEventListener("mousemove", function (event) {
    crsr.style.left = event.clientX + "px";
    crsr.style.top = event.clientY + "px";
  });

  // Loop through each child element
  children.forEach(function (child) {
    // Change cursor color and scale on hover
    child.addEventListener("mouseenter", function () {
      var childId = child.id;
      switch (childId) {
        case "child1":
          gsap.to(crsr, {
            backgroundColor: "#FBAB7E",
            backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
            filter: "blur(10px)",
            transform: "translate(-50%,-50%) scale(1)",
          });

          break;
        case "child2":
          gsap.to(crsr, {
            backgroundColor: "#85FFBD",
            backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
            filter: "blur(10px)",
            transform: "translate(-50%,-50%) scale(1)",
          });

          break;
        case "child3":
          gsap.to(crsr, {
            backgroundColor: "#A9C9FF",
            backgroundImage:
              "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
            filter: "blur(10px)",
            transform: "translate(-50%, -50%) scale(1)",
          });

          break;
        case "child4":
          gsap.to(crsr, {
            backgroundColor: "#d700e9",
            backgroundImage: "linear-gradient(45deg, #d700e9 0%, #6923be 100%)",
            filter: "blur(10px)",
            transform: "translate(-50%,-50%) scale(1)",
          });

          break;
        default:
          gsap.to(crsr, {
            backgroundColor: "black",
            transform: "translate(-50%,-50%) scale(1)",
          });
      }
    });

    // Reset cursor on mouse leave
    child.addEventListener("mouseleave", function () {
      gsap.to(crsr, { transform: "translate(-50%,-50%) scale(0)" });
    });
  });
}

customColorCursoronProduct();

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

function elem1ANimationResponsive() {
  function addAnimation() {
    var dets = document.querySelector("#elem1 .dets");

    function mouseEnterHandler() {
      gsap.to("#elem1 .dets", {
        height: "40vh",
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

elem1ANimationResponsive();

function elem2Animation() {
  var dets = document.querySelector(" #elem2 .dets");

  dets.addEventListener("mouseenter", function () {
    gsap.to("#elem2 .dets", {
      height: "40vh",
      duration: 0.5,
      scrub: true,
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
      duration: 0.3,
    });
  });
}

elem2Animation();

function elem2ANimationResponsive() {
  function addAnimation() {
    var dets = document.querySelector("#elem2 .dets");

    function mouseEnterHandler() {
      gsap.to("#elem2 .dets", {
        height: "40vh",
        duration: 0.5,
        scrub: true,
        transformOrigin: "bottom",
      });

      gsap.to("#elem2 .dets_Container img", {
        opacity: 1,
      });
    }

    function mouseLeaveHandler() {
      gsap.to("#elem2 .dets_Container img", {
        opacity: 0,
      });
      gsap.to("#elem2 .dets", {
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

elem2ANimationResponsive();

function elem3Animation() {
  var dets = document.querySelector(" #elem3 .dets");

  dets.addEventListener("mouseenter", function () {
    gsap.to("#elem3 .dets", {
      height: "40vh",
      duration: 0.5,
      scrub: true,
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
      duration: 0.3,
    });
  });
}

elem3Animation();

function elem3ANimationResponsive() {
  function addAnimation() {
    var dets = document.querySelector("#elem3 .dets");

    function mouseEnterHandler() {
      gsap.to("#elem3 .dets", {
        height: "40vh",
        duration: 0.5,
        scrub: true,
        transformOrigin: "bottom",
      });

      gsap.to("#elem3 .dets_Container img", {
        opacity: 1,
      });
    }

    function mouseLeaveHandler() {
      gsap.to("#elem3 .dets_Container img", {
        opacity: 0,
      });
      gsap.to("#elem3 .dets", {
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

elem3ANimationResponsive();

// function Page5Animation() {
//   var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#page5",
//       pin: true,
//       markers: true,
//       scroller: `#main`,
//       start: `20% 10%`,
//       end: `500% 50%`,
//       scrub: 2,
//     },
//   });

//   tl.to("#card-one", {
//     top: "45%",
//   });

//   tl.to("#card-two", {
//     top: "45%",
//   });
//   tl.to("#card-three", {
//     top: "45%",
//   });

//   tl.to("#card-four", {
//     top: "45%",
//   });
//   tl.to("#card-five", {
//     top: "45%",
//   });
// }

// Page5Animation();

function Page5Animation() {
  // Check if the screen width is less than or equal to 600px
  if (window.matchMedia("(max-width: 600px)").matches) {
    // Custom animation for screens with max width of 600px
    var tl = gsap.timeline({
      scrollTrigger: {
        // trigger: "#page5",
        // scroller: `#main`,
        // start: `20% 10%`,
        // end: `300% 50%`,
        // pin: true,
        // scrub: true

        trigger: "#page5",
        start: "top 20%", // Adjust start position
        end: "bottom 50%", // Adjust end position
        pin: true,
        scrub: true
      },
    });

    tl.to("#card-one", {
      top: "50% ",
      left: "50%",
      transform: "translate(-50%, -50%)"
    });

    tl.to("#card-two", {
      top: "50% ",
      left: "50%",
      transform: "translate(-50%, -50%)"
    });
    tl.to("#card-three", {
      top: "50% ",
      left: "50%",
      transform: "translate(-50%, -50%)"
    });

    tl.to("#card-four", {
      top: "50% ",
      left: "50%",
      transform: "translate(-50%, -50%)"
    });
    tl.to("#card-five", {
      top: "50% ",
      left: "50%",
      transform: "translate(-50%, -50%)"
    });
  } else {
    // Default animation for screens wider than 600px
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page5",
        pin: true,
        scroller: `#main`,
        start: `20% 10%`,
        end: `500% 50%`,
        scrub: 2,
      },
    });

    tl.to("#card-one", {
      top: "45%",
    });

    tl.to("#card-two", {
      top: "45%",
    });
    tl.to("#card-three", {
      top: "45%",
    });

    tl.to("#card-four", {
      top: "45%",
    });
    tl.to("#card-five", {
      top: "45%",
    });
  }
}

Page5Animation();
