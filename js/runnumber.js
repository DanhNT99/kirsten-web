var listLi = document.querySelectorAll(".label");
var iconNav = document.querySelector(".lab-icon");
var menuMobile = document.querySelector('.menu-mobile');
iconNav.addEventListener('click', ()=> {
    if(menuMobile.style.height === "288px" || menuMobile.style.height == "fit-content")
        menuMobile.style.height = "0px";
    else
        menuMobile.style.height = "288px";
})
listLi.forEach((li)=> {
    li.addEventListener('click',() => {
            menuMobile.style.height = "fit-content";
        
    })
})

var quantitiu = document.querySelector('.content-quantitiu');
window.addEventListener('scroll', () => {
    var y = window.scrollY;
    if(y > 1100 && y < 1200){
   setTimeout(()=>{
    var i = 1;
    var run =  setInterval(()=> {
         quantitiu.innerHTML = i;
         i++;
         if(i > 230)
             clearInterval(run);
         },1);
   },500);
}
})
