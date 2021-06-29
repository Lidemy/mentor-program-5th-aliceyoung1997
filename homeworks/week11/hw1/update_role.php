<?php 
session_start();
require_once('conn.php');
require_once('utils.php');
if(!empty($_SESSION['username'])){
  $username= $_SESSION['username'];
  $user = getUserFromUsername($username);
  $admin = $user['role'];
}
if(
  empty($_GET['id']) || empty($_GET['role'])
){
  die('');
}
$username= $_SESSION['username'];
$user = getUserFromUsername($username);
$id = $_GET['id'];
$role = $_GET['role'];
if ($admin !=="admin"){
  header("Location: admin.php");
  exit();
}

$sql= "UPDATE alice_users SET role=? WHERE id=?";

$stmt = $conn->prepare($sql);
$stmt->bind_param('si', $role, $id);


$result = $stmt->execute();
if(!$result){
  die($conn->error);
}

header("Location: admin.php");
exit();
?>

