<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);


function createUser($firstname, $lastname, $password, $email, $country)
{
    require_once 'config.php';
    $pdo = connect_to_db();
  //   $query = "INSERT INTO tbl_user (`user_fname`, `user_name`, `user_pass`, `user_email`) VALUES (:fname, :username, :password, :email)";

  //   $insert_user = $pdo->prepare($query);
  //   $insert_user->execute(
  //   array(
  //     ':fname' => $fname,
  //     ':username' => $username,
  //     ':password' => $password,
  //     ':email' => $email,
  //   )
  // );

  //   // send confirmation email to new user
  //   user_created_email($fname, $username, $password, $email);

  //   if ($insert_user->rowCount() > 0) {
  //       // redirect_to('index.php');
  //       Header('Location: index.php?success= '. $random_not_hashed_password);
  //   } else {
  //       $message = "Insert data failed!";
  //       return $message;
  //   }
}