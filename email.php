<?php
// Replace with your actual email address
$to = "rohanguddekoppa@gmail.com";

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? 'Contact Form Submission';
$message = $_POST['message'] ?? '';

// Ensure subject and message are not empty
if (empty($subject) || empty($message)) {
    echo "Please fill in the subject and message fields.";
    exit;
}

// Compose email body
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n\n";
$body .= $message;

// Email headers
$headers = "From: $email\n";
$headers .= "Reply-To: $email\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "Your message has been sent successfully.";
} else {
    echo "An error occurred while sending your message. Please try again later.";
}
?>