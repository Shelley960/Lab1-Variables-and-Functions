let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let submit = document.getElementById("submitButton");

function formatFullName (firstName, lastName) {
  return (lastName + ", " + firstName);
}
let fullName = formatFullName(firstName, lastName);
    console.log(fullName);


// Our button fuctionalities
 
addItemButton.addEventListener("click", function () {
  let firstName = firstName.value;
  let lastName = lastName.value;
 
  if (firstName === "" || lastName === "") {
    alert("Invalid name input.");
    return;
  }
});
