
let link = document.querySelector(".elBurgerito")
let contact = document.querySelector(".burger-popup")
let overlay = document.querySelector(".overloff")


link.addEventListener('click', function() {
    contact.classList.toggle("active");
    link.classList.toggle("active");
    overlay.classList.toggle("overlon");
    
});

overlay.addEventListener('click', function() {
    contact.classList.toggle("active");
    link.classList.toggle("active");
    overlay.classList.toggle("overlon");
});


