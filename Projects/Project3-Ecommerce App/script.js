document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Product 1", price: 44.22 },
        { id: 2, name: "Product 2", price: 21.23 },
        { id: 3, name: "Product 3", price: 89.34 },
        { id: 4, name: "Product 4", price: 67.5 },
    ];

    let cart = [];
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartDisplay = document.getElementById('empty-cart');
    const cartTotalDisplay = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button class="add-btn" data-id = "${product.id}">Add to cart</button>
            <button class="delete-btn" data-id = "${product.id}">Delete</button>
                `;
        productList.appendChild(productDiv)
    });
    renderProductList();

    productList.addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find(p => p.id === productId);

        if (e.target.classList.contains('add-btn')) {
            addToCart(product);
        } else if (e.target.classList.contains('delete-btn')) {
            deleteProduct(productId);
        }
    });

    function addToCart(product) {
        cart.push(product);
        console.log(cart);
        renderCart();
    }
    function deleteProduct(productId) {
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex > -1) {
            products.splice(productIndex, 1);
            // Re-render the product list
            renderProductList();
        }
        const cartIndex = cart.findIndex(c => c.id === productId);
        if (cartIndex > -1) {
            cart.splice(cartIndex, 1);
            renderCart();
        }
    }
    function renderProductList() {
        productList.innerHTML = ""; // Clear product list
        products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add("product");
            productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button class="add-btn" data-id="${product.id}">Add to cart</button>
            <button class="delete-btn" style="color: white; background-color: red;" data-id="${product.id}">Delete</button>
        `;
            productList.appendChild(productDiv);
        });
    }


    function renderCart() {
        cartItems.innerHTML = ""
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartDisplay.classList.add('hidden');
            cartTotalDisplay.classList.remove('hidden')

            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
                   ${item.name} - $${item.price.toFixed(2)}
                `;
                cartItems.appendChild(cartItem);
            });
            totalPriceDisplay.textContent = `${totalPrice.toFixed(2)} `;
        } else {
            emptyCartDisplay.classList.remove('hidden');
            cartTotalDisplay.classList.add('hidden');
            totalPriceDisplay.textContent = `0.00`;
        }
    }

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0;
        alert("Checked out Successfully")
        renderCart()
    });
});