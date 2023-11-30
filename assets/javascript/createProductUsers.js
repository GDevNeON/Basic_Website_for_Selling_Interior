
if (localStorage.getItem('firstVisit') === null) {
    
    // Lưu thông tin về lần mở web đầu tiên vào localStorage
    localStorage.setItem('firstVisit', new Date().toISOString());
    const initialProducts = [
        
        {
            idProduct: "011",
            productName: "Bàn quản lý ",
            category: "phong_lamviec",
            priceProduct: 23000000,
            detailProduct:
              "Thiết kế theo phong cách hiện đại, kiểu dáng lịch lãm, sang trọng",
            imageProduct: "./assets/image/desk3.jpg",
          },
          {
            idProduct: "012",
            productName: "Ghế gỗ Mango ",
            category: "phong_lamviec",
            priceProduct: 34000000,
            detailProduct:
              "Thiết kế tối giản, dễ kết hợp với không gian nội thất. ",
            imageProduct: "./assets/image/chair4.webp",
          },
          {
            idProduct: "013",
            productName: "Tủ trưng bày sách ",
            category: "phong_lamviec",
            priceProduct: 12000000,
            detailProduct: "Lưu trữ tài liệu và hồ sơ gọn gàng và tiện lợi.",
            imageProduct: "./assets/image/cabine2.jpg",
          },
          {
            idProduct: "014",
            productName: "Tủ hồ sơ",
            category: "phong_lamviec",
            priceProduct: 56000000,
            detailProduct: "Lưu trữ tài liệu hiệu quả, tiện lợi và đẹp mắt",
            imageProduct: "./assets/image/cabine1.png",
          },
          {
            idProduct: "015",
            productName: "Bàn làm việc vi tính ",
            category: "phong_lamviec",
            priceProduct: 26000000,
            detailProduct: "Thiết kế lắp ghép đa năng",
            imageProduct: "./assets/image/desk1.webp",
          },
          {
            idProduct: "016",
            productName: "Kệ xương cá ",
            category: "phong_lamviec",
            priceProduct: 87000000,
            detailProduct: "Kệ sách gỗ tự đứng mang đến sự tinh tế, hiện đại",
            imageProduct: "./assets/image/bookshelf2.jpg",
          },
          {
            idProduct: "017",
            productName: "Ghế Cabin tự nhiên",
            category: "phong_lamviec",
            priceProduct: 67000000,
            detailProduct:
              "Thiết kế mang phong cách hiện đại và sang trọng, đường nét mềm mại",
            imageProduct: "./assets/image/desk1.webp",
          },
          {
            idProduct: "018",
            productName: "Kệ trang trí gỗ Sồi",
            category: "phong_lamviec",
            priceProduct: 48000000,
            detailProduct: "Gỗ đã qua sấy, xử lý mối mọt và hoàn thiện",
            imageProduct: "./assets/image/bookself1.jpg",
          },
          {
            idProduct: "019",
            productName: "Kệ trưng bày tài liệu",
            category: "phong_lamviec",
            priceProduct: 27000000,
            detailProduct: "Thiết kế các góc cạnh tỉ mỉ, đảm bảo an toàn",
            imageProduct: "./assets/image/bookshelf5.jpg",
          },
          {
            idProduct: "020",
            productName: "Tủ kệ văn phòng",
            category: "phong_lamviec",
            priceProduct: 53000000,
            detailProduct:
              "Cấu trúc chắc chắn, dễ dàng tìm kiếm và truy cập tài liệu",
            imageProduct: "./assets/image/bookshelf4.jpg",
          },
          {
            idProduct: '001',
            productName: 'Armchair Royal',
            category: 'phong_khach',
            priceProduct: 10000000,
            detailProduct: 'Armchair kiểu dáng sang trọng',
            imageProduct: './assets/image/1.ARMCHAIR-ROYAL-VAI-2041-9-1-768x495.jpg'
        },
        {
            idProduct: '002',
            productName: 'Armchair Walnut',
            category: 'phong_khach',
            priceProduct: 5000000,
            detailProduct: 'Armchair walnut đơn giản quý phái',
            imageProduct: './assets/image/armchair4.jpg'
        },
        {
            idProduct: '003',
            productName: 'Armchair Arch',
            category: 'phong_khach',
            priceProduct: 15000000,
            detailProduct: 'Armchair ARCH với kiểu dáng sang trọng, khung kim loại chắc chắn với những đường nét tinh tế',
            imageProduct: './assets/image/armchair3.jpg'
        },
        {
            idProduct: '004',
            productName: 'Tủ Tivi Cabo',
            category: 'phong_khach',
            priceProduct: 6000000,
            detailProduct: 'Tủ tivi Cabo được làm từ gỗ mang lại nét gần gũi với thiên nhiên',
            imageProduct: './assets/image/3.porto_2_10005-768x511.jpg'
        }, {
          idProduct: '021',
          productName: 'Bàn ăn nguyên khối gỗ me tây nhập khẩu cao cấp',
          category: 'phong_an',
          priceProduct: 15000000,
          detailProduct: 'Bàn ăn gỗ me tây chân chữ X hiện đại, sở hữu những đường vân tuyệt đẹp',
          imageProduct: './assets/image/phong-an-001.jpg'
      },
      {
          idProduct: '022',
          productName: 'Bộ bàn ăn Amelia',
          category: 'phong_an',
          priceProduct: 21000000,
          detailProduct: 'Có kích thước vừa phù hợp với các căn hộ vừa và nhỏ, mặt đá trắng sáng vân mây.',
          imageProduct: './assets/image/phong-an-003.jpg'
      },
      {
          idProduct: '023',
          productName: 'Bàn ăn nguyên khối',
          category: 'phong_an',
          priceProduct: 11000000,
          detailProduct: 'Thiết kế tinh tế kết hợp với màu xanh da trời sáng.',
          imageProduct: './assets/image/phong-an-002.jpg'
      },
      {
          idProduct: '024',
          productName: 'Tủ bếp Daily',
          category: 'phong_an',
          priceProduct: 14000000,
          detailProduct: 'Chống ẩm tốt, thiết kế kiện đại',
          imageProduct: './assets/image/tu-bep-gia-dinh-001.jpg'
      },
      {
          idProduct: '025',
          productName: 'Tủ bếp Lovely',
          category: 'phong_an',
          priceProduct: 18000000,
          detailProduct: 'Bền vừng theo thời gian.',
          imageProduct: './assets/image/tu-bep-gia-dinh-002.jpg'
      },{
        idProduct: '501',
        productName: 'Bồn cầu sứ',
        category: 'phong_tam',
        priceProduct: 10000000,
        detailProduct: 'Đồ chất lượng cao, bền bỉ và hiện đại',
        imageProduct: './assets/image/boncau-01.jpg'
    },
    {
        idProduct: '502',
        productName: 'Bồn cầu thông minh',
        category: 'phong_tam',
        priceProduct: 7500000,
        detailProduct: 'Smart Toilet: Tiện ích hiện đại, thông minh',
        imageProduct: './assets/image/boncau-02.jpg'
    },
    {
        idProduct: '503',
        productName: 'Bồn tắm xanh',
        category: 'phong_tam',
        priceProduct: 5000000,
        detailProduct: 'Bồn tắm màu xanh: Thanh lịch, gần gũi thiên nhiên',
        imageProduct: './assets/image/bontam-01.jpg'
    },
    {
        idProduct: '504',
        productName: 'Bồn tắm trắng',
        category: 'phong_tam',
        priceProduct: 2500000,
        detailProduct: 'Bồn tắm màu trắng: Sạch sẽ, sang trọng.',
        imageProduct: './assets/image/bontam-02.jpg'
    },
    {
        idProduct: '505',
        productName: 'Gương Oval',
        category: 'phong_tam',
        priceProduct: 1500000,
        detailProduct: 'Gương Oval: Thiết kế hiện đại, tinh tế.',
        imageProduct: './assets/image/guong-01.jpg'
    },
    {
        idProduct: '506',
        productName: 'Gương chữ nhật',
        category: 'phong_tam',
        priceProduct: 50050000,
        detailProduct: 'Gương chữ nhật: Đơn giản, thanh lịch.',
        imageProduct: './assets/image/guong-02.png'
    },
    {
        idProduct: '507',
        productName: 'Lavabo trắng',
        category: 'phong_tam',
        priceProduct: 40050000,
        detailProduct: 'Lavabo trắng: Tinh tế, sáng bóng',
        imageProduct: './assets/image/lavabo-01.jpg'
    },
    {
        idProduct: '508',
        productName: 'Lavabo đen',
        category: 'phong_tam',
        priceProduct: 506000,
        detailProduct: 'Lavabo đen: Sang trọng, hiện đại.',
        imageProduct: './assets/image/lavabo-02.jpg'
    },
    {
        idProduct: '509',
        productName: 'Vòi hoa sen s1',
        category: 'phong_tam',
        priceProduct: 5500000,
        detailProduct: 'Vòi hoa sen 1: Thiết kế đẹp mắt, hiệu suất cao',
        imageProduct: './assets/image/voihoasen-01.jpg'
    },
    {
        idProduct: '510',
        productName: 'Vòi hoa sen s2',
        category: 'phong_tam',
        priceProduct: 8800000,
        detailProduct: 'Vòi hoa sen 2: Tiện lợi, đa dạng chức năng',
        imageProduct: './assets/image/voihoasen-02.jpg'
    },
    
      {
          idProduct: '026',
          productName: 'Tủ bếp Venus',
          category: 'phong_an',
          priceProduct: 25000000,
          detailProduct: 'Mua 2 tặng 1. Queo lựa',
          imageProduct: './assets/image/tu-bep-001.jpg'
      },
      {
          idProduct: '027',
          productName: 'Tủ bếp Fancy',
          category: 'phong_an',
          priceProduct: 24000000,
          detailProduct: 'Khả năng chịu các tác động ngoại lực tốt, từ lực đến nhiệt và có độ bền rất cao. ',
          imageProduct: './assets/image/tu-bep-002.jpg'
      },
      {
          idProduct: '028',
          productName: 'Tủ Bếp Sunny',
          category: 'phong_an',
          priceProduct: 15000000,
          detailProduct: 'Thiết kế tính tế, giúp không gian trong nhà thoáng hơn',
          imageProduct: './assets/image/tu-bep-003.jpg'
      },
      {
          idProduct: '029',
          productName: 'Tủ rượu gia đình',
          category: 'phong_an',
          priceProduct: 12000000,
          detailProduct: 'Mang đến cảm giác ấm cúng cho không gian sống gia đình.',
          imageProduct: './assets/image/tu-ly-002.jpg'
      },
      {
          idProduct: '030',
          productName: 'Tủ để đồ',
          category: 'phong_an',
          priceProduct: 19000000,
          detailProduct: 'Làm từ gỗ sồi tự nhiên vừa đem đến sự thoải mái dễ chịu cho người dùng',
          imageProduct: './assets/image/tu-ly-001.jpg'
      },
        {
            idProduct: '101',
            productName: 'Tủ Tivi Glamour',
            category: 'phong_khach',
            priceProduct: 5000000,
            detailProduct: 'Tủ tivi gỗ cao cấp Glamour làm bằng gỗ xà cừ được sơn một lớp sơn trắng',
            imageProduct: './assets/image/7.tu-tivi-glamour-trang-3-768x511.jpg'
        },
        {
            idProduct: '102',
            productName: 'Sofa Coastal',
            category: 'phong_khach',
            priceProduct: 14000000,
            detailProduct: 'Sofa Coastal gây ấn tượng bằng những đường cong bồng bềnh, theo xu hướng Modern Organic',
            imageProduct: './assets/image/1.BST-Coastal-3-1-768x512.jpg'
        },
        {
            idProduct: '103',
            productName: 'Sofa Chestkelly',
            category: 'phong_khach',
            priceProduct: 20000000,
            detailProduct: 'Sofa Chestkelly mang phong cách cổ điển',
            imageProduct: './assets/image/sofa-chestkelly.jpg'
        },
        {
            idProduct: '104',
            productName: 'Sofa Maxine',
            category: 'phong_khach',
            priceProduct: 13000000,
            detailProduct: 'Sofa Maxine là 1 lựa chọn sáng giá cho không gian phòng khách sang trọng, tinh tế',
            imageProduct: './assets/image/5.phong-khach-maxine-768x511.jpg'
        },
        {
            idProduct: '105',
            productName: 'Tủ giày Caruso Grey',
            category: 'phong_khach',
            priceProduct: 8000000,
            detailProduct: 'Thiết kế tinh gọn phù hợp với một không gian khiêm tốn',
            imageProduct: './assets/image/3.TU-GIAY-CARUSO-5-GREY-H170x50x14-82568K-3-768x495.jpg'
        },
        {
            idProduct: '106',
            productName: 'Tủ giày Caruso Silver',
            category: 'phong_khach',
            priceProduct: 10000000,
            detailProduct: 'Tủ giày đa năng và tiện lợi',
            imageProduct: './assets/image/2.103181-tu-giay-caruso-silver-3-ngan-1.jpg'
        },
        
        {
            idProduct: '107',
            productName: 'Ghế Sofa da Barcelona',
            category: 'phong_ngu',
            priceProduct: 3000000,
            detailProduct: 'Loại ghế có chất liệu da cao cấp',
            imageProduct: './assets/image/ghe-da-barcelona-2.jpg'
        },
        {
            idProduct: '108',
            productName: 'Ghế thư giãn Swan chair',
            category: 'phong_ngu',
            priceProduct: 7500000,
            detailProduct: 'Ghế có hình dáng tựa như một con thiên nga',
            imageProduct: './assets/image/Ghe-thu-gian-Swan-chair-i0009-12013-6.jpg'
        },
        {
        idProduct: '109',
            productName: 'Ghế xích đu Swingchair',
            category: 'phong_ngu',
            priceProduct: 5200000,
            detailProduct: 'Ghế xích đu nhựa giả mây Swingchair M1 có thiết kế tinh tế và hiện đại.',
            imageProduct: './assets/image/ghe-xich-du-m1-1.jpg'
        },
        {
            idProduct: '110',
            productName: 'Giường ngủ hiện đại tiện dụng',
            category: 'phong_ngu',
            priceProduct: 12500000,
            detailProduct: 'Giường ngủ hiện đại có ngăn xếp',
            imageProduct: './assets/image/Giuong-ngu-hien-dai-tien-dung-GI2002-ava.jpg'
        },
        {
        idProduct: '111',
            productName: 'Sofa giường',
            category: 'phong_ngu',
            priceProduct: 10000000,
            detailProduct: 'Sofa giường gỗ thông tự nhiên. Đệm mút cao cấp, mút mềm. Bề mặt nỉ cao cấp',
            imageProduct: './assets/image/sofa-giuong-sfg01-3.jpg'
        },
        {
            idProduct: '112',
            productName: 'Tủ quần áo AA Gallery',
            category: 'phong_ngu',
            priceProduct: 11000000,
            detailProduct: 'Tủ quần áo cửa kính chất liệu nguyên bản',
            imageProduct: './assets/image/Tu-quan-ao-AA-Gallery-Q9-01-2-600x400.jpg'
        },
        {
        idProduct: '113',
            productName: 'Tủ quần áo gỗ sồi',
            category: 'phong_ngu',
            priceProduct: 6000000,
            detailProduct: 'Tủ quần áo 2 ngăn gỗ sồi chất liệu bền',
            imageProduct: './assets/image/tu-quan-ao-go-soi-tqa260021.jpg'
        },
        {
            idProduct: '114',
            productName: 'Bàn trang điểm Madame Termocotto',
            category: 'phong_ngu',
            priceProduct: 4100000,
            detailProduct: 'Đây là bàn trang điểm với thiết kế sang trọng',
            imageProduct: './assets/image/Ban-phan-Madame-Termocotto-P67W-1-600x387.jpg'
        },
        {idProduct: '115',
            productName: 'Bàn trang điểm gỗ',
            category: 'phong_ngu',
            priceProduct: 10500000,
            detailProduct: 'Bàn trang điểm chất liệu gỗ cao cấp',
            imageProduct: './assets/image/ban-trang-diem-go-btđ-c.01-3.jpg'
        },
        {
            idProduct: '116',
            productName: 'Bàn trang điểm gỗ óc chó',
            category: 'phong_ngu',
            priceProduct: 11000000,
            detailProduct: 'Một chiếc bàn theo phong cách scandinavian với đường nét đơn giản và tự nhiên',
            imageProduct: './assets/image/ban-trang-diem-go-oc-cho-TĐ-OC01-2.jpg'
        }
              ];
  
      // Chuyển danh sách sản phẩm thành chuỗi JSON và lưu vào localStorage
      localStorage.setItem('products', JSON.stringify(initialProducts));
}