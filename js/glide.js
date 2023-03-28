const productsContainer = document.getElementById("product-list")
const productsContainer2 = document.getElementById("product-list-2")

export function product1() {
    const config = {
        perView: 4,
        gap: 20,
        autoplay: 3000,
        bound: true,
        breakpoints: {
            992: {
                perView: 3
            },
            768: {
                perView: 2
            },
            576: {
                perView: 1
            },
        }
    }

    productsContainer && new Glide('.product-carousel', config).mount()

}

export function product2() {
    const config2 = {
        perView: 3,
        gap: 20,
        bound: true,
        autoplay: 3000,
        breakpoints: {
            992: {
                perView: 2
            }
        }
    }

    productsContainer2 && new Glide('.product-carousel2', config2).mount()


}


export function product3() {

    const config3 = {
        perView: 5,
        gap: 10,
        bound: true,
        breakpoints: {
            992: {
                perView: 3
            }
        }
    }

    new Glide('.product-thumb', config3).mount()


}


