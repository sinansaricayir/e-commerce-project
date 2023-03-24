import { product1, product2 } from "./glide.js"

let products = localStorage.getItem("products") ?
    JSON.parse(localStorage.getItem("products")) : []

export let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")) : []


function addToCart() {
    const cartItem = document.querySelector(".header-cart-count")
    const buttons = [...document.getElementsByClassName("add-to-cart")]
    buttons.forEach((button) => {
        const inCart = cart.find((item) => item.id === Number(button.dataset.id))
        if (inCart) {
            button.setAttribute("disabled", "disabled")
        } else {
            button.addEventListener("click", function (e) {
                const id = e.target.dataset.id
                const findProduct = products.find((product) => product.id === Number(id))
                cart.push({ ...findProduct, quantity: 1 })
                localStorage.setItem("cart", JSON.stringify(cart))
                button.setAttribute("disabled", "disabled")
                cartItem.innerHTML = cart.length
            })
        }
    })
}


async function productFunc() {


    const productsContainer = document.getElementById("product-list")
    const productsContainer2 = document.getElementById("product-list-2")


    let results = ""

    products.forEach((product) => {
        results += `
                <li class="product-item glide__slide">
                    <div class="product-image">
                    <a href="#">
                        <img src="${product.img.singleImage}" alt="" class="img1" />
                        <img src="${product.img.thumbs[1]}" alt="" class="img2" />
                    </a>
                    </div>
                    <div class="product-info">
                    <a href="#" class="product-title"> ${product.name} </a>
                    <ul class="product-star">
                        <li>
                        <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                        <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                        <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                        <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                        <i class="bi bi-star-half"></i>
                        </li>
                    </ul>
                    <div class="product-prices">
                        <strong class="new-price">$${product.price.newPrice.toFixed(2)}</strong>
                        <span class="old-price">$${product.price.oldPrice.toFixed(2)}</span>
                    </div>
                    <span class="product-discount"> ${product.discount}% </span>
                    <div class="product-links">
                        <button class="add-to-cart" data-id="${product.id}">
                        <i class="bi bi-basket-fill"></i>
                        </button>
                        <button>
                        <i class="bi bi-heart-fill"></i>
                        </button>
                        <a href="#">
                        <i class="bi bi-eye-fill"></i>
                        </a>
                        <a href="#">
                        <i class="bi bi-share-fill"></i>
                        </a>
                    </div>
                    </div>
            </li>
        `

    })


    productsContainer ? productsContainer.innerHTML = results : ""
    productsContainer ? productsContainer2.innerHTML = results : ""

    addToCart()

    product1()

    product2()


}



export default productFunc