import { product3 } from "./glide.js"
import { thumbsActiveFunc } from "./single-product/thumbsActive.js"


const productId = localStorage.getItem("productId")
    ? JSON.parse(localStorage.getItem("productId"))
    : localStorage.setItem("productId", JSON.stringify(1))


const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : localStorage.setItem("products", JSON.stringify([]))



const findProduct = products.find((item) => item.id === Number(productId))

/* product title */
const productTitle = document.querySelector(".product-title")
productTitle.innerHTML = findProduct.name


/* product price */
const productOldPrice = document.querySelector(".old-price")
productOldPrice.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`

const productNewPrice = document.querySelector(".new-price")
productNewPrice.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`

/* product gallery */
const singleImage = document.getElementById("single-image")
singleImage.src = findProduct.img.singleImage

/* gallery thumbs */

const galleryThumbs = document.querySelector(".gallery-thumbs")
let result = ""

findProduct.img.thumbs.forEach((item) => {
    result += `
        <li class="glide__slide">
            <img src="${item}" class="img-fluid" alt="">
        </li>
    `
})

galleryThumbs.innerHTML = result

thumbsActiveFunc()
product3()