
/* NAVIGATION BAR FUNCTION  */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/*ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/*  TYPING EFFECT */
 var typingEffect = new Typed(".typedText",{
    strings : ["Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/*  SCROLL REVEAL ANIMATION */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/*  HOME  */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})



sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})


const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})


const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".form-button .btn").addEventListener("click", function (event) {
      event.preventDefault(); 

      let userEmail = document.querySelector(".form-inputs input:nth-child(2)").value;
      let userMessage = document.querySelector(".text-area textarea").value;

      if (userEmail && userMessage) {
          let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=amirthan.official@gmail.com&su=${encodeURIComponent(userMessage)}&body=From: ${encodeURIComponent(userEmail)}`;
          window.open(mailtoLink, "_blank");
      } else {
          alert("Please fill in all fields before sending.");
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hireMeBtn").addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
});



const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

function downloadCV() {
  const filePath = "Amirthan A-Resume.pdf"; 
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/" + filePath; 
  link.download = "Amirthan A-Resume.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}