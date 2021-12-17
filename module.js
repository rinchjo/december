// import { burtgeh } from "./controller.js";
// import { User } from "./model.js";

// const fullname = document.querySelector("#fullname");
// const email = document.querySelector("#email");
// const number = document.querySelector("#number");
// const password = document.querySelector("#password");
// const register = document.querySelector("#register");
// const image = document.querySelector("#image");

// var users;

// if (localStorage["users"]) {
//   users = JSON.parse(localStorage["users"]);
// } else {
//   users = [];
// }

// register.addEventListener("click", () => {
//   burtgeh();
//   location.href = "./login.html";
// });
import { val } from "./controller.js";
import { resetForm } from "./controller.js";
import { updateUi } from "./controller.js";
import { Comment } from "./model.js";
const newsContainer = document.querySelector("#news");
const btn = document.querySelector("#btn");
const comment1 = document.querySelector("#comment1");
let currentPost, users;
let comments = [];

window.addEventListener("load", () => {
  if (localStorage["users"]) {
    users = JSON.parse(localStorage["users"]);
  } else {
    users = [];
  }
  if (localStorage["comments"]) {
    comments = JSON.parse(localStorage["comments"]);
  } else {
    comments = [];
  }
  if (localStorage["currentPost"]) {
    currentPost = JSON.parse(localStorage["currentPost"]);
  } else {
    currentPost = null;
  }
  updateUi();
});
btn.addEventListener("click", () => {
  val();
  resetForm();
  updateUi();
});
