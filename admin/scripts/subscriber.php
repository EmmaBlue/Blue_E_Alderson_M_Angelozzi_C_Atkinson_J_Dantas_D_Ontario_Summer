<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);


function createSubscriber($firstname, $lastname, $email, $country_id)
{

   
    // connection to Database
    require_once 'config.php';
    $pdo = connect_to_db();
    
   
    $check_sub_exists_query ="SELECT `email` FROM `tbl_subscribers` WHERE `email` = :email";
    $check_sub = $pdo->prepare($check_sub_exists_query);
    $check_sub->execute(
       array(
         ":email" => $email
       )
       );
       
    if ($check_sub->fetchColumn()) {
        old_subscriber_email($lastname, $firstname, $email);
        // Check if user exists
        $check_id_query ="SELECT `sub_id` FROM `tbl_subscribers` WHERE `email` = :email";
        $get_sub_id = $pdo->prepare($check_id_query);
        $get_sub_id->execute(
          array(
            ":email" => $email
          )
          );
        $sub_id = $get_sub_id->fetchColumn();
         
        //UPDATE SUB
        $update_sub_query = "UPDATE tbl_subscribers SET `first_name` = :firstname, `last_name` = :lastname, `email` = :email, `last_update_date` = NOW() WHERE `sub_id` = :id";
        $update_sub = $pdo->prepare($update_sub_query);
        $update_sub->execute(
           array(
             ":firstname" => $firstname,
             ":lastname" => $lastname,
             ":email" => $email,
             ":id" => $sub_id
           )
           );
        $update_country_query = "UPDATE tbl_sub_country SET `country_id` = :country_id WHERE `sub_id` = :id ";
        $update_country = $pdo->prepare($update_country_query);
        $update_country->execute(
             array(
               ":country_id" => $country_id,
               ":id" => $sub_id
             )
             );
    } else {
        new_subscriber_email($lastname, $firstname, $email);
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
            subscribed_to_list($firstname, $lastname, $email);
            return $message;
        } else {
            $message = "Subscription Failed";
            return $message;
        }
    }
}
