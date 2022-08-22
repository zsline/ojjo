
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp();

// const swiper = new Swiper();


  var swiper2 = new Swiper(".product__content-slider", {
    thumbs: {
        swiper: {
            el: '.product__content-trumber',
            slidesPerViev: 3,
        }
    },
  });



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
});
