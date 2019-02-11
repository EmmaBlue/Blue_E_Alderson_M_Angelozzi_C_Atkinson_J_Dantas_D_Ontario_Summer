<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);


function createSubscriber($firstname, $lastname, $email, $country_id)
{
    require_once 'config.php';
    $pdo = connect_to_db();

    $sub_insert = "INSERT INTO `tbl_subscribers` (first_name, last_name, email, created_at) VALUES(:firstname, :lastname, :email, NOW());";

    $insert_user = $pdo->prepare($sub_insert);
    $insert_user->execute(
    array(
      ':firstname' => $firstname,
      ':lastname' => $lastname,
      ':email' => $email
    )
  );

    $sub_get_id_query = "SELECT sub_id FROM tbl_subscribers WHERE `last_name` = :lastname AND `email` = :email";
    $get_sub_id = $pdo->prepare($sub_get_id_query);
    $get_sub_id->execute(
    array(
      ':lastname' => $lastname,
      ':email' => $email
    )
  );

    $sub_id = $get_sub_id->fetchColumn();

    $country_insert = "INSERT INTO `tbl_sub_country` (sub_id, country_id) VALUES(:subID, :country_id);";

    $country_id_set = $pdo->prepare($country_insert);
    $country_id_set->execute(
    array(
      ':subID' => $sub_id,
      ':country_id' => $country_id
    )
  );

    if ($insert_user->rowCount() > 0) {
        // redirect_to('index.php');
        // Header('Location: index.php?success= '. $random_not_hashed_password);
        echo "niceeeeeee";
    } else {
        $message = "Insert data failed!";
        return $message;
    }
}
