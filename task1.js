let fistName = "Shelley";
let lastName = "Lee";

function formatFullName (firstName, lastName) {

    // if the first name and last name is empty, send an alert
    if (firstName.length === 0 || lastName.length === 0){
        alert("Invalid name input.");
        return;
    } else {
    let fullname = lastName.charAt(0).toUpperCase() + lastName.slice(1) + ", " + firstName.charAt(0).toUpperCase() +firstName.slice(1);
    console.log(fullname);
}}

