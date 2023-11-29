var login = JSON.parse(localStorage.getItem("login"));
var users = JSON.parse(localStorage.getItem("users"));
if (login.isLogin == 1) {
  users.forEach((u) => {
    //load bag of user
    if (u.loginName == login.nameLogin) {
      var containProductShow = document.getElementsByClassName("yr_bag")[0];
      var productFromBag = u.userBag;
      productFromBag.forEach((p) => {
        var newBag = document.createElement("div");
        newBag.className = "newdivOfBagProduct";
        // Add the HTML content to the new div
        newBag.innerHTML = `
        <div class="show_product">
        <div class="idProInBag" style="display: none"></div>

        <div class="yr_product">
          <div class="decide_checkProduct">
            <div class="check_product">
              <input
                type="checkbox"
                class="myCheckbox"
                name="myCheckbox"
                value="checked"
              />
              <img class="imgPro" src="" alt="" />
            </div>

            <div class="content_package">
              <span class="shipping_method">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
                  />
                </svg>
                <span>Hỏa tốc</span>
              </span>
              <div class="name_product">
                <a class="a_name_product" href=""
                  >Cân Điện Tử Nhà Bếp</a
                >
              </div>
            </div>
          </div>

          <div class="price_product">
            <p class="p_price_product">44.000</p>
            <span>100.000.000</span>
          </div>
          <div class="decideBag">
            <div class="quantity_product">
              <input class="quality_input" type="text" value="1" />
            </div>
            <div class="icon_bag">
             
              <div class="icon_trash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
        `;
        var idPro = p.idProduct;
        const products = JSON.parse(localStorage.getItem("products")) || [];
        products.forEach((ps) => {
          if (ps.idProduct == idPro) {
            newBag.querySelector(".idProInBag").textContent = idPro;
            newBag.querySelector(".a_name_product").textContent =
              ps.productName;
            newBag.querySelector(".p_price_product").textContent =
              ps.priceProduct.toLocaleString('vi-VN') + ' đ';
            newBag.querySelector(".quality_input").value = p.quality;
            newBag.querySelector(".imgPro").src = ps.imageProduct;
          }
        });

        containProductShow.appendChild(newBag);

        var deleteBag = newBag.querySelector(".icon_trash");

        // click vào nút xóa sản phẩm ở giỏ hàng
        deleteBag.addEventListener("click", function (e) {
          var id = newBag.querySelector(".idProInBag").textContent;
          users.forEach(function (user) {
            user.userBag = user.userBag.filter((item) => item.idProduct != id);
          });
          localStorage.setItem("users", JSON.stringify(users));
          newBag.style.display = "none";
        });
      });
    }
  });
}
