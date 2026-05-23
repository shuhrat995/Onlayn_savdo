function initProductDetail() {
    if (!document.querySelector(".detail-page")) return;
    if (document.body.dataset.productDetailInited === "1") return;
    document.body.dataset.productDetailInited = "1";

    const thumbButtons = document.querySelectorAll(".thumb-btn");
    const mainImage = document.getElementById("mainProductImage");
    const sizeButtons = document.querySelectorAll(".size-btn");
    const colorButtons = document.querySelectorAll(".detail-options .color-dot");
    const decreaseBtn = document.getElementById("decreaseQty");
    const increaseBtn = document.getElementById("increaseQty");
    const qtyValue = document.getElementById("qtyValue");

    thumbButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const thumbImage = button.querySelector("img");
            if (!thumbImage || !mainImage) return;

            mainImage.src = thumbImage.src;
            mainImage.alt = thumbImage.alt;
            thumbButtons.forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");
        });
    });

    sizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            sizeButtons.forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");
        });
    });

    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            colorButtons.forEach((item) => item.classList.remove("is-selected"));
            button.classList.add("is-selected");
        });
    });

    function changeQuantity(delta) {
        if (!qtyValue) return;
        const currentValue = Number.parseInt(qtyValue.textContent || "1", 10);
        const nextValue = Math.max(1, currentValue + delta);
        qtyValue.textContent = String(nextValue);
    }

    decreaseBtn?.addEventListener("click", () => changeQuantity(-1));
    increaseBtn?.addEventListener("click", () => changeQuantity(1));
}

document.addEventListener("DOMContentLoaded", initProductDetail);
window.addEventListener("codex:route-change", () => {
    document.body.dataset.productDetailInited = "0";
    initProductDetail();
});
