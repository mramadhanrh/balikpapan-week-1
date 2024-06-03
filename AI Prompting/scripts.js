// Create function to add click event to an element
function addClickEvent(element, callback) {
  element.addEventListener("click", callback);
}

// Create function to remove an element from the DOM
/**
 * Removes the specified element from the DOM.
 *
 * @param {HTMLElement} element - The element to be removed.
 */
function removeElement(element) {
  element.parentNode.removeChild(element);
}

function largestNumber(...numbers) {
  return Math.max(...numbers);
}

document.addEventListener("DOMContentLoaded", () => {
  const navElements = {
    home: document.getElementById("home"),
    category: document.getElementById("category"),
    contact: document.getElementById("contact"),
  };

  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  // Add event listeners to navigation elements
  Object.keys(navElements).forEach((key) => {
    navElements[key].addEventListener("click", () => {
      alert(`Navigating to ${key.charAt(0).toUpperCase() + key.slice(1)}`);
      // Implement your navigation logic here
    });
  });

  // Remove home element (not sure why this is needed, but keeping it as is)
  removeElement(navElements.home);

  // Toggle mobile menu and navigation menu on click
  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("data-id");
      window.location.href = `/product/${productId}`;
    });
  });
});

function addNewProduct(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.dataset.id = product.id;

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = "Product Image";
  productCard.appendChild(productImage);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productTitle = document.createElement("h3");
  productTitle.classList.add("product-title");
  productTitle.textContent = product.title;
  productInfo.appendChild(productTitle);

  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = `$${product.price}`;
  productInfo.appendChild(productPrice);

  productCard.appendChild(productInfo);

  const productContainer = document.querySelector(".product-list-container");
  console.log(productContainer);
  productContainer.appendChild(productCard);
}

function createRandomProduct() {
  const id = Math.floor(Math.random() * 1000);
  const image = `https://via.placeholder.com/150?text=Product+${id}`;
  const title = `Product ${id}`;
  const price = `$${Math.floor(Math.random() * 100) + 1}.00`;

  return { id, image, title, price };
}

function addMultipleProducts(count) {
  for (let i = 0; i < count; i++) {
    const product = createRandomProduct();
    addNewProduct(product);
  }
}

addMultipleProducts(3);
