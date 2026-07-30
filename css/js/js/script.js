// ===============================
// VINOD WATER PURIFIERS
// script.js
// ===============================

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("productContainer");
    const searchBox = document.getElementById("searchBox");

    // Display Products
    function displayProducts(list){

        if(!container) return;

        container.innerHTML = "";

        list.forEach(product=>{

            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <img src="${product.image}"
                alt="${product.name}"
                class="product-image">

                <div class="product-content">

                    <h3>${product.name}</h3>

                    <h2>${product.price}</h2>

                    <ul>

                    ${product.features.map(item=>`<li>${item}</li>`).join("")}

                    </ul>

                    <a
                    class="buy-btn"
                    target="_blank"
                    href="https://wa.me/${COMPANY.whatsapp}?text=Hello, I am interested in ${encodeURIComponent(product.name)}">

                    Enquire on WhatsApp

                    </a>

                </div>
            `;

            container.appendChild(card);

        });

    }

    displayProducts(PRODUCTS);

    // Search

    if(searchBox){

        searchBox.addEventListener("keyup",()=>{

            const value = searchBox.value.toLowerCase();

            const filtered = PRODUCTS.filter(product=>

                product.name.toLowerCase().includes(value)

            );

            displayProducts(filtered);

        });

    }

});
