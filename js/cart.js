let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")) : []


function displayCartProduct() {
    let results = ""
    const cartProduct = document.getElementById("cart-product")
    cart.forEach((item) => {
        results += `
        <tr class="cart-item">
            <td></td>
            <td class="cart-image">
                <img src="${item.img.singleImage}" alt="">
                <i class="bi bi-x delete-cart" data-id=${item.id}></i>
            </td>
            <td>${item.name}</td>
            <td>$${item.price.newPrice}</td>
            <td>${item.quantity}</td>
            <td>$108.00</td>
        </tr>
        `
    })
    cartProduct.innerHTML = results
    removeCartItem()
}


displayCartProduct()


function removeCartItem() {

    const btnDeleteCart = document.querySelectorAll(".delete-cart");
    let cartItem = document.querySelector(".header-cart-count")

    btnDeleteCart.forEach((button) => {
        button.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            cart = cart.filter((item) => item.id !== Number(id));
            displayCartProduct()
            localStorage.setItem("cart", JSON.stringify(cart))
            cartItem.innerHTML = cart.length
        });
    });
}






