// ? değişken atayarak ta function açabiliriz
// ? star lara active class atıyoruz

const commentsReviewsFunc = function () {
    const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star");
    // yorum yazmadan evvel star (yıldızlara) a active class atıyoruz
    commentStarsDOM.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            // yorum yazmadan evvel star a active class siliyoruz
            commentStarsDOM.forEach((star) => star.classList.remove("active"));
            // yorum yazmadan evvel star a active class atıyoruz
            item.classList.add("active");
        });
        // console.log(item);

    });
}

// function bu şekilde de yazılır

const addNewCommentFunc = () => {
    let comments = [];
    let commentTextDOM = document.getElementById("comment-text");
    let commentNameDOM = document.getElementById("comment-name");
    let commentBtnDOM = document.querySelector(".form-submit input");
    let commentListDOM = document.querySelector(".comment-list");

    let commentText = "";
    let commentName = "";
    //? textarea ya yazdğımız yorumu alıcağız
    commentTextDOM.addEventListener("input", function (e) {
        commentText = e.target.value;

    });

    //? input içeriğini alıyoruz 
     commentNameDOM.addEventListener("input", function (e) {
     commentName = e.target.value;

    });

    // fonksiyonu dışarıda oluşturabilirz addEventListener için
    function addComment(e) {
        e.preventDefault();
        comments.push({ text: commentText, author: commentName });
        let result = "";
        comments.forEach((item) => {
            result += `
                <li class="comment-item">
                    <div class="comment-avatar">
                    <img src="img/avatars/avatar1.jpg" alt="">
                    </div>
                <div class="comment-text">
                <ul class="comment-star">
                    <li>
                    <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i class="bi bi-star-fill"></i>
                    </li>
                </ul>
                    <div class="comment-meta">
                    <strong>${item.author}</strong>
                    <span>-</span>
                    <time>April 23, 2022</time>
                    </div>
                    <div class="comment-description">
                    <p>${item.text} </p>
                    </div>
                    </div>
                </li>
            `;
            // console.log(result);
        });

        commentListDOM.innerHTML = result;
        commentTextDOM.value = "";
       commentNameDOM.value  = "";
    }

    commentBtnDOM.addEventListener("click", addComment);

    // localStorage.setItem("comment",JSON.stringify(commentTextDOM));
    // console.log(commentTextDOM);
    // console.log(commentNameDOM);
    // console.log(commentBtnDOM);
}


function commentsFunc() {
    commentsReviewsFunc();
    addNewCommentFunc();


}


export default commentsFunc();