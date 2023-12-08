<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
    $mobile = $_POST["mobile"];
    $subjectTitle = $_POST["subject"];
	
	// Validate email address
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "Invalid email format";
		exit;
	}
	
	// Serialize form data
	$form_data = serialize(array(
		"name" => $name,
		"email" => $email,
        "subject" => $subjectTitle,
		"message" => $message,
        "mobile" => $mobile,
        
	));
	
	// Store serialized form data in a file
	file_put_contents("form_data.txt", $form_data);
	
	$to = "rennyboyjr@gmail.com";
	$subject = "New Contact Form Submission";
	$body = "Name: $name\nEmail: $email\nSubject: $subjectTitle\nMessage: $message\nMobile: $mobile";
	$headers = "From: $email\n";
	$headers .= "Reply-To: $email\n";
	mail($to, $subject, $body, $headers);
	header("Location: thank-you.html");
	exit;
}
?>