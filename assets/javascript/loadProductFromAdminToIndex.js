// 1. Lấy dữ liệu từ localStorage
const products = JSON.parse(localStorage.getItem('products')) || [];

var categoryMenu = document.getElementsByClassName('category_menu');
// gán box product cho trang chủ
var productContainer = document.getElementsByClassName('product-list')[0];

var check=0;

//category hiện đang chọn
var categoryNow = '';

// hiển thị sản phẩm theo phân loại
var checkClickCategory = 0;
var boxProduct = document.getElementById('container-main');
var trangchu = document.getElementById('userPage');
var tilteTopBody = document.getElementsByClassName('page-title')[0];
var giohang = document.getElementById('containerBag');
    for(var j=0; j<categoryMenu.length; j++){
        categoryMenu[j].addEventListener('click', function(){
          categoryNow = this.id
          giohang.style.display = 'none'
          checkClickCategory = 1;
          tilteTopBody.textContent = this.textContent;
          for(var j=0; j<categoryMenu.length; j++){categoryMenu[j].style ="color: black;"}
          this.style ="color: red;"
          boxProduct.style.display = 'block'
          trangchu.style.display = 'none'
          productContainer.innerHTML = ''
          var listOfCategory = [];
          var categoryID = this.id;
          products.forEach(p => {
            if(p.category == categoryID){
              listOfCategory.push(p);
            }
          })
          check = 1;
          loadProduct(listOfCategory)
          loadItem()
          listPage()
        })
    }
// tìm kiếm theo tên

  document.getElementsByClassName('a-search')[1].addEventListener('click', function(){
    productContainer.innerHTML = '';
    var nameWantSearch = document.getElementsByClassName('searching')[1].value;
    var priceStart = document.getElementById('priceStart').value;
    var priceEnd = document.getElementById('priceEnd').value;
    var mangTimKiem = [];
    products.forEach(p => {
      var price = p.priceProduct;
      var nameProLowerCase = p.productName.toLowerCase();
      var nameSearchLowerCase = nameWantSearch.toLowerCase();
        if(categoryNow == ''){
          if(nameProLowerCase.indexOf(nameSearchLowerCase) !== -1 && price >= priceStart && price <= priceEnd){
            mangTimKiem.push(p);
          }
        } else if(nameProLowerCase.indexOf(nameSearchLowerCase) !== -1 && price >= priceStart && price <= priceEnd && p.category == categoryNow){
          mangTimKiem.push(p);
        }
    })
    loadProduct(mangTimKiem)
    loadItem()
    listPage()
    check=1;
  })
  document.getElementsByClassName('a-search')[0].addEventListener('click', function(){
  productContainer.innerHTML = '';
  var nameWantSearch = document.getElementsByClassName('searching')[0].value;
  var priceStart = document.getElementById('priceStart').value;
  var priceEnd = document.getElementById('priceEnd').value;
  var mangTimKiem = [];
  products.forEach(p => {
    var price = p.priceProduct;
    var nameProLowerCase = p.productName.toLowerCase();
    var nameSearchLowerCase = nameWantSearch.toLowerCase();
      if(categoryNow == ''){
        if(nameProLowerCase.indexOf(nameSearchLowerCase) !== -1 && price >= priceStart && price <= priceEnd){
          mangTimKiem.push(p);
        }
      } else if(nameProLowerCase.indexOf(nameSearchLowerCase) !== -1 && price >= priceStart && price <= priceEnd && p.category == categoryNow){
        mangTimKiem.push(p);
      }
  })
  loadProduct(mangTimKiem)
  loadItem()
  listPage()
  check=1;
})

// lọc theo khoảng giá
var filterBtn = document.getElementsByClassName('filter')[0];
filterBtn.addEventListener('click', function(){
  productContainer.innerHTML = '';
  var priceStart = document.getElementById('priceStart').value;
  var priceEnd = document.getElementById('priceEnd').value;
  var mangTimKiem = [];
  products.forEach(p => {
    var price = p.priceProduct;
    if(categoryNow == ''){
      if(nameProLowerCase.indexOf(nameSearchLowerCase) !== -1 && price >= priceStart && price <= priceEnd){
        mangTimKiem.push(p);
      }
    } else if(price >= priceStart && price <= priceEnd && p.category == categoryNow){
        mangTimKiem.push(p);
      }
  })
  loadProduct(mangTimKiem)
  loadItem()
  listPage()
  check=1;
})


// nếu không lọc không phân loại
if(check==0){
  loadProduct(products)
}


    

function loadProduct(p){
  p.forEach(item => {
  var productItem = document.createElement('div');
  productItem.className = 'box-product';
  productItem.innerHTML = `
  <a href="#!" class="product">
      <img src="" alt="">
      <a href="#!" class="add-bag" onclick = "addProductToBag(this)">
          <img src="./assets/icon/shopping-cart.png" width = "20px" alt="Thêm">
          <div class="idProduct" style="display: none;"></div>
      </a>
      <a href="#!" class="btnDetail" onclick = "showDetailProduct(this)">
          Xem chi tiết
      </a>
      <div class="product-detail">
          <h3 class="product-name">Mẫu salon cho phòng khách - TC038</h3>
          <div class="product-price">
              <span class="price">65.000.000 đ</span>
          </div>
          <div class="category" style="display: none;"></div>
      </div>
  </a>
`;
  productItem.querySelector('img').src = item.imageProduct;
  productItem.querySelector('.product-name').textContent = item.productName;
  productItem.querySelector('.price').textContent = item.priceProduct.toLocaleString('vi-VN') + ' đ';
  productItem.querySelector('.idProduct').textContent = item.idProduct;
  productItem.querySelector('.category').textContent = item.category;
  
  if(checkClickCategory == 1) productContainer = document.querySelector('.contaner-product');
  productContainer.appendChild(productItem);
  })
  
}

var btnCart = document.getElementsByClassName('btn-cart')[0];
// thêm vào giỏ hàng
function addProductToBag(productItem) {
  const login = JSON.parse(localStorage.getItem('login'));
  if(login.isLogin == 0) {alert('Vui lòng đăng nhập trước khi mua hàng')}
  else {
  var product = productItem.querySelector('.idProduct');
  var idText;
  if(product == null) {
    idText = btnCart.dataset.id;
  }
  else idText = product.textContent;
  var users = JSON.parse(localStorage.getItem('users'));

  console.log(product)
  users.forEach(u => {
      var check=0;
      if(login.nameLogin == u.loginName) {
          u.userBag.forEach(b => {
              if(b.idProduct == idText){
                  b.quality++;
                  check=1;
                  return;
              }
          })
          if(check==0){
              var currentDate = new Date();

              var newBag = {
                              idProduct: idText,
                              quality: 1,
                              checkByAdmin: 0,
                              dateBuy: currentDate.toLocaleDateString()
                          };
              
              u.userBag.push(newBag);
          }
          
      }
  });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Thêm vào giỏ hàng thành công')
  location.reload()
  }
  
}
// hiện chi tiết
var boxDetail = document.getElementById('detail-product-vettt');
var nenDen = document.getElementById('nen-den');
var title = document.getElementById('product-detail-name');
var priceDetail = document.getElementById('product-detail-price');
var imageDetail = document.getElementById('product-detail-image');
function showDetailProduct(p){
  var productItem = p.parentNode;
  if(boxDetail.style.display == 'none'){
      boxDetail.style= "display: block;";
      nenDen.style = "display: block; z-index: 99; position: fixed; width: 100%; height: 100vh; background-color: rgba(0, 0, 0, 0.5);"
  }
  title.textContent = productItem.querySelector('.product-name').textContent;
  priceDetail.textContent = productItem.querySelector('.price').textContent.toLocaleString('vi-VN');
  btnCart.dataset.id = productItem.querySelector('.idProduct').textContent;
  imageDetail.src = productItem.querySelector('img').src;
  imageDetail.style.height = '400px'
}
// nút X tên trang hiện chi tiết
document.getElementById('x-button-detail').addEventListener('click', function(){
  boxDetail.style.display = 'none';
  nenDen.style.display = 'none';
})
// phân trang
let thisPage = 1;
let limit = 8;
let list = document.getElementsByClassName('box-product');
//console.log(list)

function loadItem() {
    //console.log(thisPage)
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    for (var i = 0; i < list.length; i++) {
        if (i >= beginGet && i <= endGet) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
    listPage();
}
loadItem();

function listPage() {
    let count = Math.ceil(list.length / limit);
    let listPageContainer = document.querySelector('.listPage');

    // Check if there are fewer than 8 items, hide pagination
    if (list.length <= limit) {
        listPageContainer.style.display = 'none';
        return;
    } else {
        listPageContainer.style.display = 'block';
    }

    listPageContainer.innerHTML = '';

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        listPageContainer.appendChild(prev);
    }

    console.log(count);
    for (let i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        listPageContainer.appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerHTML = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        listPageContainer.appendChild(next);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}