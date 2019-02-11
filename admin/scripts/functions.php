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

// confirmation email to new user
// function user_created_email($fname, $username, $password, $email)
// {
//     $toEmail = $email;
//     $subject = 'Welcome to ' . $fname . ' - User Registration is completed.';
//     $body = '<h2>New User information: </h2>
// 					<h4>Username</h4><p>' . $username . '</p>
// 					<h4>Password</h4><p>' . $password . '</p>
// 					<h4>Login url: </h4><a href="http://localhost/Angelozzi_C_3014_r2/admin/admin_login.php">Login Here</a>
// 				';
//     // Email Headers
//     $headers = "MIME-Version: 1.0" . "\n";
//     $headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";

//     mail($toEmail, $subject, $body, $headers);

//     if (!mail($toEmail, $subject, $body, $headers)) {
//         // Failed
//         $msg = 'Your email was not sent';
//         echo $msg;
//     }
// }

// // create a CRYPTOGRAPHICALLY SECURE PSEUDORANDOM NUMBER GENERATOR
// function random_password($length = 8)
// {
//     $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' .
//       '0123456789`-=~!@#$%^&*()_+,./<>?;:[]{}\|';

//     $str = '';
//     $max = strlen($chars) - 1;

//     for ($i = 0; $i < $length; $i++) {
//         $str .= $chars[random_int(0, $max)];
//     }

//     return $str;
// }

// // update initial password
// function update_init_password($old_password, $new_password, $username)
// {
//     $pdo = connect_to_db();
//     $get_password_query = "SELECT `user_pass` FROM tbl_user WHERE user_name = :username";
//     $get_password = $pdo->prepare($get_password_query);
//     $get_password->execute(
//     array(
//       ':username' => $username
//     )
//   );

//     $init_password = $get_password->fetchColumn();

//     if (password_verify($old_password, $init_password)) {
//         $update_psw_query = 'UPDATE `tbl_user` SET `user_pass` = "' . $new_password . '", `user_last_login` = NOW() WHERE user_name = :username';
//         $set_new_password = $pdo->prepare($update_psw_query);
//         $set_new_password->execute(
//       array(
//         ':username' => $username
//       )
//     );

//         Header('Location: ../admin_login.php?psw_updated');
//     } else {
//         echo "Password has not been updated. Try again.";
//     }
// }

// function reset_wrong_login($username)
// {
//     $pdo = connect_to_db();
//     // update user attempt login to zero
//     $update_user_attempt_login = "UPDATE `tbl_user` SET `user_failed_login_attempts` = 0 WHERE user_name = :username";
//     $user_failed_login = $pdo->prepare($update_user_attempt_login);
//     $user_failed_login->execute(
//     array(
//       ':username' => $username
//     )
//   );
// }
