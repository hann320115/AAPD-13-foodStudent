// swiper
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './assets/scss/all.scss';
import "bootstrap/dist/js/bootstrap.min.js";

// 首頁
var swiper = new Swiper(".homeSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
});

document.addEventListener('DOMContentLoaded', function () {
    // 確保所有內容都已加載完成
    setTimeout(() => {
        const loadingScreens = document.querySelectorAll('.card-loading-screen');
        loadingScreens.forEach(screen => {
            screen.classList.add('hidden'); // 添加隱藏樣式
        });
    }, 1000); // 設置延遲時間為 1 秒
});

document.addEventListener('DOMContentLoaded', function () {
    // 等待頁面內容加載完成
    setTimeout(() => {
        const loadingScreens = document.querySelectorAll('.loading-screen');
        loadingScreens.forEach(screen => {
            screen.classList.add('hidden'); // 添加隱藏樣式
        });
    }, 1000); // 設置延遲時間為 1 秒
});

document.addEventListener('DOMContentLoaded', function () {
    // 等待頁面內容加載完成
    setTimeout(() => {
        const loadingScreens = document.querySelectorAll('.image-loading-screen');
        const textWrappers = document.querySelectorAll('.text-wrapper');

        loadingScreens.forEach(screen => {
            screen.classList.add('hidden'); // 隱藏讀取效果
        });

        textWrappers.forEach(wrapper => {
            wrapper.classList.add('visible'); // 顯示文字
        });
    }, 1000); // 設置讀取畫面顯示時間
});

// 1秒後隱藏讀取圈圈並顯示卡片內容
setTimeout(() => {
    document.querySelector('.loading-wrapper').style.display = 'none';
    document.querySelectorAll('.hidden').forEach(element => {
        element.classList.remove('hidden');
    });
}, 1000);


// 我的收藏
var swiper = new Swiper(".favoritesSwiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
});


// 搜尋
var swiper = new Swiper(".searchSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
});

var swiper = new Swiper(".cookingSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
});

document.addEventListener('DOMContentLoaded', function () {
    const searchResults = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreItems = document.getElementById('moreItems');
    const hiddenResults = document.querySelector('.list-unstyled.d-none'); // 下方的 ul
    const backgroundImage = document.querySelector('.search-background-image'); // 背景推薦區塊

    // 當搜尋框獲得焦點時，顯示搜尋結果
    searchInput.addEventListener('focus', function () {
        searchResults.style.display = 'block';
    });

    // 點擊顯示更多按鈕顯示或隱藏更多項目
    showMoreBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止點擊事件冒泡
        if (showMoreBtn.textContent === '清除歷史紀錄') {
            // 刪除整個上方的 ul
            searchResults.remove();

            // 隱藏 "顯示更多" 按鈕，因為沒有內容可以顯示了
            showMoreBtn.style.display = 'none';

            // 隱藏背景推薦區塊
            if (backgroundImage) {
                backgroundImage.style.display = 'none';
            }
        } else {
            if (moreItems.style.display === 'none' || moreItems.style.display === '') {
                moreItems.style.display = 'block'; // 顯示更多項目
                showMoreBtn.textContent = '清除歷史紀錄'; // 更改按鈕文字為 "清除歷史紀錄"
            } else {
                moreItems.style.display = 'none'; // 隱藏更多項目
                showMoreBtn.textContent = '顯示更多'; // 更改按鈕文字回到 "顯示更多"
            }
        }
    });

    // 刪除搜尋項目
    searchResults.addEventListener('click', function (event) {
        if (event.target.classList.contains('bi-x-lg')) {
            event.stopPropagation(); // 阻止點擊事件冒泡
            const li = event.target.closest('li');
            if (li) {
                li.remove(); // 刪除該行
                updateSearchResultsVisibility();
            }
        }
    });

    // 點擊 `ul` 以外的地方隱藏 `ul`
    document.addEventListener('click', function (event) {
        if (!searchResults.contains(event.target) && event.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });

    // 防止點擊 `ul` 內部的元素隱藏 `ul`
    searchResults.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止點擊事件冒泡
    });

    // 監聽搜尋框的輸入事件
    searchInput.addEventListener('input', function () {
        const inputValue = searchInput.value.trim();

        if (inputValue === '沙') {
            // 隱藏上方 ul 並顯示下方的 ul
            searchResults.style.display = 'none';
            hiddenResults.classList.remove('d-none');
        } else {
            // 顯示上方 ul 並隱藏下方的 ul
            searchResults.style.display = 'block';
            hiddenResults.classList.add('d-none');
        }
    });

    function updateSearchResultsVisibility() {
        if (searchResults.children.length === 0) {
            searchResults.style.display = 'none';
        }
    }
});

// 留言

const imageUrl = `${import.meta.env.BASE_URL}assets/images/Avatar-3.png`;
document.getElementById("image").src = `${import.meta.env.BASE_URL}assets/images/Avatar-3.png`;

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表單提交
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();
    
    if (messageText !== "") {
    // 創建新的留言項目
    const messageItem = document.createElement("div");
    messageItem.className = "d-flex flex-column";

    // 用戶回覆
    const userReply = document.createElement("div");
    userReply.className = "d-flex align-items-center";
    userReply.innerHTML = `
        <img class="rounded-circle me-2" src="${import.meta.env.BASE_URL}assets/images/Avatar-3.png" alt="people-img" height="36" width="36">
        <h6>April</h6>
        <div class="ms-auto">剛剛</div>
    `;

    // 留言內容
    const messageContent = document.createElement("div");
    messageContent.className = "my-2 ms-11";
    messageContent.textContent = messageText;

    // 愛心+留言
    const heartReply = document.createElement("div");
    heartReply.className = "d-flex align-items-center mb-4";
    heartReply.innerHTML = `
        <button class="btn btn-transparent border-0 border p-0 ms-11 me-1"><i class="dark-heart bi bi-heart" id="heart14"></i></button>
        <p class="me-4">000</p>
        <button class="btn btn-transparent border-0 border p-0"><i class="bi bi-chat"></i></button>
    `;

    // 把各部分加到留言項目中
    messageItem.appendChild(userReply);
    messageItem.appendChild(messageContent);
    messageItem.appendChild(heartReply);

    // 將留言項目添加到留言列表中
    document.getElementById("messageList").appendChild(messageItem);

    // 清空輸入框
    messageInput.value = "";
}
});



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

// 教學影片

var swiper = new Swiper(".teachVideo", {
    spaceBetween: 16,
    slidesPerView: 'auto',
});
// 教學影片

var swiper = new Swiper(".knifeSkills", {
    spaceBetween: 16,
    slidesPerView: 'auto',
});
// 留言

var swiper = new Swiper(".messageSwiper", {
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
    heart.addEventListener('click', function () {
        toggleHeart(this); // 切換當前被點擊的愛心
    });
});

// 旗幟
document.querySelectorAll('.bookmark').forEach(element => {
    element.addEventListener('click', function () {
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

document.getElementById('increase').addEventListener('click', function () {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('decrease').addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        document.getElementById('counter').textContent = counter;
    }
});
// 食譜navbar置頂
document.addEventListener('scroll', function () {
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
// 教學navbar置頂
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.teach-topNavbar');
    if (window.scrollY > 20) {
        navbar.classList.remove('d-none');
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else {
        navbar.classList.add('d-none');
        navbar.style.position = '';
        navbar.style.top = '';
    }
});