<?php

require_once 'scripts/config.php';

// confirm_logged_in();

if (isset($_POST['submit'])) {

  var_dump($_POST);die;

  // Validation.1
    $firstname = htmlspecialchars(trim($_POST['first-name']));
    $lastname = htmlspecialchars(trim($_POST['last-name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $country = htmlspecialchars(trim($_POST['country']));

    // Validation.2
    if (empty($firstname ) || empty($lastname) || empty($email) | empty($country)) {
        $message = "Please fill in the required fields";
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        // validate email
        $message = 'Please use a valid email';
    } else {
        $result = createUser($firstname, $lastname, $password, $email, $country);
        $message = $result;
    }
}
