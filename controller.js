export function burtgeh(e, users, User, obj) {
    e.preventDefault();

    const user = new User(obj.fullname, obj.email, obj.number, obj.password, obj.image);

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

export function writeComment(currentUser, comment, Comment, currentPost, updateUi, comments) {
    if (!currentUser) {
        alert('Сэтгэгдэл үлдээхийн тулд нэвтрэх шаардлагатай...')
    } else {
        if (!comment.value) {
            alert('Хоосон байна.')
        } else {
            const setgegdel = new Comment(currentUser.id, currentPost.id, comment.value);

            comments.push(setgegdel);

            localStorage.setItem('comments', JSON.stringify(comments));

            comment.value = '';
            updateUi()
        }
    }
}
// export function resetForm(comment1) {
//     comment1.value = "";
// }

export function logout1() {
    localStorage.removeItem("currentUser");
    location.href = "./login.html"
}

export function profile(Post, title, body, currentUser, posts, updateUi) {

    if (title.value.trim() !== "" && body.value.trim() !== "") {
        const article = new Post(
            title.value,
            body.value,
            currentUser.id
        );
        posts.push(article);
        localStorage.setItem("posts", JSON.stringify(posts));
        // resetForm();
        updateUi();
    } else {
        alert("Өгөгдөл дутуу байна...");
    }
}

