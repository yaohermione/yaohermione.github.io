	var sender;
	var senderEmail;
	var subject;
	var message;
	function gotosendemail(){
		
		var sender = $("#sender").val();
		var senderEmail = $("#senderEmail").val();
		var subject = $("#subject").val();
		var message = $("#message").val();

	 //alert("sendemail.php?sender="+sender+"&senderEmail="+senderEmail+"&subject="+subject+"&message="+message);
		if(senderEmail&&message){
			alert("both not null");
				var xmlhttp;
				if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
				  xmlhttp=new XMLHttpRequest();
				  //alert("request");
				  }
				else{// code for IE6, IE5
				  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				  }
				xmlhttp.onreadystatechange=function(){
				  //if (xmlhttp.readyState==4 && xmlhttp.status==200)
				  	if(0)
					{
						//alert("finished");
						//$("#email-result").html(xmlhttp.responseText);
						var email_result_container = document.getElementById("email-result-container");
						email_result_container.classList.remove('hide-result');
						$("#email-result").html("Sent successfully, thanks!");
						senderEmail.classList.remove('wong-input');
						message.classList.remove('wong-input');
					}
					else if(1){
						$("#email-result").html("<div class='uil-ring-css' style='transform:scale(0.21);'></div>");
					}
				  }
				xmlhttp.open("GET","sendemail.php?sender="+sender+"&senderEmail="+senderEmail+"&subject="+subject+"&message="+message,true);
				xmlhttp.send();
			}
			else if(senderEmail==""&message==""){
				alert("senderEmail="+senderEmail+"message="+message);
					$("#senderEmail").addClass('wong-input');
					$("#message").addClass('wong-input');
			}
			else if(senderEmail==""){
				alert("senderEmail="+senderEmail);
					// senderEmail.classList.add('wong-input');
					$("#senderEmail").addClass('wong-input');
			}
			else if(message==""){
				alert("message="+message);
					// message.classList.add('wong-input');
					$("#message").addClass('wong-input');
			}
			



			
	}