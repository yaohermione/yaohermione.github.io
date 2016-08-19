<?php


	require_once('PHPMailer-master/PHPMailerAutoload.php');

	$mail = new PHPMailer;
   
    $subject = @$_GET["subject"];
    $sender = @$_GET["sender"];
    $senderEmail = @$_GET["senderEmail"];
    $message = @$_GET["message"];

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	//$mail->isSMTP();                                      // Set mailer to use SMTP
	//$mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
	//$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'user@example.com';                 // SMTP username
	$mail->Password = 'secret';                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;                                    // TCP port to connect to

	$mail->setFrom('from@example.com', 'Mailer');
	$mail->addAddress('yaohermione@gmail.com', 'Hermione');     // Add a recipient              
	$mail->addReplyTo($senderEmail, $sender);
	// $mail->addCC('cc@example.com');
	// $mail->addBCC('bcc@example.com');

	// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = $subject;
	$mail->Body    = $message;
	$mail->AltBody = $message;

	if(!$mail->send()) {
	    echo '<p>Message could not be sent.</p>';
	    echo '<p>Mailer Error: </p>' . $mail->ErrorInfo;
	} else {
	    echo '<p>Message has been sent, thanks!</p>';
	}




?>