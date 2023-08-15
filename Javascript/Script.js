let a = document.getElementById('about');
let text = document.getElementById('text-box');
let effect = document.getElementById('outer');

a.addEventListener('click', function() {
    text.style.display = 'block';
    effect.style.filter = 'blur(4px)';
});

document.getElementById('cross').addEventListener('click',function(){
    text.style.display = 'none';
    effect.style.filter = 'blur(0px)';
});