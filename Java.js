const swiper = new Swiper('.hiddenoverflow', {
    navigation: {
        nextEl: '.str__right',
        prevEl: '.str__left',
    },

    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    },

    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    simulateTouch: false,

    breakpoints: {
        1079: {
            slidesPerView:3,
        },

        917: {
            slidesPerView:2.6,
        }, 

        768: {
            slidesPerView:2,
        },

        500: {
            slidesPerView:1.5,
        },

        350: {
            slidesPerView:1,
        }
    }
});



const contain_tabs = document.querySelector('.titleInSection');
const title_tabs = document.querySelectorAll('.titleInSection_page');
const content_page_all = document.querySelectorAll('.content_page');


function ChangeActiveTitle(el) {
    for (let i = 0; i < title_tabs.length; i++) 
         { contain_tabs.children[i].classList.remove('titleInSection_activePage'); }
       
    el.classList.add('titleInSection_activePage');
}


let currTab = 0
//узнаём с помощью target элемент, по которому кликнули
contain_tabs.addEventListener('click', e => {
    if (e.target.dataset.title === "1" || e.target.dataset.title === "2" || e.target.dataset.title === "3" ) 
    {
        currTab = e.target.dataset.title;
        // console.log(currTab)
        ChangeActiveTitle(e.target)
    }

    for (let i =0; i < content_page_all.length; i++) 
        {
            content_page_all[i].classList.remove('active_page');
            if (content_page_all[i].dataset.page === currTab) 
                {
                    content_page_all[i].classList.add('active_page');
                }
        }

})

const formTabs = document.querySelectorAll('.formTabs')
const formTabs_container = document.querySelector('.formTabs__container')
const formPages = document.querySelectorAll('.formPage__kawaii')


function ChangeActiveForm(el) {
    for (let i = 0; i < formTabs.length; i++) 
         { formTabs[i].classList.remove('formTabs__active'); }
    el.classList.add('formTabs__active');
}

let formTab = 0
//узнаём с помощью target элемент, по которому кликнули
formTabs_container.addEventListener('click', e => {
    if (e.target.dataset.idea === "login" || e.target.dataset.idea === "enter" ) 
    {
        formTab = e.target.dataset.idea;
        
        ChangeActiveForm(e.target)
    }

    for (let i =0; i < formPages.length; i++) 
        {
            formPages[i].classList.remove('formPage__active');
            if (formPages[i].dataset.page === formTab) 
                {
                    formPages[i].classList.add('formPage__active');
                }
        }

})



const left = document.querySelector('.str__left');
const right = document.querySelector('.str__right');
let count_cards = document.querySelectorAll('.swiper-pagination-bullet').length - 1;
// console.log(count_cards);
let count_left =0, count_right =0;
let left_check = false;

left.addEventListener('click', () => {
    // console.log("left click");
    count_right--;
    // console.log(count_right);
    CheckPerk()
    
})

right.addEventListener('click', () => {
    
    left_check = true;
    count_right++;
    CheckPerk();
    // console.log(count_right);
})


function CheckPerk() {

    if (count_right == "0") {
        left_check = false
    } 
    else {
    }

    if (left_check == false) {
        left.style.backgroundColor = "white";
        left.style.border = "1px solid #0A5CD2";  
    }
    else {
        left.style.backgroundColor = "#0A5CD2";
    }


    if (count_right >= count_cards) {
        right.style.backgroundColor = "white";
        right.style.border = "1px solid #0A5CD2";  
        count_right = count_cards;
    }
    else {
        right.style.backgroundColor = "#0A5CD2";
    }

}









//========================================CATALOG
const show__more = document.querySelector('.show__more'),
 show__more__block = document.querySelectorAll('.active__after__click__btn'),
 btn_search = document.querySelector('.imgContSearch'),
 icon_search = document.querySelector('.imgSearch'),
 icon_close = document.querySelector('.close'),
 cards_array = document.querySelectorAll('.card_block_catalog'),
 catalog__cardbox__active = document.querySelectorAll('.catalog__cardbox__active'),
 inputZero = document.querySelector('.IputZero');

 let was_search = false;
let input_value = "";
let check_morebtn = false;

function hello(){
   if ( show__more.textContent == "Перейти в каталог" ) {
    show__more.setAttribute("onclick", "window.open('hello.html')");
   }
}

function timeEnterMark() {
    document.querySelector('.search_form').placeholder = "Введите марку машины";
    console.log(2);
}

function vocabulary() {

    if (input_value == "") {
        document.querySelector('.search_form').placeholder = "Вы ничего не ввели!";
        
        setTimeout(timeEnterMark, 2000)
    }
     
    else {
        if (input_value == "лада") 
        {input_value = "lada";}
        else {
            if (input_value == "бмв") 
            {input_value = "bmw";}
            else {
                if (input_value == "фиат") 
                {input_value = "fiat";}
                else {
                    if (input_value == "фольксваген" || input_value == "volkswagen") 
                    {input_value = "volk";}
                    else {
                        if (input_value == "мильтсубиси" || input_value == "mitsubishi" || input_value == "митсубиси") 
                        {input_value = "mitsub";}
                        else {
                                for (let i = 0; i<cards_array.length; i++) {
                                    cards_array[i].classList.add('hideAllInputZero__1');
                                    setTimeout(cards_array[i].classList.add('hideAllInputZero__2'),700);
                                }
                                icon_search.classList.add('hideCard');
                                icon_close.classList.add('show__close');
                                inputZero.classList.add('IputZero_show');
                            }
                        }
                    }
                }
            }
        }
}    



function search() {
input_value = document.querySelector('.search_form').value.toLowerCase();

vocabulary();
doSearch();
checker();

    if (input_value != "") { 
        icon_search.classList.add('hideCard');
        for (let i = 0; i <catalog__cardbox__active.length; i++) {
        catalog__cardbox__active[i].classList.add('catalog__shift');
        }
        icon_close.classList.add('show__close');
    }
}


function doSearch() {

    for (let i = 0; i<cards_array.length; i++) 
    {
        if (cards_array[i].dataset.marks == input_value) {
           hideCard(i);
        }
    }
}

function checker() {
    if (check_morebtn == false) {
        for(let i = 0; i <show__more__block.length; i++) {
        show__more__block[i].classList.remove('show__hideCard'); }
    }
}


function enterClick() {
    search()
}

function close_f() {
    was_search = false;
    for (let i = 0; i <catalog__cardbox__active.length; i++) {
        catalog__cardbox__active[i].classList.remove('catalog__shift');
        }
    icon_search.classList.remove('hideCard');
    icon_close.classList.remove('show__close');
    document.querySelector('.search_form').value = "";
    inputZero.classList.remove('IputZero_show'); 

    for (let i = 0; i<cards_array.length; i++) {
        cards_array[i].classList.remove('hideCard');
        cards_array[i].classList.remove('show__hideCard');
        cards_array[i].classList.remove('hideAllInputZero__1');
        setTimeout(cards_array[i].classList.remove('hideAllInputZero__2'),400);
    }   
}

function hideCard(el) {
    for (let i = 0; i<cards_array.length; i++) {
        cards_array[i].classList.add('hideCard');
    }
    cards_array[el].classList.add('show__hideCard');
}


icon_search.addEventListener('click', () => {
    search()
})

icon_close.addEventListener('click', () => {   
   close_f() 
})

document.querySelector('.search_form').onkeypress = function (el) {
    if (el.charCode == "13") {
        enterClick() 
    }
}


show__more.addEventListener('click', () => {
    check_morebtn = true;
    show__more.textContent = "Перейти в каталог"
    hello()
    for(let i = 0; i <show__more__block.length; i++) {
    show__more__block[i].classList.add('was_time_dispay');
    setTimeout(show__more__block[i].classList.add('click_was'), 100);
    search();


}
})
   
if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    console.log('this is a touch device');
  } else {
    console.log('this is not a touch device');
    document.body.classList.add('no-touch');
  }


const white_car = document.querySelector('.blockWithImg')
const width_container = document.querySelector('.witeCar__container').clientWidth;
const html_page = document.querySelectorAll('html')[0].offsetWidth;
console.log(html_page);

let width =0;

    if (window.innerWidth < 2510 && window.innerWidth > 1490) {     
        width = (html_page  - 1068) / 2 +  width_container ; 
    } 
    else {
        if (window.innerWidth < 1490 && window.innerWidth > 1068) {
            width = (html_page  - 1068) / 2 +  width_container ;  
        }
        else {
            if (window.innerWidth > 2510) {
                width = 1237;
            }
        }
    }
white_car.style.width = width + "px"; 


