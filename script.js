// Progression 1 
// Check username
// create a function called as checkUserName()
function checkUserName(text1){
// username should not be empty
var username=$ {text1}
if( username.value == !"" && username >=8 && user< 15 ) {
    
    return true; 
}
else{
    return false;
}
}
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2 
// Check mail
// create a function called as checkEmail()
function checkEmail() {
    var text2 = document.getElementById('emailtext').value;
    if (!text2.includes('@', 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(text2))
        document.getElementById("email_error").innerHTML += "<p>Wrong email id</p>";

}
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
function checkEmail() {
    var text2 = document.getElementById('emailtext').value;
    if (!text2.includes('@', 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(text2))
        document.getElementById("email_error").innerHTML += "<p>Wrong email id</p>";

}
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
