var tl = gsap.timeline({ repeat: -1 });
const message = [
  " Rohan Prakash ",
  " SDE-Frontend ",
  " Tech Enthusiast ",
  " Problem Solver ",
];

for (el of message) {
  tl.to("#my-span", {
    text: el,
    duration: 2.5,
  });
}

gsap.from("#left", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: -100,
});
var astro_tl = gsap.timeline();
astro_tl.from("#rightAstro", {
  opacity: 0,
  duration: 4,
  delay: 1,
  x: 300,
  scale: 0.1,
  rotate: 360,
});

astro_tl.to("#rightAstro", {
  rotate: 10,
  x: 10,
  repeat: -1,
  yoyo: true,
  duration: 3,
});

gsap.from("li, .left-nav span", {
  opacity: 0,
  stagger: 0.5,
  y: -100,
  duration: 0.5,
});

var body = document.querySelector("body");

// body.addEventListener('mousemove',function(cord){
//     gsap.to('#cursor',{
//         x: cord.x,
//         y: cord.y
//     })
// })

gsap.from("#aboutMe", {
  scale: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#aboutMe",
    scroller: "body",
    start: "top 100%",
    end: "top 100%",
    scrub: 2,
    pin: true,
  },
});

gsap.from(".row img", {
  scale: 0,
  y: 100,
  delay: 3,
  duration: 4,
  scrollTrigger: {
    trigger: ".tech-stack",
    scroller: "body",
    start: "top 100%",
    end: "top 100%",
    scrub: 2,
    delay: 3,
    pin: true,
    stagger: 1,
  },
});

// gsap.from('#project',{
//     y: 300,
//     delay: 1,
//     scrollTrigger: {
//         trigger : '#project',
//         scroller: 'body',
//         markers: true,
//         start: 'top 100%',
//         end: "top 100%",
//         scrub: 2,
//         pin: true
//     }
// })

const carouselSlider = new Swiper(".carousel-slider", {
  grabCursor: true,
  watchSlidesProgress: true,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  initialSlide: 0,
  on: {
    progress(e) {
      const t = e.slides.length;
      for (let r = 0; r < e.slides.length; r += 1) {
        const o = e.slides[r],
          s = e.slides[r].progress,
          i = Math.abs(s);
        let n = 1;
        i > 1 && (n = 0.3 * (i - 1) + 1);
        const l = o.querySelectorAll(".item-content"),
          a = s * n * 50 + "%",
          c = 1 - 0.2 * i,
          d = t - Math.abs(Math.round(s));
        (o.style.transform = `translateX(${a}) scale(${c})`),
          (o.style.zIndex = d.toString()),
          (o.style.opacity = (i > 3 ? 0 : 1).toString()),
          l.forEach((e) => {
            e.style.opacity = (1 - i / 3).toString();
          });
      }
    },
    setTransition(e, t) {
      for (let r = 0; r < e.slides.length; r += 1) {
        const o = e.slides[r],
          s = o.querySelectorAll(".item-content");
        (o.style.transitionDuration = `${t}ms`),
          s.forEach((e) => {
            e.style.transitionDuration = `${t}ms`;
          });
      }
    },
  },
});

let val = document.querySelectorAll("navbar a");
const cornav = [];
val.forEach((v) => {
  const id = v.href.split("#")[1];
  const y = document.getElementById(id).getClientRects()[0].y + 1;
  cornav.push({ id, y });
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - window.innerHeight;

  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  //  let val = document.querySelectorAll('navbar a');
  //   let i =0;
  //   for(let k=0;k<cornav.length;k++) {
  //       if(winScroll < cornav[k].y) {
  //           i=k;
  //           break;
  //       }

  //   }

  //   for(let j=0;j<val.length;j++) {
  //       if(i==j && val[i]) {
  //           val[i].classList.add('active');
  //       }
  //       else {
  //           val[i].classList.remove('active');
  //       }
  //   }
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    let currentSectionId = "";
    const scrollY = window.scrollY + 100;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollY &&
        section.offsetTop + section.offsetHeight > scrollY
      ) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});

const imgFun = () => {
  gsap.to("img", {
    scale: 1.1,
    rotate: "360deg",
  });
};
const elements = document.querySelectorAll("img");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseenter", imgFun, false);
}

async function sendMail(event) {
  // event.preventDefault();
  // emailjs.init('YOUR_USER_ID');
  const form = document.querySelector('form');
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  emailjs.init('2UdtuqCprHKI6cEfe');
  let response = await emailjs.send('service_b0xic4r', 'template_rno1cqc', {
    title: 'hello',
    name: name,
    message: message,
    email: email,
  });

  alert('Message has been sent');
  form.reset();
  this.isMessageSent = true;
}

// PDF download on button click
const cvButton = document.getElementById('download-cv');
if (cvButton) {
  cvButton.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'assets/RohanResume.pdf'; // Make sure this file exists
    link.download = 'Rohan-Prakash-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function onAstroClick(){
   window.location.reload()
}