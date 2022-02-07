
let link = document.querySelector(".elBurgerito")
let contact = document.querySelector(".burger-pop")
let cross = document.querySelector(".cross")
let overlay = document.querySelector(".overlay")


link.addEventListener('click', function() {
    contact.classList.toggle("active");
    overlay.classList.toggle("overlon");
    
});

cross.addEventListener('click', function() {
    contact.classList.toggle("active");
    overlay.classList.toggle("overlon");
});

overlay.addEventListener('click', function() {
    contact.classList.toggle("active");
    overlay.classList.toggle("overlon");
});


// smooth scroll

