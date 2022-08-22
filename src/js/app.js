
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();





document.addEventListener('DOMContentLoaded', () => {
    const
        navLine = document.querySelector('.menu__hover'),
        navItem = document.querySelectorAll('.menu__item');


    // navLine.style.width = `${navItem[0].offsetWidth}px`;
    navItem.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            navLine.style.width = `${e.currentTarget.offsetWidth}px`;
            navLine.style.left = `${e.currentTarget.offsetLeft}px`;
        });
        el.addEventListener('mouseleave', () => {
            navLine.style.width = `10px`;
            navLine.style.left = `0px`;
        });
    });
    const
        login = document.querySelector('.header__login-hover'),
        loginItem = document.querySelectorAll('.hover');

    loginItem.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            login.style.width = `${e.currentTarget.offsetWidth}px`;
            login.style.left = `${e.currentTarget.offsetLeft}px`;
        });
        el.addEventListener('mouseleave', () => {
            login.style.width = `0px`;
            login.style.left = `0px`;
        });
    });
    const
        more = document.querySelector('.catalog__info-hover'),
        readMore = document.querySelectorAll('.catalog__info-link');

    readMore.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            more.style.width = `${e.currentTarget.offsetWidth}px`;
        });
        el.addEventListener('mouseleave', () => {
            more.style.width = `0px`;
        });
    });

// Слайдер товара //

    const
        sliderProducts = document.querySelectorAll('.product__slider-slider--slide'),
        trumbsProducts = document.querySelectorAll('.product__slider-trumber--slide');
    let index = 0;
    const activeSlide = n => {
        for (let slide of sliderProducts) {
            slide.classList.remove('active');
        }
        for (let slide of trumbsProducts) {
            slide.classList.remove('active');
        }
        sliderProducts[n].classList.add('active');
        trumbsProducts[n].classList.add('active');
    }
    trumbsProducts.forEach((item, indexTrumb) => {
        item.addEventListener('click', () => {
            index = indexTrumb;
            activeSlide(index);
        });
    });


    
});
