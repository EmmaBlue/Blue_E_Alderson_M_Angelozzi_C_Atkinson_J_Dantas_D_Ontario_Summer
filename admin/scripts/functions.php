<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
require_once 'config.php';

// connection to Database
function connect_to_db()
{
    $database = new Database();
    $conn = $database->connect();
    return $conn;
}

// Redirect to location
function redirect_to($location)
{
    if ($location != null) {
        header('Location:'.$location);
        exit();
    }
}

// get all countries
function get_countries()
{
    $pdo = connect_to_db();

    // create a query
    $country_query = "SELECT * FROM `tbl_country`";
    $get_countries = $pdo->prepare($country_query);
    $get_countries->execute();

    $results = [];

    // add fetched result to array
    while ($row = $get_countries->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    };
    return $results;
}

// confirmation email old user
function old_subscriber_email($lastname, $firstname, $email)
{
    $toEmail = $email;
    $subject = 'Ontario Summer Newsletter';
    $body = '<h2>Welcome Back to Ontario Summer:'. $firstname .' '.$lastname . '</h2>
	<p> Let us know if you have any feedback and be sure to check us out at social media. As you know, with this newsletter you will be up to date with what is going on in Ontario this summer. I hope you enjoy it this time and have fun!</p>
	<h4>Visit us at: </h4><a href="www.ontariosummer.ca">Login Here</a>
				';
    // Email Headers
    $headers = "MIME-Version: 1.0" . "\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";

    mail($toEmail, $subject, $body, $headers);

    if (!mail($toEmail, $subject, $body, $headers)) {
        // Failed
        $msg = 'Your email was not sent';
        echo $msg;
    }
}


// confirmation email to new user
function new_subscriber_email($lastname, $firstname, $email)
{
    $toEmail = $email;
    $subject = 'Ontario Summer Newsletter';
    $body = '<h2>Welcome to Ontario Summer:'. $firstname .' '.$lastname . '</h2>
	<p> Thank you for signing up and keep in touch with what is going on in Ontario this summer. From now on you will get regular updates on Great things to do in Ontario! I hope you enjoy it and have fun!</p>
	<h4>Visit us at: </h4><a href="www.ontariosummer.ca">Login Here</a>
				';
    // Email Headers
    $headers = "MIME-Version: 1.0" . "\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";

    mail($toEmail, $subject, $body, $headers);

    if (!mail($toEmail, $subject, $body, $headers)) {
        // Failed
        $msg = 'Your email was not sent';
        echo $msg;
    }
}



