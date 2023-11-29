var creaUpBtn = document.getElementById('btn-submit');
var addProductBtn = document.getElementById('add-product');

var id = document.getElementById('Add-id_product');
var nameinput = document.getElementById('Add-name_product');
var categorySelect = document.getElementById('select_category');
var price = document.getElementById('Add-price');
var detail = document.getElementById('Add-detail_Product');
var fileInput = document.getElementById('fileInput');
//localStorage.clear()

// Lắng nghe sự kiện 'DOMContentLoaded' sau khi tải lại trang

var products = JSON.parse(localStorage.getItem('products')) || [];
//đọc hình ảnh dạng base64
var imageBase64 ='';
fileInput.addEventListener("change", function (event) {
    var selectedFile = event.target.files[0];
    if (selectedFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imageBase64 = e.target.result;
            //imageElement.src = imageBase64;
            //alert(imageBase64)
        };
        reader.readAsDataURL(selectedFile);
    }
});

creaUpBtn.addEventListener('click', function(e){  
    if(creaUpBtn.textContent === "Create"){
        var check = 0;
        var spanNamePro = document.getElementById('span_namePro')
        var spanCatePro = document.getElementById('span_CategoryPro')
        var spanPricePro = document.getElementById('span_pricePro')
        var spanDetailPro = document.getElementById('span_detailPro')
        var spanImagePro = document.getElementById('span_imagePro')

        const regexSpace = /^.*\S.{2,}.*$/;
        const regexNamePro = /^[\p{L}\d\s'.,]+$/u;
        if(nameinput.value == ''){
            check++;
            spanNamePro.innerHTML = 'Vui lòng nhập trường này';
            spanNamePro.style = "color: red; font-size : 12px;"
        } else if(!nameinput.value.match(regexSpace)){
            check++;
            spanNamePro.innerHTML = 'Vui lòng nhập ít nhất 3 kí tự khác khoảng trắng';
            spanNamePro.style = "color: red; font-size : 12px;"
        } else if(!nameinput.value.match(regexNamePro)){
            check++;
            spanNamePro.innerHTML = 'Tên không được chứa kí tự đặc biệt';
            spanNamePro.style = "color: red; font-size : 12px;"
        } else spanNamePro.innerHTML = '';
        // check loại
        if(categorySelect.value == ''){
            check++;
            spanCatePro.innerHTML = 'Vui lòng chọn';
            spanCatePro.style = "color: red; font-size : 12px;"
        } else spanCatePro.innerHTML = '';
        // check chi tiết
        if(detail.value == ''){
            check++;
            spanDetailPro.innerHTML = 'Vui lòng nhâp trường này';
            spanDetailPro.style = "color: red; font-size : 12px;"
        } else if(!detail.value.match(regexSpace)){
            check++;
            spanDetailPro.innerHTML = 'Vui lòng nhập ít nhất 3 kí tự khác khoảng trắng';
            spanDetailPro.style = "color: red; font-size : 12px;"
        } else if(!detail.value.match(regexNamePro)){
            check++;
            spanDetailPro.innerHTML = 'Không được chứa kí tự đặc biệt';
            spanDetailPro.style = "color: red; font-size : 12px;"
        } else spanDetailPro.innerHTML = '';
        // check giá
        if(price.value == ''){
            check++;
            spanPricePro.innerHTML = 'Vui lòng nhập trường này';
            spanPricePro.style = "color: red; font-size : 12px;"
        } else if(price.value < 0){
            check++;
            spanPricePro.innerHTML = 'Giá phải lớn hơn 0';
            spanPricePro.style = "color: red; font-size : 12px;"
        } else spanPricePro.innerHTML = '';
        // check hình
        if(imageBase64 == ''){
            check++;
            spanImagePro.innerHTML = 'Vui lòng chọn file ảnh';
            spanImagePro.style = "color: red; font-size : 12px;"
        } else spanImagePro.innerHTML = '';
        if(check == 0){
                var newProduct = {
                    idProduct: Date.now(),
                    productName: nameinput.value,
                    category: categorySelect.value,
                    priceProduct: parseInt(price.value),
                    detailProduct: detail.value,
                    imageProduct: imageBase64
                }
                console.log(newProduct)
                products.push(newProduct);
                localStorage.setItem('products', JSON.stringify(products));
                alert('Tạo mới thành công')
            
            location.reload()
        }
    }

});