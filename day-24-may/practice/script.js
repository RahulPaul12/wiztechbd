document.querySelector('.fab').addEventListener('click', function(e) {
    document.querySelector('.box').classList.toggle('box-active');
    document.querySelector('.fab').classList.toggle('fab-active');
});

let icon = document.getElementById('fa');
let icons = ['fa-facebook', 'fa-twitter', 'fa-google', 'fa-telegram'];

setInterval(function() {
let random = Math.floor(Math.random() * icons.length);
console.log(random);
let ico = icon.classList[1];
icon.classList.remove(ico);
icon.classList.add(icons[random]);
;
}, 1000);