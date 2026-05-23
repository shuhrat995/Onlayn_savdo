const products = [
    {
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: -40,
        rating: 5,
        reviews: 88,
        image: "/products/havit-gamepad.png"
    },
    {
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: -35,
        rating: 4,
        reviews: 75,
        image: "/products/ak-900-keyboard.png"
    },
    {
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: -30,
        rating: 5,
        reviews: 99,
        image: "/products/ips-lcd-monitor.png"
    },
    {
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: -25,
        rating: 4.5,
        reviews: 99,
        image: "/products/comfort-chair.png"
    },
    {
        name: "Small BookSelf",
        price: 360,
        originalPrice: 420,
        discount: -15,
        rating: 5,
        reviews: 65,
        image: "/products/bookshelf.png"
    }
];

const categories = [
    { name: "Phones", icon: "bi-phone" },
    { name: "Computers", icon: "bi-display" },
    { name: "SmartWatch", icon: "bi-smartwatch" },
    { name: "Camera", icon: "bi-camera" },
    { name: "HeadPhones", icon: "bi-headphones" },
    { name: "Gaming", icon: "bi-controller" }
];

const bestSellingProducts = [
    {
        name: "The north coat",
        price: 260,
        originalPrice: 360,
        rating: 5,
        reviews: 65,
        image: "/products/north-coat.png"
    },
    {
        name: "Gucci duffle bag",
        price: 960,
        originalPrice: 1160,
        rating: 4.5,
        reviews: 65,
        image: "/products/gucci-duffle-bag.png"
    },
    {
        name: "RGB liquid CPU Cooler",
        price: 160,
        originalPrice: 170,
        rating: 4.5,
        reviews: 65,
        image: "/products/rgb-cpu-cooler.png"
    },
    {
        name: "Small BookSelf",
        price: 360,
        originalPrice: null,
        rating: 5,
        reviews: 65,
        image: "/products/bookshelf.png"
    }
];

const exploreProducts = [
    {
        name: "Breed Dry Dog Food",
        price: 100,
        rating: 3,
        reviews: 35,
        colors: ["#db4444", "#000"],
        image: "/products/dog-food.png"
    },
    {
        name: "CANON EOS DSLR Camera",
        price: 360,
        rating: 4,
        reviews: 95,
        colors: ["#000"],
        image: "/products/canon-camera.png"
    },
    {
        name: "ASUS FHD Gaming Laptop",
        price: 700,
        rating: 5,
        reviews: 325,
        colors: ["#000"],
        image: "/products/asus-laptop.png"
    },
    {
        name: "Curology Product Set",
        price: 500,
        rating: 4,
        reviews: 145,
        colors: ["#b7a695"],
        image: "/products/curology-set.png"
    },
    {
        name: "Kids Electric Car",
        price: 960,
        rating: 5,
        reviews: 65,
        colors: ["#db4444", "#000"],
        image: "/products/kids-car.png",
        badge: "NEW"
    },
    {
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        rating: 5,
        reviews: 35,
        colors: ["#eeff61", "#db4444"],
        image: "/products/soccer-cleats.png"
    },
    {
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        rating: 4.5,
        reviews: 55,
        colors: ["#000", "#db4444"],
        image: "/products/gp11-gamepad.png",
        badge: "NEW"
    },
    {
        name: "Quilted Satin Jacket",
        price: 660,
        rating: 4.5,
        reviews: 55,
        colors: ["#184a48", "#db4444"],
        image: "/products/satin-jacket.png"
    }
];

function initFlashSalesPage() {
    if (!document.getElementById("productsScroll")) return;
    if (document.body.dataset.flashSalesInited === "1") return;
    document.body.dataset.flashSalesInited = "1";

    renderProducts();
    renderCategories();
    renderBestSellingProducts();
    renderExploreProducts();
    initTimer("days", "hours", "minutes", "seconds", (3 * 24 * 60 * 60) + (23 * 60 * 60) + (19 * 60) + 56);
    initTimer("promoDays", "promoHours", "promoMinutes", "promoSeconds", (5 * 24 * 60 * 60) + (23 * 60 * 60) + (59 * 60) + 35);
    initScrollControls(".prev-btn", ".next-btn", "#productsScroll", 300);
    initScrollControls(".cat-prev-btn", ".cat-next-btn", "#categoriesScroll", 200);
    initExploreControls();
}

document.addEventListener("DOMContentLoaded", initFlashSalesPage);
window.addEventListener("codex:route-change", () => {
    document.body.dataset.flashSalesInited = "0";
    initFlashSalesPage();
});

function renderProducts() {
    const container = document.getElementById("productsScroll");
    if (!container) return;

    container.innerHTML = "";
    products.forEach((product) => {
        container.appendChild(createProductCard(product, "product"));
    });
}

function renderCategories() {
    const container = document.getElementById("categoriesScroll");
    if (!container) return;

    container.innerHTML = "";
    categories.forEach((category, index) => {
        const card = document.createElement("button");
        card.className = `category-card${index === 3 ? " active" : ""}`;
        card.type = "button";
        card.innerHTML = `
            <i class="bi ${category.icon}" aria-hidden="true"></i>
            <span>${category.name}</span>
        `;
        container.appendChild(card);
    });
}

function renderBestSellingProducts() {
    const container = document.getElementById("bestSellingGrid");
    if (!container) return;

    container.innerHTML = "";
    bestSellingProducts.forEach((product) => {
        container.appendChild(createProductCard(product, "best-selling"));
    });
}

function renderExploreProducts() {
    const container = document.getElementById("exploreGrid");
    if (!container) return;

    container.innerHTML = "";
    exploreProducts.forEach((product) => {
        container.appendChild(createProductCard(product, "explore"));
    });
}

function createProductCard(product, type) {
    const card = document.createElement("article");
    const imageClass = type === "product" ? "product" : type;
    card.className = `${type}-card`;
    const detailUrl = "/product-detail";

    const discount = product.discount ? `<span class="discount-badge">${product.discount}%</span>` : "";
    const badge = product.badge ? `<span class="new-badge">${product.badge}</span>` : "";
    const originalPrice = product.originalPrice ? `<span class="${priceClass(type, "original")}">$${product.originalPrice}</span>` : "";
    const colors = product.colors ? createColorDots(product.colors) : "";

    card.innerHTML = `
        <div class="${imageClass}-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="${imageClass}-image">
            ${discount}
            ${badge}
            <div class="${imageClass === "product" ? "product" : imageClass}-actions">
                <button class="action-btn" type="button" aria-label="Add ${product.name} to wishlist">
                    <i class="bi bi-heart"></i>
                </button>
                <a class="action-btn" href="${detailUrl}" aria-label="Quick view ${product.name}">
                    <i class="bi bi-eye"></i>
                </a>
            </div>
            <button class="add-to-cart-btn" type="button">Add To Cart</button>
        </div>

        <div class="${type === "product" ? "product-info" : "best-selling-info"}">
            <h3 class="${type === "product" ? "product-name" : "best-selling-name"}"><a href="${detailUrl}">${product.name}</a></h3>
            <div class="${type === "product" ? "product-price" : "best-selling-price"}">
                <span class="${priceClass(type, "current")}">$${product.price}</span>
                ${originalPrice}
            </div>
            <div class="product-rating">
                <div class="stars" aria-label="${product.rating} out of 5 stars">${createStarsHTML(product.rating)}</div>
                <span class="review-count">(${product.reviews})</span>
            </div>
            ${colors}
        </div>
    `;

    return card;
}

function priceClass(type, variant) {
    if (type === "product") {
        return variant === "current" ? "price-current" : "price-original";
    }

    return variant === "current" ? "best-selling-current" : "best-selling-original";
}

function createStarsHTML(rating) {
    let html = "";

    for (let index = 1; index <= 5; index += 1) {
        if (rating >= index) {
            html += '<i class="bi bi-star-fill" aria-hidden="true"></i>';
        } else if (rating >= index - 0.5) {
            html += '<i class="bi bi-star-half" aria-hidden="true"></i>';
        } else {
            html += '<i class="bi bi-star" aria-hidden="true"></i>';
        }
    }

    return html;
}

function createColorDots(colors) {
    const dots = colors.map((color) => `<span class="color-dot" style="background:${color}"></span>`).join("");
    return `<div class="color-dots" aria-label="Available colors">${dots}</div>`;
}

function initTimer(daysId, hoursId, minutesId, secondsId, startSeconds) {
    const daysEl = document.getElementById(daysId);
    const hoursEl = document.getElementById(hoursId);
    const minutesEl = document.getElementById(minutesId);
    const secondsEl = document.getElementById(secondsId);

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    let totalSeconds = startSeconds;

    function updateTimer() {
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");

        totalSeconds = Math.max(0, totalSeconds - 1);
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

function initScrollControls(prevSelector, nextSelector, scrollSelector, scrollAmount) {
    const prevBtn = document.querySelector(prevSelector);
    const nextBtn = document.querySelector(nextSelector);
    const scroll = document.querySelector(scrollSelector);

    if (!prevBtn || !nextBtn || !scroll) return;

    prevBtn.addEventListener("click", () => {
        scroll.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        scroll.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

function initExploreControls() {
    const prevBtn = document.querySelector(".explore-prev-btn");
    const nextBtn = document.querySelector(".explore-next-btn");
    const grid = document.querySelector("#exploreGrid");

    if (!prevBtn || !nextBtn || !grid) return;

    prevBtn.addEventListener("click", () => {
        window.scrollBy({ top: -280, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        window.scrollBy({ top: 280, behavior: "smooth" });
    });
}

