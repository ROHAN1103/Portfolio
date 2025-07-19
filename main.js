let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttributes('id'); 

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content, .item',{origin:'right'});
ScrollReveal().reveal('.x',{origin:'bottom'});


const typed= new Typed('.multiple-text',{
    strings: ['Information Science Engineer', 'Data Enthusiast', 'Java and SQL Developer',],
    typeSpeed: 80,
    backSpeed: 70,
    backDelay:1000,
    loop: true,
});

const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone').value;
    const sub=document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Feedback to your portfolio from ${name} (${phoneNumber})\n ${sub}`;
    const body = `NAME: ${name }\n    &   PHONE NUMBER: ${phoneNumber}\n Email:${email}\n\n     MESSAGE:\n${message}`;

    const recipientEmail = 'rohanguddekoppa@gmail.com';

    window.location = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
});