import headerFunc from "./header.js"
import productFunc from "./product.js"

//! add product to localstorage

async function getData() {

    const products = await fetch("js/data.json") //get data
    const data = await products.json() // to json


    data ? localStorage.setItem("products", JSON.stringify(data)) : [] // json to string

}

getData()

const products = localStorage.getItem("products")
