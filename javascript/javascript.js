let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.fa-bars');

fabars.onclick = () =>{
    navbar.classList.toggle("active");
}

// add get start button
document.getElementById('btn-start').addEventListener('click', function(){
     window.location.href = 'login.html';
})

console.log("hello");