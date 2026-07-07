// ============================================================
//  داده‌های واقعی - لیست قیمت تسمه خودرو (رایکالتون)
//  قیمت‌ها از ریال به تومان تبدیل شده (تقسیم بر ۱۰)
//  name: فقط نوع محصول | car: نام خودرو | description: توضیحات (HNBR, EPDM, ...)
// ============================================================
const productsData = [
  // ===== تسمه تایم =====
  {
    id: 1,
    name: "تسمه تایم",
    code: "104",
    price: 1540000,
    car: "پژو ۲۰۶ تیپ ۲",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 2,
    name: "تسمه تایم",
    code: "104",
    price: 1750000,
    car: "پژو ۲۰۶ تیپ ۲",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 3,
    name: "تسمه تایم",
    code: "134",
    price: 3500000,
    car: "پژو ۲۰۶ تیپ ۵",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 4,
    name: "تسمه تایم",
    code: "114",
    price: 1850000,
    car: "سمند",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 5,
    name: "تسمه تایم",
    code: "153",
    price: 3960000,
    car: "پژو ۴۰۷",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 6,
    name: "تسمه تایم",
    code: "127",
    price: 3750000,
    car: "EF7",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 7,
    name: "تسمه تایم",
    code: "132",
    price: 3500000,
    car: "ال ۹۰",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 8,
    name: "تسمه تایم",
    code: "107",
    price: 1100000,
    car: "پراید یورو ۴",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 9,
    name: "تسمه تایم",
    code: "137",
    price: 2600000,
    car: "ریو",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 10,
    name: "تسمه تایم",
    code: "136",
    price: 3500000,
    car: "زانتیا",
    brand: "رایکالتون",
    description: "HNBR",
  },
  {
    id: 11,
    name: "تسمه تایم",
    code: "108",
    price: 1600000,
    car: "مزدا ۲۰۰۰",
    brand: "رایکالتون",
    description: "",
  },

  // ===== تسمه دینام =====
  {
    id: 12,
    name: "تسمه دینام",
    code: "1335",
    price: 721000,
    car: "آردی",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 13,
    name: "تسمه دینام",
    code: "1568",
    price: 1600000,
    car: "پژو ۲۰۶ تیپ ۲-۵",
    brand: "رایکالتون",
    description: "EPDM",
  },
  {
    id: 14,
    name: "تسمه دینام",
    code: "1568",
    price: 1271000,
    car: "پژو ۲۰۶ تیپ ۲-۵",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 15,
    name: "تسمه دینام",
    code: "1055",
    price: 855000,
    car: "پژو ۲۰۶ فرمان برقی",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 16,
    name: "تسمه دینام",
    code: "1564",
    price: 1267000,
    car: "پژو ۲۰۶ تیپ ۲",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 17,
    name: "تسمه دینام",
    code: "1564",
    price: 1596000,
    car: "پژو ۲۰۶ تیپ ۲",
    brand: "رایکالتون",
    description: "EPDM",
  },
  {
    id: 18,
    name: "تسمه دینام",
    code: "1575",
    price: 1276000,
    car: "پژو ۲۰۶ تیپ ۵",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 19,
    name: "تسمه دینام",
    code: "2364",
    price: 1915000,
    car: "EF7",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 20,
    name: "تسمه دینام",
    code: "2364",
    price: 2412000,
    car: "EF7",
    brand: "رایکالتون",
    description: "EPDM",
  },
  {
    id: 21,
    name: "تسمه دینام",
    code: "855",
    price: 462000,
    car: "TU5",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 22,
    name: "تسمه دینام",
    code: "838",
    price: 418000,
    car: "آریسان",
    brand: "رایکالتون",
    description: "دنده‌ای",
  },
  {
    id: 23,
    name: "تسمه دینام",
    code: "1822",
    price: 1476000,
    car: "ال ۹۰",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 24,
    name: "تسمه دینام",
    code: "m35",
    price: 530000,
    car: "پراید",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 25,
    name: "تسمه دینام",
    code: "900",
    price: 440000,
    car: "پراید",
    brand: "رایکالتون",
    description: "دنده‌ای",
  },
  {
    id: 26,
    name: "تسمه دینام",
    code: "1065",
    price: 863000,
    car: "تارا",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 27,
    name: "تسمه دینام",
    code: "885",
    price: 478000,
    car: "ریو",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 28,
    name: "تسمه دینام",
    code: "1650",
    price: 1337000,
    car: "زانتیا",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 29,
    name: "تسمه دینام",
    code: "1663",
    price: 1348000,
    car: "سمند",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 30,
    name: "تسمه دینام",
    code: "1663",
    price: 1123000,
    car: "سمند",
    brand: "رایکالتون",
    description: "EPDM",
  },
  {
    id: 31,
    name: "تسمه دینام",
    code: "1663",
    price: 1123000,
    car: "شاهین",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 32,
    name: "تسمه دینام",
    code: "925",
    price: 440000,
    car: "نیسان",
    brand: "رایکالتون",
    description: "دنده‌ای",
  },

  // ===== تسمه هیدرولیک =====
  {
    id: 33,
    name: "تسمه هیدرولیک",
    code: "930",
    price: 503000,
    car: "پراید",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 34,
    name: "تسمه هیدرولیک",
    code: "1420",
    price: 767000,
    car: "آردی",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 35,
    name: "تسمه هیدرولیک",
    code: "945",
    price: 511000,
    car: "پراید",
    brand: "رایکالتون",
    description: "",
  },

  // ===== تسمه کولر =====
  {
    id: 36,
    name: "تسمه کولر",
    code: "1253",
    price: 846000,
    car: "پژو ۲۰۶",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 37,
    name: "تسمه کولر",
    code: "ax34",
    price: 530000,
    car: "پراید",
    brand: "رایکالتون",
    description: "دنده‌ای",
  },
  {
    id: 38,
    name: "تسمه کولر",
    code: "1100",
    price: 60500,
    car: "دلیکا",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 39,
    name: "تسمه کولر",
    code: "962",
    price: 520000,
    car: "ریو",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 40,
    name: "تسمه کولر",
    code: "1005",
    price: 553000,
    car: "مزدا ۳۲۳",
    brand: "رایکالتون",
    description: "",
  },

  // ===== کیت تایم =====
  {
    id: 41,
    name: "کیت تایم",
    code: "104",
    price: 3520000,
    car: "TU3",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 42,
    name: "کیت تایم",
    code: "134",
    price: 7480000,
    car: "TU5",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 43,
    name: "کیت تایم",
    code: "114",
    price: 3500000,
    car: "XU7",
    brand: "رایکالتون",
    description: "",
  },
  {
    id: 44,
    name: "کیت تایم",
    code: "132",
    price: 7480000,
    car: "ال ۹۰",
    brand: "رایکالتون",
    description: "",
  },
  // ===== تسمه دینام (4PK) - برند: کینگستون =====
  {
    id: 45,
    name: "تسمه دینام",
    code: "4PK 830",
    price: 464800,
    car: "RD",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 46,
    name: "تسمه کولر",
    code: "4PK 845",
    price: 473200,
    car: "پژو ۴۰۵ ۲۰۰۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 47,
    name: "تسمه دینام",
    code: "4PK 855",
    price: 478800,
    car: "TU5",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 48,
    name: "تسمه دینام",
    code: "4PK 870",
    price: 487200,
    car: "آریو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 49,
    name: "تسمه دینام",
    code: "4PK 875",
    price: 490000,
    car: "میتسوبیشی",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 50,
    name: "تسمه دینام",
    code: "4PK 885",
    price: 495600,
    car: "مزدا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 51,
    name: "تسمه هیدرولیک",
    code: "4PK 930",
    price: 520800,
    car: "پراید",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 52,
    name: "تسمه دینام",
    code: "4PK 945",
    price: 529200,
    car: "پژو ۴۰۵ ۲۰۰۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 53,
    name: "تسمه کولر",
    code: "4PK 962",
    price: 538700,
    car: "ریو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 54,
    name: "تسمه دینام",
    code: "4PK 980",
    price: 548800,
    car: "دلیکا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 55,
    name: "تسمه کولر",
    code: "4PK 1005",
    price: 562800,
    car: "مزدا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 56,
    name: "تسمه کولر",
    code: "4PK 1100",
    price: 616000,
    car: "دلیکا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 57,
    name: "تسمه دینام",
    code: "4PK 1325",
    price: 742000,
    car: "RD",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 58,
    name: "تسمه دینام",
    code: "4PK 1335",
    price: 747600,
    car: "RD",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 59,
    name: "تسمه دینام",
    code: "4PK 1345",
    price: 753200,
    car: "RD",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 60,
    name: "تسمه دینام",
    code: "4PK 1420",
    price: 795200,
    car: "RD",
    brand: "کینگستون",
    description: "",
  },

  // ===== تسمه دینام (5PK) - برند: کینگستون =====
  {
    id: 61,
    name: "تسمه دینام",
    code: "5PK 790",
    price: 560000,
    car: "هایما",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 62,
    name: "تسمه دینام",
    code: "5PK 865",
    price: 605500,
    car: "پیکاپ ریچ",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 63,
    name: "تسمه دینام",
    code: "5PK 970",
    price: 679000,
    car: "سیلو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 64,
    name: "تسمه دینام",
    code: "5PK 1160",
    price: 812000,
    car: "وانت کارا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 65,
    name: "تسمه دینام",
    code: "5PK 1205",
    price: 843500,
    car: "وانت کارا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 66,
    name: "تسمه دینام",
    code: "5PK 1218",
    price: 852600,
    car: "H30 CROSS",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 67,
    name: "تسمه دینام",
    code: "5PK 1330",
    price: 931000,
    car: "آریو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 68,
    name: "تسمه دینام",
    code: "5PK 1650",
    price: 1155000,
    car: "سوزوکی ویتارا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 69,
    name: "تسمه دینام",
    code: "5PK 1663",
    price: 1164100,
    car: "شاهین",
    brand: "کینگستون",
    description: "",
  },

  // ===== تسمه دینام (6PK) - برند: کینگستون =====
  {
    id: 70,
    name: "تسمه دینام",
    code: "6PK 770",
    price: 672000,
    car: "هوو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 71,
    name: "تسمه دینام",
    code: "6PK 775",
    price: 672000,
    car: "هوو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 72,
    name: "تسمه دینام",
    code: "6PK 1055",
    price: 886200,
    car: "پژو ۲۰۷ فرمان برقی",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 73,
    name: "تسمه دینام",
    code: "6PK 1065",
    price: 894600,
    car: "تارا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 74,
    name: "تسمه دینام",
    code: "6PK 1199",
    price: 1007200,
    car: "ال ۹۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 75,
    name: "تسمه دینام",
    code: "6PK 1270",
    price: 1066800,
    car: "دلیکا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 76,
    name: "تسمه دینام",
    code: "6PK 1281",
    price: 1076000,
    car: "سراتو YD",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 77,
    name: "تسمه دینام",
    code: "6PK 1400",
    price: 1176000,
    car: "رنو",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 78,
    name: "تسمه دینام",
    code: "6PK 1565",
    price: 1314600,
    car: "پژو ۲۰۶",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 79,
    name: "تسمه دینام",
    code: "6PK 1568",
    price: 1317100,
    car: "رانا",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 80,
    name: "تسمه دینام",
    code: "6PK 1570",
    price: 1318800,
    car: "پژو ۲۰۶",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 81,
    name: "تسمه دینام",
    code: "6PK 1575",
    price: 1323000,
    car: "پژو ۲۰۶",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 82,
    name: "تسمه دینام",
    code: "6PK 1648",
    price: 1384300,
    car: "زانتیا ۲۰۰۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 83,
    name: "تسمه دینام",
    code: "6PK 1660",
    price: 1394400,
    car: "پژو ۴۰۵ ۱۸۰۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 84,
    name: "تسمه دینام",
    code: "6PK 1663",
    price: 1396900,
    car: "پژو ۴۰۵ ۱۸۰۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 85,
    name: "تسمه دینام",
    code: "6PK 1665",
    price: 1398600,
    car: "پژو ۴۰۵ ۱۸۰۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 86,
    name: "تسمه دینام",
    code: "6PK 1815",
    price: 1524600,
    car: "ال ۹۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 87,
    name: "تسمه دینام",
    code: "6PK 1822",
    price: 1530400,
    car: "ال ۹۰",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 88,
    name: "تسمه دینام",
    code: "6PK 2148",
    price: 1804300,
    car: "دنا + توربو اتوماتیک",
    brand: "کینگستون",
    description: "",
  },
  {
    id: 89,
    name: "تسمه دینام",
    code: "6PK 2364",
    price: 1985700,
    car: "EF7",
    brand: "کینگستون",
    description: "",
  },

  // ===== تسمه دینام (9/5x) - برند: کینگستون =====
  {
    id: 90,
    name: "تسمه دینام",
    code: "9/5x 825",
    price: 363000,
    car: "پیکان",
    brand: "کینگستون",
    description: "دنده‌ای",
  },
  {
    id: 91,
    name: "تسمه دینام",
    code: "9/5x 835",
    price: 374000,
    car: "پیکان",
    brand: "کینگستون",
    description: "دنده‌ای",
  },
  {
    id: 92,
    name: "تسمه دینام",
    code: "9/5x 900",
    price: 396000,
    car: "پراید",
    brand: "کینگستون",
    description: "دنده‌ای",
  },
  {
    id: 93,
    name: "تسمه دینام",
    code: "9/5x 925",
    price: 407000,
    car: "وانت نیسان",
    brand: "کینگستون",
    description: "دنده‌ای",
  },
  {
    id: 94,
    name: "تسمه دینام",
    code: "9/5x 940",
    price: 413600,
    car: "پیکان",
    brand: "کینگستون",
    description: "دنده‌ای",
  },

  // ===== تسمه کولر - برند: کینگستون =====
  {
    id: 95,
    name: "تسمه کولر",
    code: "AX 34",
    price: 448800,
    car: "پراید",
    brand: "کینگستون",
    description: "دنده‌ای",
  },

  // ===== تسمه دینام - برند: کینگستون =====
  {
    id: 96,
    name: "تسمه دینام",
    code: "M35 890",
    price: 440000,
    car: "پراید",
    brand: "کینگستون",
    description: "",
  },
];
// ============================================================
//  STATE
// ============================================================
let filters = {
  car: "همه",
  brand: "همه",
  name: "همه",
};

// ============================================================
//  DOM REFS
// ============================================================
const productListEl = document.getElementById("productList");
const carFilter = document.getElementById("carFilter");
const brandFilter = document.getElementById("brandFilter");
const nameFilter = document.getElementById("nameFilter");

// ============================================================
//  HELPERS
// ============================================================
function formatPrice(price) {
  return price.toLocaleString("fa-IR") + " تومان";
}

function getFilteredProducts() {
  let result = [...productsData];

  if (filters.car !== "همه") {
    result = result.filter((p) => p.car === filters.car);
  }

  if (filters.brand !== "همه") {
    result = result.filter((p) => p.brand === filters.brand);
  }

  if (filters.name !== "همه") {
    result = result.filter((p) => p.name.includes(filters.name));
  }

  return result;
}

// ============================================================
//  RENDER
// ============================================================

function render() {
  const result = getFilteredProducts();

  if (result.length === 0) {
    productListEl.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box-open"></i>
                <p>هیچ کالایی با این فیلترها پیدا نشد.</p>
            </div>
        `;
    return;
  }

  let html = "";
  result.forEach((p) => {
    // عنوان: name + car + brand
    const title = `${p.name} ${p.car} (${p.brand})`;

    // توضیحات (اگه خالی نباشه)
    const descText = p.description && p.description !== "" ? p.description : "";

    html += `
            <div class="product-item">
                <div class="product-row">
                    <div class="product-title">
                        <i class="fas fa-cube"></i> ${title}
                    </div>
                </div>
                <div class="product-row-second">
                    <div class="product-code">
                        <i class="fas fa-barcode"></i> ${p.code}
                    </div>
                    ${descText ? `<div class="product-desc"><i class="fas fa-info-circle"></i> ${descText}</div>` : ""}
                    <div class="product-price">
                        <i class="fas fa-tag"></i> ${formatPrice(p.price)}
                    </div>
                </div>
            </div>
        `;
  });

  productListEl.innerHTML = html;
}

// ============================================================
//  EVENT: FILTER SELECTS
// ============================================================
carFilter.addEventListener("change", function () {
  filters.car = this.value;
  render();
});

brandFilter.addEventListener("change", function () {
  filters.brand = this.value;
  render();
});

nameFilter.addEventListener("change", function () {
  filters.name = this.value;
  render();
});

// ============================================================
//  INIT
// ============================================================
render();
