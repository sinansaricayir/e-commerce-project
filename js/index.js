//! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu")
const sidebar = document.querySelector("#sidebar")
const btnCloseSidebar = document.querySelector("#close-sidebar")


btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0"

})

btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%"
})


/* click outside start */
document.addEventListener("click", (event) => {
    if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
        sidebar.style.left = "-100%"
    }
})
/* click outside end */
//! home sidebar end



//! search modal start
const btnOpenSearch = document.querySelector(".search-button")
const modalSearch = document.getElementsByClassName("modal-search")
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper")
const btnCloseModalSearch = document.querySelector("#close-modal-search")

btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible"
    modalSearch[0].style.opacity = "1"
})

btnCloseModalSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden"
    modalSearch[0].style.opacity = "0"

})

/* click outside start */
document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(modalSearchWrapper) && !e.composedPath().includes(btnOpenSearch)) {
        modalSearch[0].style.visibility = "hidden"
    }
})
/* click outside end */
//! search modal end


//?-------------------------------------------------------------------------

//! slider start

let sliderIndex = 1
showSlides()

function plusSlide(n) {
    showSlides((sliderIndex += n))
}


function showSlides(n) {

    const slides = document.getElementsByClassName("slider-item")

    if (n > slides.length) {
        sliderIndex = 1
    }

    if (n == 0) {
        sliderIndex += slides.length
    }


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sliderIndex - 1].style.display = "flex"

}




//! slider end