const inputs = document.querySelectorAll("#loginform input");
const errorMessage = document.querySelector(".errorText");
let details = JSON.parse(localStorage.getItem("users"));
console.log(details);

document.querySelector("#button").addEventListener("click", (e) => {
  e.preventDefault();
  let errorMessage = [];
  console.log(inputs);
  // inputs.forEach(input=>{
  //   console.log(input)
  // })

  validateInputs();
  handleLogin();
});
const validateInputs = () => {
  
  inputs.forEach(function (input) {
    console.log(input);

    if (input.value === "" || input.value == null) {
      errorMessage.textContent = "Kindly fill all fields";
      input.style.border = "3px solid red";

      errorMessage.style.color = "red";
    }
    else{
      errorMessage.textContent = "";
      input.style.border = "2px solid $cyan-blue";

      errorMessage.style.color = "";
    }
  });
  details.forEach(function (input) {});
};

const handleLogin = () => {
  let username = document.querySelector("input[name=username]");
  let password = document.querySelector("input[name=password]");

  console.log(username);
  console.log(password);

  details.forEach((detail) => {

    if (
      detail.username === username.value &&
      detail.password === password.value
    
    ) {
     
      window.location.replace('http://127.0.0.1:5500/dashboard.html')
      return;
      
    } else {
      errorMessage.textContent="Invalid Credentials"
      errorMessage.style.color = "red";
      return;
    }
  });
};
