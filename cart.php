<?php
session_start();




unset($_SESSION['user_id']);
unset($_SESSION['username']);


require_once 'save_cart_to_db.php'; 
?>


