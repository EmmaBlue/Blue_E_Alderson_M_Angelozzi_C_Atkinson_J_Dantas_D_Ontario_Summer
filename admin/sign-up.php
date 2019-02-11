<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
require_once 'scripts/config.php';

// confirm_logged_in();

    // var_dump($_POST);die;
    $firstname = htmlspecialchars(trim($_POST['first-name']));
    $lastname = htmlspecialchars(trim($_POST['last-name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $country_id = htmlspecialchars(trim($_POST['countries']));
 
    // Validation.2
    if (empty($firstname) || empty($lastname) || empty($email) | empty($country_id)) {
        $message = "Subscription Failed";
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        // validate email
        $message = 'Please use a valid email';
    } else {
        
        $result = createSubscriber($firstname, $lastname, $email, $country_id);
        $message = $result;
    }

    echo json_encode($result);

