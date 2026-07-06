// ============================================================
//  داده‌های نمونه
// ============================================================
const productsData = [
  {
    id: 1,
    name: "لنت ترمز جلو",
    code: "LR-1200",
    price: 850000,
    car: "پراید",
    brand: "لنتکس",
  },
  {
    id: 2,
    name: "فیلتر روغن",
    code: "OF-220",
    price: 320000,
    car: "پژو ۲۰۶",
    brand: "بوش",
  },
  {
    id: 3,
    name: "کمربند تایم",
    code: "TB-440",
    price: 1450000,
    car: "سمند",
    brand: "دایکو",
  },
  {
    id: 4,
    name: "شمع موتور",
    code: "SP-88",
    price: 560000,
    car: "پراید",
    brand: "ان‌جی‌کی",
  },
  {
    id: 5,
    name: "ترمومتر آب",
    code: "TM-305",
    price: 280000,
    car: "تیبا",
    brand: "ایرانسازه",
  },
  {
    id: 6,
    name: "کیت کلاج",
    code: "CK-700",
    price: 2200000,
    car: "پژو ۲۰۶",
    brand: "ساکس",
  },
  {
    id: 7,
    name: "فیلتر هوا",
    code: "AF-140",
    price: 190000,
    car: "پراید",
    brand: "مان",
  },
  {
    id: 8,
    name: "بلبرینگ چرخ",
    code: "WB-55",
    price: 780000,
    car: "سمند",
    brand: "اس‌کی‌اف",
  },
  {
    id: 9,
    name: "واشر سرسیلندر",
    code: "HG-93",
    price: 1120000,
    car: "تیبا",
    brand: "پارس خودرو",
  },
  {
    id: 10,
    name: "پمپ بنزین",
    code: "FP-77",
    price: 1650000,
    car: "پژو ۲۰۶",
    brand: "دلفی",
  },
  {
    id: 11,
    name: "ترمز دیسک جلو",
    code: "BR-210",
    price: 920000,
    car: "پراید",
    brand: "کاشیما",
  },
  {
    id: 12,
    name: "رادیاتور",
    code: "RD-330",
    price: 2550000,
    car: "سمند",
    brand: "رادیات‌ایران",
  },
  {
    id: 13,
    name: "تسمه تایم",
    code: "TB-120",
    price: 980000,
    car: "پراید",
    brand: "دایکو",
  },
  {
    id: 14,
    name: "تسمه کولر",
    code: "AC-45",
    price: 420000,
    car: "پژو ۲۰۶",
    brand: "بوش",
  },
  {
    id: 15,
    name: "کیت تایم",
    code: "TK-300",
    price: 1850000,
    car: "سمند",
    brand: "ساکس",
  },
  {
    id: 16,
    name: "تسمه هیدرولیک",
    code: "HY-78",
    price: 650000,
    car: "پراید",
    brand: "بوش",
  },
  {
    id: 17,
    name: "لنت ترمز عقب",
    code: "LR-880",
    price: 720000,
    car: "پژو ۲۰۶",
    brand: "لنتکس",
  },
  {
    id: 18,
    name: "فیلتر بنزین",
    code: "GF-33",
    price: 280000,
    car: "سمند",
    brand: "بوش",
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
    const title = `${p.name} ${p.car}`;
    html += `
            <div class="product-item">
                <div class="product-row">
                    <div class="product-title">
                        <i class="fas fa-cube"></i> ${title}
                    </div>
                    <div class="product-price">
                        <i class="fas fa-tag"></i> ${formatPrice(p.price)}
                    </div>
                </div>
                <div class="product-meta">
                    <span class="badge-code"><i class="fas fa-barcode"></i> ${p.code}</span>
                    <span class="badge-brand"><i class="fas fa-certificate"></i> ${p.brand}</span>
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
