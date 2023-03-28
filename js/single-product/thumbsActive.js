export function thumbsActiveFunc() {
    const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid")
    const singlImage = document.querySelector("#single-image")

    thumbs.forEach((item) => {
        item.addEventListener("click", () => {
            thumbs.forEach((image) => {
                image.classList.remove("active")
            })
            singlImage.src = item.src
            item.classList.add("active")
        })
    })
}