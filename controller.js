// export function burtgeh(e, users, User, obj) {
//   e.preventDefault();

//   const user = new User(
//     obj.fullname,
//     obj.email,
//     obj.number,
//     obj.password,
//     obj.image
//   );

//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));
// }
const comment1 = document.querySelector("#comment1");

import { Comment } from "./model";
export function val() {
  if (comment1.value.trim() !== "") {
    let newComment = new Comment(users.id, currentPost.id, comment1.value);
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    resetForm();
  }
}
export function resetForm() {
  comment1.value = "";
}

export function updateUi() {
  const postOwner = users.find((user) => user.id === currentPost.userId);
  newsContainer.insertAdjacentHTML(
    "afterbegin",
    `
          <div class="mx-auto w-3/5 bg-white p-4 rounded-xl shadow-xl">
              <div class="flex gap-3 mb-4 items-center">
                  <div class="h-10 w-10 bg-black overflow-hidden rounded-full">
                      <img class="w-full h-full object-cover" src=${postOwner.avatar} alt="">
                  </div>
                  <h1 class="font-bold text-lg">${postOwner.fullname}</h1>
              </div>
              <div class="w-full flex-col flex my-1">
                  <h1 id="article" class="font-bold">${currentPost.title}</h1>
              </div>
              <p class='text-justify'>
                  ${currentPost.body}
              </p>
              <p class="text-xs text-right text-gray-500">${currentPost.created.date}, ${currentPost.created.time}</p>
          </div>
      `
  );
}
