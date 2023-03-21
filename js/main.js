import headerFunc from "./header.js"

//! add product to localstorage

async function getData() {

    const products = await fetch("js/data.json")
    const data = await products.json()

    data ? localStorage.setItem("products", JSON.stringify(data)) : []

    getData()

}

getData()

const products = localStorage.getItem("products")
