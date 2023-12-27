// /*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    }); 
  

    /*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
}

/*========== scroll reveal ==========*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact-form', {origin:'bottom'});

/*========== Modal reveal ==========*/
// Get the modals
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the buttons that open the modals
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> elements that close the modals
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(fullName, email, mobile, subject, mess) {

  const bodyMessage = `Full Name: ${fullName}<br> Email: ${email}<br> Phone Number: ${mobile}<br> Message: ${mess}`;

  Email.send({
    Host: "smtp.elasticemail.com:2525",
    Username: "rennyboyjr@gmail.com",
    Password: "6EBB19D053224D06BE448C002F9AA6A5ADFC",
    To: 'rennyboyjr@gmail.com',
    From: "rennyboyjr@gmail.com",
    Subject: `${subject.value}`,
    Body: bodyMessage
  }).then(
    message => alert(message)
  ).catch(
    error => console.log(error)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (subject.value.trim() === '') {
    alert('Please enter a subject for your message.');
    return;
  }

  sendEmail(fullName.value, email.value, mobile.value, subject.value, mess.value);
});