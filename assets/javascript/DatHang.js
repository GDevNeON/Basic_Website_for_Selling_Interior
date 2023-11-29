var btnDatHang = document.getElementById("btn_datHang");
var productFromLocal = JSON.parse(localStorage.getItem("products")) || [];
var login = JSON.parse(localStorage.getItem("login"));
var users = JSON.parse(localStorage.getItem("users"));
var bills = JSON.parse(localStorage.getItem("bills")) || [];

//HÀM RANDOM TẠO ID CHO ĐƠN HÀNG
function getRandomNumber() {
  // Tạo một mảng chứa các chữ số từ 0 đến 9
  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Trộn ngẫu nhiên mảng chữ số
  digits = shuffleArray(digits);

  // Chọn 3 chữ số đầu tiên từ mảng đã được trộn
  var randomNumber = digits.slice(0, 3).join("");

  return randomNumber;
}

// Hàm trộn mảng
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    // Hoán đổi các phần tử
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

if (login.isLogin === 1) {
  var u = users.find((user) => user.loginName === login.nameLogin);

  window.addEventListener("load", displayOrdersFromLocalStorage);

  var checkBoxs = document.getElementsByClassName("myCheckbox");
  btnDatHang.addEventListener("click", function () {
    var countCheck = 0;
    var currentDate = new Date();
    var productsInBill = [];
    var currentDate = new Date();
    // Hàm chuyển đổi ngày thành định dạng "yyyy-mm-dd"
    function formatDate(date) {
      return date.toISOString().split("T")[0];
    }
    for (var k = 0; k < checkBoxs.length; k++) {
      if (checkBoxs[k].checked) {
        countCheck++;
        var productInBag = checkBoxs[k].closest(".show_product");
        var idPro = productInBag.querySelector(".idProInBag").textContent;
        var qualityProduct = productInBag.querySelector(".quality_input").value;

        var product = productFromLocal.find((p) => p.idProduct == idPro);

        var productData = {
          idPro: product.idProduct,
          productName: product.productName,
          picture: product.imageProduct,
          category: product.category,
          pricePro: product.priceProduct,
          qualityPro: qualityProduct,
          dateSold: formatDate(currentDate),
        };

        productsInBill.push(productData);
      }
    }
    if (countCheck > 0) {
      var newBill = {
        idBill: getRandomNumber(),
        user: login.nameLogin,
        checkByAdmin: 0,
        date: formatDate(currentDate),
        detailBill: productsInBill,
        address: u.address,
        sdt: u.telephone,
      };

      bills.push(newBill);
      localStorage.setItem("bills", JSON.stringify(bills));
      alert("Đặt hàng thành công");
      updateUIWithNewOrder(newBill);
    } else alert("Vui lòng chọn ít nhất 1 sản phẩm");
  });

  function updateTotalAmount() {
    var totalAmount = bills.reduce((total, bill) => {
      return (
        total +
        bill.detailBill.reduce((subtotal, product) => {
          return subtotal + product.qualityPro * product.pricePro;
        }, 0)
      );
    }, 0);

    var formattedAmount = totalAmount.toLocaleString("vi-VN"); // Format with Vietnamese locale

    document.getElementById("money").textContent = formattedAmount + " đ";
  }

  updateTotalAmount();

  function updateUIWithNewOrder(newOrder) {
    var containerDonhang = document.getElementById("donhang");
    var donHangCounter = containerDonhang.children.length + 1;

    var donHang = document.createElement("div");
    donHang.innerHTML = `
      <div>
        <div class="idDonhang" style="display: none;">${newOrder.idBill}</div>
        <a href="#!" class="donhangItem"  onclick="showDonHang(this)">Đơn hàng ${donHangCounter}</a>
      </div>
    `;

    containerDonhang.appendChild(donHang);
  }

  var containerDonhang = document.getElementById("donhang");

  function displayOrdersFromLocalStorage() {
    containerDonhang.innerHTML = "";
    bills.forEach(function (bill, index) {
      var donHang = document.createElement("div");
      var orderStatus = bill.checkByAdmin === 1 ? "Đã xử lý" : "Chưa xử lý";

      donHang.innerHTML = `
        <div>
          <div class="idDonhang" style="display: none;">${bill.idBill}</div>
          <a href="#!" class="donhangItem" onclick="showDonHang(this)">
            Đơn hàng ${index + 1} » ${orderStatus}
          </a>
        </div>
      `;
      containerDonhang.appendChild(donHang);
    });
  }
  containerDonhang.style.display = "none";
  var close_button = document.getElementsByClassName("close-button")[0];

  function review_bill() {
    containerDonhang.style.display =
      containerDonhang.style.display === "none" ? "block" : "none";
    close_button.style.display =
      close_button.style.display === "block" ? "none" : "block";
  }

  function closeOrderView() {
    containerDonhang.style.display = "none";
    close_button.style.display = "none";
  }

  var boxDonHang = document.querySelector(".productBag");

  function showDonHang(clickedElement) {
    var id = clickedElement.parentNode.querySelector(".idDonhang").textContent;
    var bill = bills.find((b) => b.idBill == id);

    var billHTML = document.createElement("div");
    billHTML.classList.add("containerBillProduct");

    billHTML.innerHTML = `
      <div>
        <button class="btnClose" onclick="closeContainer(this)">X</button>
        <header>
          <h2>Nội thất VENTUS</h2>
          <h3>Đơn hàng</h3>
          <p class="dateP">Ngày: ${bill.date}</p>
        </header>
        <p>Tên khách hàng: ${bill.user}</p>
        <p>Địa chỉ: ${bill.address}</p>
        <p>SĐT: ${bill.sdt}</p>
        <p>Ghi chú:</p>
        <table class="custom-table" cellspacing="0" cellpadding="10px" style="width:100%">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>SL</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <p>Tổng tiền: <span id="totalAmount">0</span></p>
      </div>
    `;
    billHTML.style.zIndex = "21";
    billHTML.style.position = "fixed";
    var nenDen = document.getElementById("nen-den");
    nenDen.style =
      "display: block; z-index: 20; position: fixed; width: 100%; height: 100vh; background-color: rgba(0, 0, 0, 0.5);";

    var tbody = billHTML.querySelector("tbody");

    bill.detailBill.forEach(function (product) {
      var productRow = document.createElement("tr");
      productRow.innerHTML = `
        <td>${product.idPro}</td>
        <td>${product.qualityPro}</td>
        <td>${product.pricePro.toLocaleString("vi-VN")}</td>
      `;
      tbody.appendChild(productRow);
    });

    var totalAmount = bill.detailBill.reduce((total, product) => {
      return total + product.qualityPro * product.pricePro;
    }, 0);

    var formattedAmount = totalAmount.toLocaleString("vi-VN"); // Format with Vietnamese locale

    billHTML.querySelector("#totalAmount").textContent = formattedAmount;
    boxDonHang.appendChild(billHTML);
  }

  function closeContainer(clickedElement) {
    var containerBillProduct = clickedElement.closest(".containerBillProduct");

    if (containerBillProduct) {
      containerBillProduct.style.display = "none";
      nenDen.style = "display: block;";
    }
  }

  nenDen.addEventListener("click", function (event) {
    var containerBillProducts = document.querySelectorAll(
      ".containerBillProduct"
    );

    containerBillProducts.forEach(function (containerBillProduct) {
      containerBillProduct.style.display = "none";
    });

    nenDen.style.display = "none";
  });
}
