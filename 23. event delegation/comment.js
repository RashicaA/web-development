document.addEventListener('DOMContentLoaded', function () {

    const submitBtn = document.querySelector("#submitComment");
    const commentInput = document.querySelector("#commentInput");
    const commentsContainer = document.querySelector("#commentsContainer");

    submitBtn.addEventListener("click", function () {
        const commentText = commentInput.value.trim();

        if (commentText) {
            addComment(commentText);
            commentInput.value = ''
        }
    })

    commentsContainer.addEventListener('click', function (ev) {
        if (ev.target.classList.contains("replyBtn")) {
            const parentComment = ev.target.parentElement;
            const replyInput = parentComment.querySelector(".replyInput");
            const replyText = replyInput.value.trim();
            if (replyText) {
                addReply(parentComment, replyText);
                replyInput.value = ''
            }
        }
    })

    function addComment(commentText) {
        // push to commentscontainer.
        const commentElement = document.createElement("div");
        // commentElement.classList.add('repliesContainer')
        commentElement.className = 'repliesContainer';
        commentElement.innerHTML = `
            <p>${commentText}</p>
            <button class="replyBtn">Reply</button>
            <textarea class="replyInput" placeholder="Write a reply...">
            </textarea>
        `
        commentsContainer.appendChild(commentElement);
    }

    function addReply(parentComment, replyText) {
        // append new reply tothe parent comment with div, html, etc...
        const replyElement = document.createElement("div");
        replyElement.classList.add("repliesContainer");

        replyElement.innerHTML = `<p>${replyText}</p>`

        const btn = document.createElement("button");
        btn.className = "replyBtn";
        btn.innerText = "Reply";
        replyElement.appendChild(btn);

        const replyInput = document.createElement("textarea");
        replyInput.className = "replyInput";
        replyInput.placeholder = "Write a reply...";
        replyElement.appendChild(replyInput);

        parentComment.appendChild(replyElement);

    }

})