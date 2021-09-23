
function validation(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;
	
	error_message.style.padding = "10px";
	
	if(fname.length <3){
		text = "Please Enter Your First Name.";
		error_message.innerHTML = text;
		return false;
	}
	if(lname.length <3){
		text = "Please Enter Your Last Name.";
		error_message.innerHTML = text;
		return false;
	}
	if(email.indexOf("@") == -1 || email.length <7){
		text = "Please Enter a Valid Email.";
		error_message.innerHTML = text;
		return false;
	}
	if(message.length <30){
		text = "Please Enter More Than 40 Characters..";
		error_message.innerHTML = text;
		return false;
	}
	alert("Thanks For Your Feedback.")
	return true;
}
