// swiper
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import'./assets/scss/all.scss';
import "bootstrap/dist/js/bootstrap.min.js";

// 食譜-補充教學

var swiper = new Swiper(".addTeaching", {
    spaceBetween: 16, 
    slidesPerView: 'auto',
});

// 食譜-推薦食譜

var swiper = new Swiper(".recommendBook", {
    spaceBetween: 16, 
    slidesPerView: 'auto',
});

//愛心
function toggleHeart(heartIcon) {
    if (heartIcon.classList.contains('bi-heart')) {
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
    } else {
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
    }
}
// 取得所有愛心元素
const hearts = document.querySelectorAll('.heart');

// 為每顆愛心添加點擊事件
hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        toggleHeart(this); // 切換當前被點擊的愛心
    });
});

// 旗幟
document.querySelectorAll('.bookmark').forEach(element => {
    element.addEventListener('click', function() {
        if (this.classList.contains('bi-bookmark')) {
            this.classList.remove('bi-bookmark');
            this.classList.add('bi-bookmark-fill');
        } 
        else {
            this.classList.remove('bi-bookmark-fill');
            this.classList.add('bi-bookmark');
        }
    });
  });
//加減數字

    let counter = 4;

    document.getElementById('increase').addEventListener('click', function() {
        counter++;
        document.getElementById('counter').textContent = counter;
    });

    document.getElementById('decrease').addEventListener('click', function() {
        if (counter > 0) {
            counter--;
            document.getElementById('counter').textContent = counter;
        }
    });
// 置頂
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.cookBook-topNavbar');
    if (window.scrollY > 510) {
        navbar.classList.remove('d-none');
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else {
        navbar.classList.add('d-none');
        navbar.style.position = '';
        navbar.style.top = '';
    }
});