//banner slider
/**
 * tạo ra 1 khung cha rồi khung con chứa các slider
 * lấy dc thẻ khung con, lấy được mảng thẻ các slider
 * lấy kích thức của từng slider, cho biến count bằng số lượng slider - 1
 * (nếu không trừ 1 thì khung con sẽ bị transform đi hết 100% thì chỉ hiện lại khoảng trắng)
 * viết hàm chuyển
 * gán cho nó transition để khi chuyển sẽ mượt hơn
 * cho count-- để chuyển tới vị trí tiếp theo
 * kiểm tra sự kiện transitonend khi chuyển tơi slider cuối tắt đi để khi không thấy sự chuyển động tới slider1
 * set count lại băng số lượng slider - 1 để quay về vị trí ban đầu
 * rồi sau đó gọi ham setInterval để chuyển động liên tục sau 1 khoảng thời gian nào đó
 */
/** làm chuyển động trong từ phần tử của slider
 * trước tiên phải code class về sự chuyển động đó trong html
 * sau đó lấy được thẻ mà ta muốn chuyển động
 * dựa vào sự chuyển động trên thì mặc định ta cho slider1 có sẳn class đó
 * khi vào hàm chuyển thì ta xóa đi class đó cho slider1( để khỏi bị lặp class khi chuyển lại tới vị trí đó)
 * khai báo lại thẻ ở vị trí khi count--
 * sau đó ta thêm class vào cho slider ở vị trí đó
 * và trong khi chuyển động thì ta gọi ra hàm setTimeOut để thực hiện class sau khi thêm class khoảng thời gian nào đó
 * (lí do như slider1)
 * vấn đề là nó sẽ bị dựt nên ta thêm class ở sự kiện transitionend vì class chưa được thêm vào vị trí bị tắt transition
 */

var sliderList = document.querySelector('.banner_slider-list');
var sliderItem = document.querySelectorAll('.banner_slider-item');
var chuyen =  window.innerWidth;
var count = 3;
sliderList.style.transform = "translateX(" + "-" + (chuyen * count) + "px)";
function nextRight(){
    var title = sliderItem[count].querySelector('.slider-title');
    var descDiv =  sliderItem[count].querySelector('.desc-div');
    var descText = sliderItem[count].querySelector('.desc-text');
    var nameSlider = sliderItem[count].querySelector('.slider-name');
    //xóa đi class của slider1 và các slider trc
    removeClass(title, 'display-title');
    removeClass(descDiv, 'display-title');
    removeClass(descText, 'display-title');
    removeClass(nameSlider, 'display-title');
    //--------------------------------------
    //chuyển slider
    sliderList.style.transition = "transform 1s ease-in-out";
    count--;
    sliderList.style.transform = "translateX(" + ( - chuyen * count) + "px)";
    //------------------------------
    //lấy các thẻ ở slider hiện tại
    title = sliderItem[count].querySelector('.slider-title');
    descDiv =  sliderItem[count].querySelector('.desc-div');
    descText = sliderItem[count].querySelector('.desc-text');
    nameSlider = sliderItem[count].querySelector('.slider-name');
    //xóa đi slider cuối để chuyển tới slider đầu chạy luôn
    removeClass(title, 'display-title');
    removeClass(descDiv, 'display-title');
    removeClass(descText, 'display-title');
    removeClass(nameSlider, 'display-title');
    //------------------
    //sét từng thời gian các phần tử của slider
    setTimeout(()=>{
        addClass(nameSlider, 'display-title');
    }, 100);
    setTimeout(()=>{
        addClass(descDiv, 'display-title');
    }, 1200);
    setTimeout(()=>{
        addClass(descText, 'display-title');
    }, 1400);
    setTimeout(()=>{
        addClass(title, 'display-title');
    }, 1600);
    //-----------------------------

}
//sét sự kiện trantionend để tới slider cuối trùng với slider 1 chuyển tới slider 1 luôn
sliderList.addEventListener('transitionend', () => {
    //chuyển slider cuối trừng vơi slider1
    if(sliderItem[count].getAttribute('class').indexOf('slider1') != -1){
        sliderList.style.transition = "none"; // tắt này đi để không delay chuyển tới slider1
        count = sliderItem.length - 1;
        sliderList.style.transform = "translateX(" + ( - chuyen * count) + "px)";
       setTimeout(()=> {
        sliderList.style.transition = "transform 1s ease-in-out";
       },1000)
    //-------------------------------------------------------------------------------
    //gán các sự kiện animation lại cho slider1 khi bị xóa ở trên
        var title = sliderItem[count].querySelector('.slider-title');
        var descDiv =  sliderItem[count].querySelector('.desc-div');
        var descText = sliderItem[count].querySelector('.desc-text');
        var nameSlider = sliderItem[count].querySelector('.slider-name');
        setTimeout(()=>{
            addClass(nameSlider, 'display-title');
        }, 100);
        setTimeout(()=>{
            addClass(descDiv, 'display-title');
        }, 1200);
        setTimeout(()=>{
            addClass(descText, 'display-title');
        }, 1400);
        setTimeout(()=>{
            addClass(title, 'display-title');
        }, 1600);
    }
    // -----------------------------------------------------------------------------
})
//hàm chạy slider 1 slider chỉ hiển thị 5s rồi sau đó chuyển
window.onload = (()=> {
    if(window.innerWidth < 764){
        widthItem = window.innerWidth;
    for(let i = 0; i < menberSliderList.length; i++){
        menberSliderList[i].style.width = `${window.innerWidth}px`;
    }
    console.log(window.innerWidth);
}
    for(let i = 0; i < sliderItem.length; i++){
        sliderItem[i].style.width = `${window.innerWidth}px`;
    }
    setInterval(function(){
        nextRight();
    }, 5000);
});

//2 hàm thêm class và xóa class tự tạo cho gọn----
function removeClass(element, nameClass){
    element.classList.remove(nameClass);
}
function addClass(element, nameClass){
    element.classList.add(nameClass);
}
// --------------------
//scroll menu fixed
window.addEventListener('scroll', () =>{ // bắt sự kiện scroll
    var y = window.scrollY; // lấy giá trị độ dài của thanh khi scroll
    var header = document.querySelector('.header'); //lấy class cần thêm
    if(y > 74){ // sét điều kiện khi tới độ dài của thẻ
        header.classList.add('fixed'); //thì thêm class vào
    }
    else{
        header.classList.remove('fixed'); //còn không lớn hơn thì xóa đi
    }
});

var menberSlider = document.querySelector('.menber_slider-list');
var menberSliderList = document.querySelectorAll('.menber_slider-item');
var btnPre = document.querySelector('.btn-pre');
var btnNext = document.querySelector('.btn-next');
var itemIndex = 1;
var widthItem = menberSliderList[itemIndex].clientWidth;
// menberSlider.style.marginLeft = (-itemIndex * widthItem) + 'px';
function clickNext(){
    menberSlider.style.transition = 'margin-left 0.5s ease-out';
    menberSlider.style.marginLeft = (-widthItem) + 'px';
    itemIndex++;
}
function clickPre(){
    menberSlider.style.transition = 'margin-left 0.5s ease-out';
    itemIndex--;
    menberSlider.style.marginLeft = (-itemIndex * widthItem) + 'px';
}
menberSlider.addEventListener('transitionend', () => {  
    menberSlider.appendChild(menberSlider.firstElementChild)
    menberSlider.style.transition = "none";
    menberSlider.style.marginLeft = "0px";
    setTimeout(function (){
        menberSlider.transition = "margin-left 0.5s ease-out";
    })
})

setInterval(()=>{
    clickNext();
},5000)
