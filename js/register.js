const inputs = document.querySelectorAll("#form input");

const message = document.querySelector("#paragraph");

console.log(inputs);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  validateInputs();
});

const validateInputs = () => {
  const user = {};
  let users = [];
  let allValidated = false;
  inputs.forEach(function (input) {
    const label = input.previousElementSibling;
    if (input.value === "" || input.value == null) {
      message.textContent = "Kindly fill all fields";
      input.style.border = "1px solid red";
      console.log(input.name);
      label.style.color = "red";

      return;
    } else if (
      document.querySelector("input[name=password]").value !==
      document.querySelector("input[name=confirm]").value
    ) {
      message.textContent = "Kindly check password and try again";
      document.querySelector("input[name=password]").style.border =
        "1px solid red";
      document.querySelector("input[name=confirm]").style.border =
        "1px solid red";
      return;
    } else if (localStorage.getItem("users") !== null) {
      JSON.parse(localStorage.getItem("users")).forEach((el) => {
        if (el["username"] === input.value) {
          message.textContent = "Username already exists";
        }
      });
    } else {
      if (input.name !== "confirm") {
        user[`${input.name}`] = input.value;
      }

      message.textContent = "";
      input.style.border = "none";
      label.style.color = "black";
    }
  });

  if (message.textContent.toLowerCase() === "") {
    allValidated = true;
  }

  // Save user to Local Storage

  if (allValidated === true) {
    if (localStorage.getItem("users") === null) {
      //create user
      // if(input.name===input.value){
      //   message.textContent='Username already exist'
      // }
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }

    window.location.href = "http://127.0.0.1:5500/login.html";
  }

  // console.log(user);
};
