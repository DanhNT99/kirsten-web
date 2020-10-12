const btnCricle = document.querySelector('.change_light-cricle');
const btnchange = document.querySelector('.change_light-btn');
const width = btnchange.clientWidth - btnCricle.clientWidth;
const bgColor = document.querySelectorAll('.bg-color');
const listText = document.querySelectorAll("[background = 'bg-moon']");
btnchange.addEventListener('click', ()=> {
    let iconSun = document.querySelector('.icon-sun');
    let iconMoon = document.querySelector('.icon-moon');
    if(btnCricle.style.transform == `translateX(${width}px)`){
        btnCricle.style.transform = `translateX(${0}px)`;
        iconSun.style.color = 'yellow';
        iconMoon.style.color = 'gray';
        changeColorBack(listText);
        changeBgBack(bgColor);
    }
    else {
        btnCricle.style.transform = `translateX(${width}px)`;
        iconSun.style.color = 'gray';
        iconMoon.style.color = 'black';
        changeBg(bgColor);
        changeColor(listText);
    }
})
function changeColor(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].style.color = "white";
    }
}
function changeColorBack(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].style.color = "black";
    }
}
function changeBg(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].style.backgroundColor = "#222222";
    }
}
function changeBgBack(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].style.backgroundColor = "white";
    }
}
