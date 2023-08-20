'use strict';

// document.addEventListner('DOMContentLoaded', () => {
    // const btns = document.querySelectorAll('.navbar__menu_item'),
    //       btnsParent = document.querySelector('.navbar__menu'),
    //       text = document.querySelectorAll('.navbar__menu_text'),
    //       img = document.querySelectorAll('.navbar__menu_img');

    // const hideBtnsActive = () => {
    //     btns.forEach(elem => {
    //         elem.classList.remove('navbar__menu_item_active', 'some')
    //     })
    // };

    // const showBtnsActive = (i=0) => {
    //     btns[i].classList.add('navbar__menu_item_active', 'some')
    // }
    // showBtnsActive();
    // hideBtnsActive();

    // btnsParent.addEventListener('click', (e) => { 
    //     if (e.target && e.target.classList.contains('navbar__menu_text')) {
    //         text.forEach((elem, i) => {
    //             if (e.target === elem) {
    //                 hideBtnsActive();
    //                 showBtnsActive(i);
    //             }
    //         })
    //     }
    //     if (e.target && e.target.classList.contains('navbar__menu_img')) {
    //         img.forEach((elem, i) => {
    //             if (e.target === elem) {
    //                 hideBtnsActive();
    //                 showBtnsActive(i);
    //             }
    //         })
    //     }
    //     if (e.target && e.target.classList.contains('navbar__menu_item')) {
    //         btns.forEach((elem, i) => {
    //             if (e.target === elem) {
    //                 hideBtnsActive();
    //                 showBtnsActive(i);
    //             }
    //         })
    //     }
    // })




    const btnsAdd = document.querySelectorAll('.menu__cards__btn'),
          basket = document.querySelector('.menu__block_with'),
          basketWith = document.querySelector('.menu__basket_with'),
          menuBasket = document.querySelector('.menu__basket'),
          menuParent = document.querySelectorAll('.menu__cards__card'),
          menuCount = document.querySelectorAll('.plus_bocks__count'),
          minus = document.querySelectorAll('.minus'),
          plus = document.querySelectorAll('.plus');
    let num = 0,
        menuPrice = 0,
        menuTitle =  0,
        menuWeight = 0,
        menuImg;
    let hambugers = {
        'Мясная бомба': {
            weight: '520г',
            price: '689₽'
        },
        'Супер сырный': {
            weight: '512г',
            price: '550₽'
        },
        'Сытный': {
            weight: '580г',
            price: '639₽'
        },
        'Тяжелый удар': {
            weight: '470г',
            price: '480₽'
        },
        'Вечная классика': {
            weight: '450г',
            price: '450₽'
        },
        'Итальянский': {
            weight: '510г',
            price: '560₽'
        }
    }
    
    btnsAdd.forEach((elem, i) => {
        let subNum = 0;
        elem.addEventListener('click', (e) => {
            for (let node of menuParent[i].childNodes) {
                if (node.className == 'menu__cards__price') {
                    menuPrice = node.innerText
                } else if(node.className == 'menu__cards__title') {
                    menuTitle = node.innerText
                } else if (node.className == 'menu__cards__weight') {
                    menuWeight = node.innerText
                } else if (node.className == 'menu__cards__img') {
                    menuImg = node.innerText
                }
            }
            
            basket.innerHTML = `<div class="menu__block">${++num}</div>`
            if (subNum >= 1) {
                ++subNum;
                document.querySelector('.plus_bocks__count').innerHTML = `
                <div class="minus">&minus;</div>${subNum} <div class="plus">&plus;</div>
                `
            } else {
            document.querySelector('.menu__basket_with_blocks').innerHTML += `
                <div class="plus_bocks">
                    <div class="plus_bocks__bocks">
                        <div class="plus_bocks__img">
                            <img src="img/hambugers/Мясная_бомба.png" alt="">
                        </div>
                        <div class="plus_blocks__about">
                            <div class="plus_bocks__title">${menuTitle}</div>
                            <div class="plus_bocks__weight">${menuWeight}</div>
                            <div class="plus_bocks__price">${menuPrice}</div>
                        </div>
                        <div class="plus_bocks__count"><div class="minus">&minus;</div>${++subNum} <div class="plus">&plus;</div></div>
                    </div>
                </div>
                `
            }
            if (num >= 1) {
                basketWith.classList.add('show');
                basketWith.classList.remove('hide');
                menuBasket.classList.remove('show')
                menuBasket.classList.add('hide')
            }
        })

    });




// });