function tabsFunc() {
    const btnTab = document.querySelectorAll(".tab-button")
    const content = document.querySelectorAll(".content")
    const tabsWrapper = document.querySelector(".single-tabs")

    tabsWrapper.addEventListener("click", (e) => {
        e.preventDefault()
        const id = e.target.dataset.id
        if (id) {
            btnTab.forEach((button) => button.classList.remove("active"))
            e.target.classList.add("active")
            content.forEach((item)=>item.classList.remove("active"))
            const element = document.getElementById(id)
            element.classList.add("active")
        }
    })
}


export default tabsFunc()