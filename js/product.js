import { product1, product2 } from "./glide.js"

let products = []

async function productFunc() {

    products = (await localStorage.getItem("products")) ?
        JSON.parse(localStorage.getItem("products")) : []

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
                        <button>
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

    productsContainer.innerHTML = results
    productsContainer2.innerHTML = results


    product1()

    product2()

}


export default productFunc() 