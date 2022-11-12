const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//  Search
const getsearch = $('#search-btn');
const getsearchInput = $('.header_search');
const getsearchClose = $('.header_search-close');
getsearch.onclick = () =>{
    getsearchInput.classList.toggle('active');
    getcartItem.classList.remove('active');

};

getsearchClose.onclick = () =>{
    getsearchInput.classList.remove('active');
};
// Cart
const getcart = $('#cart-btn');
const getcartItem = $('.header_cart');

getcart.onclick= () => {
    getcartItem.classList.toggle('active');
    getsearchInput.classList.remove('active');
};

// Xử lý menu khi responsive

const getMenuIcon = $('#menu-btn');
const getMenulist = $('.navbar');
const getOverlay = $('.overlay');


getMenuIcon.onclick = () => {
    getMenulist.classList.add('active');
    getOverlay.classList.add('active');

};

// Tắt menu 
const getCloseMenuIcon = $('.navbarCloseIcon span');

getCloseMenuIcon.onclick = () =>{
    getMenulist.classList.remove('active');
    getOverlay.classList.remove('active');

};
getOverlay.onclick = () =>{
    getMenulist.classList.remove('active');
    getOverlay.classList.remove('active');
};
window.onscroll = () =>{
    getcartItem.classList.remove('active');
    getsearchInput.classList.remove('active');
    getMenulist.classList.remove('active');

};
// 



// Slider section
window.addEventListener("load",function(){
    const slider = $('.section_slider');
    const sliderMain = $('.section_slider-main');
    const sliderItem = $$('.secton_slider-item');
    const nextBtn = $('.next-btn');
    const prevBtn = $('.prev-btn');
    const sliderItemHeight = sliderItem[0].offsetHeight;
    const sliderItemLength = sliderItem.length;

    const sliderContainers = $$('.section_slider-container');
    let positonY = 0;
    let index = 0;

    nextBtn.addEventListener('click', function(){
        handlechangeSlider(1)
        
        
        if(index <= sliderContainers.length){
            console.log(sliderContainers[index], index)

            sliderContainers[index].classList.add('active');

            sliderContainers[index--].classList.add('active')
            index++
        }
        
        
    });

    prevBtn.addEventListener('click', function(){
        handlechangeSlider(-1)
        // if(index <= sliderContainers.length && index >= 0){
        //     index;
        //     console.log(sliderContainers[index])
        //     sliderContainers[index].classList.add('active');
        //     index--
        // }
    });

    function handlechangeSlider(direction){
        if(direction === 1){
            if(index >= sliderItemLength - 1) {
                index = sliderItemLength - 1 ;
                return
            };
            positonY = positonY - sliderItemHeight;
            sliderMain.style = `transform: translateY(${positonY}px)`;
            index++;
        }else if(direction === -1){
            if(index <= 0){
                index = 0;
                return
            }
            positonY = positonY + sliderItemHeight;
            sliderMain.style = `transform: translateY(${positonY}px)`;
            index--;

        }
    }

});