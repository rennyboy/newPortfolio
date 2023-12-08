<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$mobile = $_POST["mobile"];
	$subjectTitle = $_POST["subjectTitle"];
	$message = $_POST["message"];
	
	// Validate email address
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "Invalid email format";
		exit;
	}
	
	// Serialize form data
	$form_data = serialize(array(
		"name" => $name,
		"email" => $email,
		"mobile" => $mobile,
		"subjectTitle" => $subjectTitle,
		"message" => $message
	));
	
	// Store serialized form data in a file
	file_put_contents("form_data.txt", $form_data);
	
	$to = "youremail@example.com";
	$subject = "New Contact Form Submission";
	$body = "Name: $name\nEmail: $email\nMobile Phone: $mobile\nSubject: $subjectTitle\nMessage: $message";
	$headers = "From: $email\n";
	$headers .= "Reply-To: $email\n";
	mail($to, $subject, $body, $headers);
	header("Location: thank-you.html");
	exit;
}
?>