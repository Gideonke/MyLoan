// JavaScript code for the loan application form (client-side)
function updateLoanAmountDisplay() {
  console.log("Function called");
  const loanAmountSelect = document.getElementById("loanAmount");
  const calculatedRate = document.getElementById("calculatedRateValue");
  const loanDuration = parseInt(document.getElementById("loanDuration").value);
  console.log("loanAmountSelect:", loanAmountSelect);
  console.log("calculatedRate:", calculatedRate);
  console.log("loanDuration:", loanDuration);
  // Get the selected loan amount option value
  const selectedLoanAmountOption = loanAmountSelect.value;
  const loanAmount = Number(selectedLoanAmountOption);
  console.log("selectedLoanAmountOption:", selectedLoanAmountOption);
  console.log("loanAmount:", loanAmount);
  // Calculate the interest rate based on the loan amount and duration (you can customize this logic)
  let interestRate = 15;
  // Default 15% interest rate // Calculate the total amount to be paid back
  const totalAmount = loanAmount * (1 + interestRate / 100);
  // Update displayed loan amount and calculated rate
  loanAmountSelect.value = loanAmount.toFixed(2);
  // Display two decimal places
  calculatedRate.textContent = interestRate.toFixed(2) + "%";
  // Display the total amount
  const totalAmountElement = document.getElementById("totalAmount");
  if (totalAmountElement) {
    totalAmountElement.textContent = totalAmount.toFixed(2);
  }
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
    }
  });

  sendEmail()
};
