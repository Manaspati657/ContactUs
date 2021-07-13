const firstName = document.forms["reg-form"]["first-name"];
const lastName = document.forms["reg-form"]["last-name"];
const email = document.forms["reg-form"]["mail"];
const phoneNo = document.forms["reg-form"]["phone"];
function validateForm() {
  if (firstName.value== "") {
    alert("First Name must be filled out")
    firstName.focus()
    return false
  }
   if(lastName.value==""){
  	alert("Last Name must be filled out")
  	lastName.focus()
  	return false
  }
  if(email.value==""){
  	alert("mail id must be filled out")
  	email.focus()
  	return false
  }
  if(phoneNo.value==""){
  	alert("phone No must be filled out")
  	phoneNo.focus()
  	return false
  }
  return true
}