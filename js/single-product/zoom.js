function zoomfunc() {
    const singleImage = document.querySelector("#single-image")
    const singleImageWrapper = document.querySelector(".single-image-wrapper")

    singleImageWrapper.addEventListener("mousemove", function (e) {
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop

        singleImage.style.transformOrigin = `${x}px ${y}px`
        singleImage.style.transform = "scale(3)"
    })

    singleImageWrapper.addEventListener("mouseleave", function (e) {
        singleImage.style.transformOrigin = "center"
        singleImage.style.transform = "scale(1)"
    })
}

export default zoomfunc()