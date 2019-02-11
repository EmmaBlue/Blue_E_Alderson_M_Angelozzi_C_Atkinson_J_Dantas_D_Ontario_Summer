<?php 

ini_set(‘display_errors’, ‘On’);
error_reporting(E_ALL);

require_once 'config.php';

$data = get_countries();
  
echo json_encode($data);
