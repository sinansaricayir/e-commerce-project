function valuesFunc() {
    const values = document.querySelectorAll(".values-list span")
    values.forEach((value) => {
        value.addEventListener("click", () => {
            values.forEach((item) => {
                item.classList.remove("active")
            })
            value.classList.add("active")
        })
    })
}

export default valuesFunc()
