const loginForm = document.querySelector(".login-div");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const APPEAR_AMN = "hello-appear__Anmation";

function onLoginSubmit(event) {
  event.preventDefault();
  //이름 입력창 사라지기
  loginForm.classList.add("sigin-disappear__Anmation");
  setTimeout(() => {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
  }, 800);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.add(APPEAR_AMN);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// name getting
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  greeting.classList.add(APPEAR_AMN);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
