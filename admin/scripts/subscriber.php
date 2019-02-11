<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);


function createSubscriber($firstname, $lastname, $email, $country_id)
{

    // Check if user exists
    // check_user_exists_query ="SELECT ";
    // connection to Database
    require_once 'config.php';
    $pdo = connect_to_db();

    // insert subscriber
    $sub_insert = "INSERT INTO `tbl_subscribers` (first_name, last_name, email, created_at) VALUES(:firstname, :lastname, :email, NOW());";

    $insert_user = $pdo->prepare($sub_insert);
    $insert_user->execute(
    array(
      ':firstname' => $firstname,
      ':lastname' => $lastname,
      ':email' => $email
    )
  );

    // get subscriber ID
    $sub_get_id_query = "SELECT sub_id FROM tbl_subscribers WHERE `last_name` = :lastname AND `email` = :email";
    $get_sub_id = $pdo->prepare($sub_get_id_query);
    $get_sub_id->execute(
    array(
      ':lastname' => $lastname,
      ':email' => $email
    )
  );

    $sub_id = $get_sub_id->fetchColumn();

    // insert country id
    $country_insert = "INSERT INTO `tbl_sub_country` (sub_id, country_id) VALUES(:subID, :country_id);";

    $country_id_set = $pdo->prepare($country_insert);
    $country_id_set->execute(
    array(
      ':subID' => $sub_id,
      ':country_id' => $country_id
    )
  );


    if ($country_id_set->rowCount() && $insert_user->rowCount()) {
        $message = "OK";
        return $message;
    } else {
        $message = "Subscription Failed";
        return $message;
    }
}
