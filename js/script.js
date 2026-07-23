// =========================
// Welcome Message
// =========================
console.log("Welcome to College Fest 2026");

// =========================
// Active Navigation
// =========================
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =========================
// Countdown Timer
// =========================

const timer = document.getElementById("timer");

if(timer){

    const eventDate = new Date("December 25, 2026 09:00:00").getTime();

    setInterval(function(){

        const now = new Date().getTime();

        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60))
            / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60))
            / 1000);

        timer.innerHTML =
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    },1000);

}

// =========================
// Card Hover Animation
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// =========================
// Contact Form
// =========================

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! We received your message.");

this.reset();

});

}

// =========================
// Registration Form
// =========================

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Registration Successful!");

this.reset();

});

}