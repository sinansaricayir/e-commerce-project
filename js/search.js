function searchFunc(data) {
    const searchWrapper = document.querySelector(".search-result .results")
    let result = ""
    data.forEach((item) => {
        result += `
                    <a href="#" class="result-item" data-id="${item.id}">
                        <img src="${item.img.singleImage}" class="search-thumb" alt="">
                        <div class="search-info">
                        <h4>${item.name}</h4>
                        <span class="search-sku">SKU : PD0016</span>
                        <span class="search-price">$${(item.price.newPrice).toFixed(2)}</span>
                        </div>  
                    </a>    
                `
    })
    searchWrapper.innerHTML = result
    searchRouter()

    const searchInput = document.querySelector(".modal-search .search input")
    let value = ""
    let filtered = []

    searchInput.addEventListener("input", (e) => {
        value = (e.target.value).trim().toLowerCase()
        filtered = data.filter((item) => item.name.trim().toLowerCase().includes(value))
        let result = ""


        if (filtered.length > 1) {
            filtered.forEach((item) => {
                result += `
                        <a href="#" class="result-item" data-id="${item.id}">
                            <img src="${item.img.singleImage}" class="search-thumb" alt="">
                            <div class="search-info">
                            <h4>${item.name}</h4>
                            <span class="search-sku">SKU : PD0016</span>
                            <span class="search-price">$${(item.price.newPrice).toFixed(2)}</span>
                            </div>  
                        </a>    
                    `
            })
            searchWrapper.innerHTML = result


        } else if (filtered.length < 2) {

            if (filtered == 0) {
                searchWrapper.innerHTML = `
                                            <a href="/" class="result-item" style="justify-content: center">
                                            😔Aradığınız Ürün Bulunamadı😔
                                            </a>
                                        `
            } else {
                filtered.forEach((item) => {
                    result += `
                        <a href="#" class="result-item" data-id="${item.id}">
                            <img src="${item.img.singleImage}" class="search-thumb" alt="">
                            <div class="search-info">
                            <h4>${item.name}</h4>
                            <span class="search-sku">SKU : PD0016</span>
                            <span class="search-price">$${(item.price.newPrice).toFixed(2)}</span>
                            </div>  
                        </a>    
                    `
                })
                searchWrapper.innerHTML = result

            }

        }

        searchRouter()

    })

}

function searchRouter() {
    let searchRoute = document.querySelectorAll(".results .result-item")
    searchRoute.forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id
            if (id) {
                localStorage.setItem("productId", Number(id))
                window.location.href = "single-product.html"
            }
        })
    })
}



export default searchFunc