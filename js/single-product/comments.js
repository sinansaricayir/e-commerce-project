
function commentReviewFunc() {
    const commentStars = document.querySelectorAll(".comment-form-rating .star")
    let activeStar = ""
    commentStars.forEach((star) => {
        star.addEventListener("click", (e) => {
            e.preventDefault()
            commentStars.forEach((item) => item.classList.remove("active")
            )
            star.classList.add("active")
            activeStar = document.querySelectorAll(".stars .star.active i")
            localStorage.setItem("stars", JSON.stringify(activeStar.length))
        })
    })
}

const addNewCommentFunc = () => {
    let comments = []
    let commentText = document.getElementById("form-review")
    let commentName = document.getElementById("name")
    let commentButton = document.querySelector(".form-submit input")
    const commentList = document.querySelector(".comment-list")

    let text = ""
    let name = ""

    commentText.addEventListener("input", (e) => {
        text = e.target.value
    })

    commentName.addEventListener("input", (e) => {
        name = e.target.value
    })

    commentButton.addEventListener("click", (e) => {
        e.preventDefault()
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        let stars = []
        let starsNumber = Number(localStorage.getItem("stars"))
        for (let i = 0; i < starsNumber; i++) {
            stars += `
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                    `
        }

        let result = ""
        comments.push({ text: text, name: name })
        comments.forEach((item) => {
            result += `
                        <li class="comment-item">
                            <div class="comment-avatar">
                                <img src="img/avatars/avatar1.jpg" alt="">
                            </div>
                            <div class="comment-text">
                                <ul class="comment-stars">

                                    ${stars}
                                </ul>
                                <div class="comment-meta">
                                    <strong>${item.name}</strong>
                                    <span>-</span>
                                    <time>${day + "/" + month + "/" + year}</time>
                                </div>
                                <div class="comment-description">
                                    <p>
                                        ${item.text}
                                    </p>
                                </div>
                            </div>
                        </li>
                    `
        })


        commentList.innerHTML = result
        commentText.value = ""
        commentName.value = ""

    })


}


function commentsfunc() {
    commentReviewFunc()
    addNewCommentFunc()
}


export default commentsfunc()