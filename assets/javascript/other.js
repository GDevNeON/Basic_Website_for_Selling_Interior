var boxLoveProduct = document.getElementsByClassName("containerLoveProduct")[0];
var boxBag = document.getElementById("containerBag");
var boxProduct = document.getElementById("container-main");
var giohang = document.getElementById("gio-hang");
var trangchu = document.getElementById("userPage");
giohang.addEventListener("click", function (e) {
    boxLoveProduct.style = "display: none ;";
    boxBag.style = "display: block ;";
    boxProduct.style = "display: none;";
    trangchu.style.display = "none";
});

//js for login, register
var formLogin = document.getElementsByClassName("content-body-login")[0];
var formRegister = document.getElementsByClassName("content-body-register")[0];
var loginBtn = document.getElementsByClassName("login-link")[0];
var registerBtn = document.getElementsByClassName("link-register")[0];
var nenDen = document.getElementById("nen-den");
var boxDetail = document.getElementById("detail-product-vettt");

loginBtn.addEventListener("click", function (e) {
    formLogin.style = "display: block; position: fixed; z-index: 100;";
    nenDen.style =
        "display: block; z-index: 99; position: fixed; width: 100%; height: 100vh; background-color: rgba(0, 0, 0, 0.5);";
    registerBtn.addEventListener("click", function (e) {
        formRegister.style = "display: block; position: fixed; z-index: 101;";
    });
});
var backToLogin = document.getElementsByClassName('link-login')[0];
backToLogin.addEventListener('click', function(){
    formRegister.style.display = 'none'
})
nenDen.addEventListener("click", function (e) {
    formLogin.style.display = "none";
    formRegister.style.display = "none";
    nenDen.style.display = "none";
    boxDetail.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    var slidesWrapper = document.getElementById("slidesWrapper");
    showSlides();

    function showSlides() {
        var slides = document.getElementsByClassName("mySlides");

        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        var translateValue = -slideIndex * 100;
        slidesWrapper.style.transform = "translateX(" + translateValue + "%)";

        setTimeout(showSlides, 2000); // Chuyển slide sau 3 giây
    }
});
//Kiểm tra khi trang web được tải
window.onload = function () {
    // Kiểm tra kích thước màn hình ngay khi trang web được tải
    checkScreenWidth();

    // Thêm sự kiện cho sự thay đổi kích thước màn hình
    window.addEventListener('resize', checkScreenWidth);
};

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", function (e) {
    checkScreenWidth();
})
// Hàm kiểm tra kích thước màn hình
function checkScreenWidth() {
    // Lấy kích thước chiều rộng của màn hình
    var windowWidth = window.innerWidth;


    const containSearch =document.getElementsByClassName('contain-search')[0]
    const containSearch2 =document.getElementsByClassName('contain-search2')[0]

    const searching1 = document.getElementsByClassName("searching")[1];
    const searching = document.getElementsByClassName("searching")[0];
    const aSearch1 = document.getElementsByClassName("a-search")[1];
    const aSearch = document.getElementsByClassName("a-search")[0];

    const menu = document.querySelector(".menu");
    const xBtn = document.querySelector(".x");


    // Kiểm tra nếu chiều rộng nhỏ hơn hoặc bằng 1366px
    if (windowWidth <= 1366) {
        
        menuToggle.addEventListener("click", function (e) {
            // searching.style.zIndex = '999'
            containSearch2.style.display = "block";
            menu.classList.add("transform-100");
            searching.style.display = "block";
            aSearch.style.display = "block";
            xBtn.style.display = "block";
        });

    searching.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra document
    });
    aSearch.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra document
    });

    document.addEventListener("click", function (event) {
        if (
            !menu.contains(event.target) &&
            !event.target.matches(".toggle-menu__icon") &&
            !searching.contains(event.target) &&
            !aSearch.contains(event.target)
        ) {
            menu.classList.remove("transform-100");
            menuToggle.classList.remove("transform-100");
            menuToggle.classList.add("transform-100");
            // containSearch.style.display = "block";
            containSearch2.style.display = "none";
            xBtn.style.display = "none";
        }
    });
        console.log('Màn hình có kích thước max-width là 1366px hoặc ít hơn.');
    } else {
        // Thực hiện các hành động khác nếu cần thiết khi màn hình có kích thước lớn hơn 1366px
        containSearch.style.display = "block";
        containSearch2.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('login_password');
    const togglePassword = document.getElementById('togglePassword');
  
    togglePassword.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
  
      // Change the eye icon based on password visibility
      if (type === 'password') {
        togglePassword.src = './assets/image/eye.png';
      } else {
        togglePassword.src = './assets/image/view.png';
      }
    });
  });