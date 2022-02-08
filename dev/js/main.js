
let link = document.querySelector(".elBurgerito")
let contact = document.querySelector(".burger-popup")
let overlay = document.querySelector(".overlay")


link.addEventListener('click', function() {
    contact.classList.toggle("active");
    overlay.classList.toggle("overlon");
    
});

overlay.addEventListener('click', function() {
    contact.classList.toggle("active");
    overlay.classList.toggle("overlon");
});


// smooth scroll

