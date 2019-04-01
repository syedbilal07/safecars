// SCRIPT FOR FORGOT PASSWORD PAGE
  /*jshint unused:false*/
function check_password_fields()
		{ "use strict";
		var form1 = document.getElementById('email').value;

		if(form1===null || form1===""){
		  alert("Please Fill All Fields!");
		}else{
		  alert("Please Check Your Mailbox For Resetting The Password!");
		}
		}
// SCRIPT FOR EMAIL US PAGE

function check_email_fields()
		{ "use strict";
		var form1 = document.getElementById('firstname').value;
		var form2 = document.getElementById('lastname').value;
		var form3 = document.getElementById('email').value;
		var form4 = document.getElementById('order').value;
		var form5 = document.getElementById('phone').value;
		var form6 = document.getElementById('question').value;

		if(form1===null || form1==="", form2===null || form2==="", form3===null || form3==="", form4===null || form4==="", form5===null || form5==="", form6===null || form6===""){
		  alert("Please Fill All Fields!");
		}else{
		  var link = 'mailto:safe-carz@gmail.com?subject=Message from '+
             document.getElementById('email').value+'&body='+
			 document.getElementById('email').value;
			window.location.href = link;
		}
		}

// SCRIPT FOR CHAT WITH US PAGE
	function check_chat_fields()
	{ "use strict";
	var form1 = document.getElementById('name').value;
	var form2 = document.getElementById('email').value;
	var form3 = document.getElementById('order').value;
	var form4 = document.getElementById('question').value;
	if(form1===null || form1==="", form2===null || form2==="", form3===null || form3==="", form4===null || form4===""){
		alert("Please Fill All Fields!");
	}else{
		alert("Please Wait While We Process Your Email For Verification!");
	}
	}
// SCRIPT FOR SIGN IN PAGE
function check_sign_in_fields()
		{ "use strict";
		var form1 = document.getElementById('email').value;
		var form2 = document.getElementById('password').value;

		if(form1===null || form1==="", form2===null || form2===""){
		  alert("Please Fill All Fields!");
		}else{
		  alert("You Are Now Signed In!");
		}
		}
// SCRIPT FOR SIGN UP PAGE
function check_sign_up_fields()
		{ "use strict";
		var form1 = document.getElementById('email').value;
		var form2 = document.getElementById('password').value;
		var form3 = document.getElementById('pass_word').value;

		if(form1===null || form1==="", form2===null || form2==="", form3===null || form3===""){
		  alert("Please Fill All Fields!");
		}else{
		  alert("You Are Now Registered As A New User!");
		}
		}