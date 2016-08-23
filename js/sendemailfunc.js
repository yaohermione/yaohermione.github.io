	var sender;
	var senderEmail;
	var subject;
	var message;
	var email_result_container;

	function gotosendemail(){
		$("#senderEmail").removeClass('empty-input');
		$("#message").removeClass('empty-input');
	    

		var sender = $("#sender").val();
		var senderEmail = $("#senderEmail").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		var email_result_container = document.getElementById("email-result-container");
	    email_result_container.classList.add('hide-result');
	 //alert("sendemail.php?sender="+sender+"&senderEmail="+senderEmail+"&subject="+subject+"&message="+message);
		if(senderEmail&&message){
			
				if(senderEmail.indexOf("@") !== -1){
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
								email_result_container.classList.remove('hide-result');
								$("#email-result").html("<img id=\"tick\" src=\"img/tick.svg\"><span id=\"sent-text\">Sent</span>!");
								
							}
							else{
								email_result_container.classList.remove('hide-result');
								$("#email-result").html("<div class=\"uil-ring-css\"><div></div></div>");
							}
						  }
						xmlhttp.open("GET","sendemail.php?sender="+sender+"&senderEmail="+senderEmail+"&subject="+subject+"&message="+message,true);
						xmlhttp.send();
						}

						else if(senderEmail.indexOf("@") == -1){ 
							$("#senderEmail").addClass('empty-input');
						}

			}
			else if(senderEmail==""&message==""){
		
					$("#senderEmail").addClass('empty-input');
					$("#message").addClass('empty-input');
			}
			else if(senderEmail==""){
				
				$("#senderEmail").addClass('empty-input');
				
			}
			else if(message==""){
				 if(senderEmail.indexOf("@") == -1){ 
							$("#senderEmail").addClass('empty-input');
						}
				$("#message").addClass('empty-input');
				
			}
			



			
	}