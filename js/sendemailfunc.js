	var sender;
	var senderEmail;
	var subject;
	var message;
	function gotosendemail(){
		
		var sender = $("#sender").val();
		var senderEmail = $("#senderEmail").val();
		var subject = $("#subject").val();
		var message = $("#message").val();

		// alert("sendemail.php?sender="+sender+"&senderEmail="+senderEmail+"&subject="+subject+"&message="+message);
		if(senderEmail&&message){
				var xmlhttp;
				if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
				  xmlhttp=new XMLHttpRequest();
				  //alert("request");
				  }
				else{// code for IE6, IE5
				  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				  }
				xmlhttp.onreadystatechange=function(){
				  if (xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						//alert("finished");
						//$("#email-result").html(xmlhttp.responseText);
						var email_result_container = $("#email-result-container");
						email_result_container.classList.toggle('hide-result');
						$("#email-result").html("Message sent successfully, thank you!");
					}
				  }
				xmlhttp.open("GET","sendemail.php?sender="+sender+"&senderEmail="+senderEmail+"&subject="+subject+"&message="+message,true);
				xmlhttp.send();
			}
			



			
	}