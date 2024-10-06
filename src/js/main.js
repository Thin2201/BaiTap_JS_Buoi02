function show() {
  let x = document.querySelector("#inputPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
