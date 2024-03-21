// JavaScript code for the loan application form (client-side)

// const name=document.getElementById("name").value
// const phoneNumber=document.getElementById("phone").value
//   const email=document.getElementById("email").value


function updateLoanAmountDisplay() {
  const loanAmountSelect = document.getElementById("loanAmount");
  const calculatedRate = document.getElementById("calculatedRateValue");
  const loanDuration = parseInt(document.getElementById("loanDuration").value);
  const selectedLoanAmountOption = loanAmountSelect.value;
  const loanAmount = Number(selectedLoanAmountOption);
  // Calculate the interest rate based on the loan amount and duration (you can customize this logic)
  let interestRate = 15;
  // Default 15% interest rate // Calculate the total amount to be paid back
  const totalAmount = loanAmount * (1 + interestRate / 100);
  // Update displayed loan amount and calculated rate
  // Display two decimal places
  calculatedRate.textContent = interestRate.toFixed(2) + "%";
  // Display the total amount
  const totalAmountElement = document.getElementById("totalAmount");

    totalAmountElement.textContent = totalAmount.toFixed(2);
  
}
// Add event listeners to the loan amount and loan duration dropdowns
document
  .getElementById("loanAmount")
  .addEventListener("change", updateLoanAmountDisplay);
document
  .getElementById("loanDuration")
  .addEventListener("change", updateLoanAmountDisplay);
// Initialize the display when the page loads window.addEventListener('load', updateLoanAmountDisplay);

//prevent default
let button = document.querySelector("#btn");
let inputs = document.querySelectorAll(".loanform input");
let message = document.querySelector("#paragraph");
let form=document.querySelector('.loanform')
let pop=document.querySelector('.pop')
// let params={
//   name:document.getElementById("name").value,
//   phoneNumber:document.getElementById("phone").value,
//   email:document.getElementById("email").value,
// }

const sendEmail=()=>{
   emailjs.init({
      publicKey: "Hx9EBSjYNLiEZNHSN",
    });
  
    //         // these IDs from the previous steps
    emailjs.sendForm("service_yiwbwuv", "contact-form", form).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
}
button.addEventListener("click", (e) => {
  e.preventDefault();
  let messages = [];
  validateInputs();



  // (function() {
  // https://dashboard.emailjs.com/admin/account
  
});

const validateInputs = () => {
  inputs.forEach(function (input) {
    const label = input.previousElementSibling;

    if (input.value === "" || input.value == null) {
      message.textContent = "please fill all the fields required";
      input.style.border = "2px solid red";
      // massage.style.color='red'
      label.style.color = "red";
    } else {
      message.textContent = "";
      input.style.border = "2px solid black";
      // massage.style.color='red'
      label.style.color = "black";
     
      // pop.style.display='block'

    }
    
    // if (input.style.border = "2px solid red") {
    //   pop.style.display='none'
    // }else{
    //   pop.style.display='block'

    // }
  });
  sendEmail()
};
