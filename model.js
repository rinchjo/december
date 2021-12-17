// export class User {
//   constructor(fullname, email, number, password, avatar) {
//     this.fullname = fullname;
//     this.email = email;
//     this.number = number;
//     this.password = password;
//     this.avatar = avatar;
//     this.id = Math.random().toString().split(".")[1];
//   }
// }
// const fullname = document.querySelector("#fullname");
// const email = document.querySelector("#email");
// const number = document.querySelector("#number");
// const password = document.querySelector("#password");
// const register = document.querySelector("#register");
// const image = document.querySelector("#image");

export class Comment {
  constructor(userId, postId, comment) {
    this.userId = userId;
    this.postId = postId;
    this.comment = comment;
    this.created = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  }
}
