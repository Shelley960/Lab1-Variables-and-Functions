let age = 70;
let isEmployed = "yes";


function checkEligibility(age, isEmployed) {

    if ((age >= 18) && (isEmployed === "yes")) {
        return "They are eligible."
    } else if ((age >= 18) && (isEmployed === "no")){
        return "They are conditionally eligible.";
    } else {
        return "They are not eligible.";
    }
}

console.log(checkEligibility(age, isEmployed));