const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const menu = document.getElementById('menu');
let menuState = false;

menuBtn.addEventListener("click", function(event) {
    if(!menuState){
        menuState = true;
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        menu.style.display = 'flex';
    }
});

closeBtn.addEventListener("click", function(event) {
    if(menuState){
        menuState = false;
        menuBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        menu.style.display = 'none';
    }
});