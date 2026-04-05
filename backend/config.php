<?php
// Database connection configuration
$host = 'localhost';
$username = 'root';
$password = ''; // your password
$database = 'coffee_shop';

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>