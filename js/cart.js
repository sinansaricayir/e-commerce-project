import { cart } from "./product.js"

function displayCartProduct() {
    let results = ""
    const cartProduct = document.getElementById("cart-product")
    cart.forEach((item, i) => {
        console.log(item);
        results += `
        <tr class="cart-item">
            <td></td>
            <td class="cart-image">
                <img src="${item.img.singleImage}" alt="">
                <i class="bi bi-x delete-cart"></i>
            </td>
            <td>${item.name}</td>
            <td>$${item.price.newPrice}</td>
            <td>${item.quantity}</td>
            <td>$108.00</td>
        </tr>
        `
    })
    cartProduct.innerHTML = results
}


displayCartProduct()