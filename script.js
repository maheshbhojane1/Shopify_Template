document.addEventListener("DOMContentLoaded", function () {
  const overlays = document.querySelectorAll(".overlay");
  const card = document.querySelector(".card");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modelInfo = document.getElementById("modelInfo");
  const modalColor = document.getElementById("modalColor");
  const modalCol = document.getElementById("modalCol");
  const closeModal = document.querySelector(".close-icon");
  const hamburger = document.getElementById("toggleMobileMenu");
  const header = document.querySelector(".header");
  const addToCartBtn = document.querySelector(".add-to-cart");
  const menuIcon = document.querySelector(".open")
  const closeIcon = document.querySelector(".close")

  let selectedColor = null;
  let activePopup = null;
  let activeOverlay = null;
  let activeMenu = null

  overlays.forEach((overlay, index) => {
    overlay.addEventListener("click", function () {
      const product = overlay.closest(".product");
      const name = product.dataset.name;
      const price = product.dataset.price;

      // Use different images for popup if needed
      const popupImageSrc = `assets/Product-${index + 1}.svg`;

      // If popup exists, remove it
      if (activePopup) {
        activePopup.remove();
        if (activeOverlay) {
          activeOverlay.src = "assets/Group-1.svg";
        }

        // If clicked same overlay again, just close it
        if (activeOverlay === overlay) {
          activePopup = null;
          activeOverlay = null;
          return;
        }
      }

      // Toggle icon
      overlay.src = "assets/Group-2.svg";
      activeOverlay = overlay;

      // Create popup element
      const popup = document.createElement("div");
      popup.className = "small-popup";

      popup.innerHTML = `
          <div class="popup-content">
          <img src="${popupImageSrc}" class="popup-image" alt="${name}">
            <div class="popup-text">
              <h4>${name}</h4>
              <p>${price}</p>
            </div>
          </div>
        `;

      // Add popup inside the product div
      product.appendChild(popup);
      activePopup = popup;

      // Add click listener to the newly created small popup
      popup.addEventListener("click", function () {
        card.style.display = "block";
        // popup.style.display = "none";

        if ((popup.style.display = "none")) {
          overlay.src = "assets/Group-1.svg";
        }

        let imgSrc = `assets/Product-${index + 1}.svg`; // Use same image as popup or customize
        let name = product.getAttribute("data-name");
        let price = product.getAttribute("data-price");
        let info = product.getAttribute("data-info");
        let color = product.getAttribute("data-color");
        let color1 = product.getAttribute("data-col");

        modalImage.src = imgSrc;
        modalName.innerText = name;
        modalPrice.innerText = price;
        modelInfo.innerHTML = info;
        modalColor.innerHTML = color;
        modalCol.innerHTML = color1;
      });
    });
  });

  // Close modal
  closeModal.addEventListener("click", function () {
    card.style.display = "none";
  });

  // Select color
  document.querySelectorAll(".color-btn").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".color-btn")
        .forEach((btn) => (btn.style.borderLeft = `6px solid Black`));
      this.style.borderLeft = `6px solid Blue`;

      selectedColor = this.getAttribute("data-col");
    });
  });

  addToCartBtn.addEventListener("click", function () {
    document.getElementById("colorBox").classList.add("flash");
    document.getElementById("sizeBox").classList.add("flash");
    addToCartBtn.classList.add("flash");

    setTimeout(() => {
      document.getElementById("colorBox").classList.remove("flash");
      document.getElementById("sizeBox").classList.remove("flash");
      addToCartBtn.classList.remove("flash");
    }, 2000);
  });


 

  hamburger.addEventListener("click", () => {
   
    header.classList.toggle('active');

    // menuIcon.style.display = 'none'
    // closeIcon.style.display = 'block'
  
  // Toggle image source
  if(activeMenu) {
    activeMenu.src = "assets/Dot-1.svg";
  }

  if(activeMenu === menuIcon){
    activeMenu = null;
          return;
      
  }

  menuIcon.src = "assets/Dot-2.svg";
      activeMenu = menuIcon;
  });
});
