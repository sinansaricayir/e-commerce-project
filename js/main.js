import headerFunc from "./header.js"
import productFunc from "./product.js"

//! add product to localstorage start

(async function () {

    const products = await fetch("js/data.json") //get data
    const data = await products.json() // to json


    data ? localStorage.setItem("products", JSON.stringify(data)) : [] // json to string
    productFunc()

}
)()

//! add product to localstorage end



//! add cartItem to localstorage start

const cartItem = document.querySelector(".header-cart-count")

cartItem.innerHTML = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : "0"

//! add cartItem to localstorage end
