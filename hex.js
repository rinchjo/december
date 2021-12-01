const input = document.querySelector("#input");
const check = document.querySelector("#check");

input.addEventListener("input", () => {
  const RegExp = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (RegExp.test(input.value)) {
    document.body.style.backgroundColor = input.value;
    check.classList.remove("text-gray-300")
    check.classList.add("text-green-800")
    check.classList.add("font-bold")

  }
});
