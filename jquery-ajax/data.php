<?php
  // maak contact met de mysqli-server
  include("./connect_db.php");

  // Selecteer alle records van een bepaalde category 
  $sql = "SELECT * FROM `pictures` WHERE `category` = '{$_POST["category"]}'";

  // Vuur de query af op de database.
  $result = mysqli_query($conn, $sql);

  // Maak van wat er terugkomt een groot array
  $record = mysqli_fetch_all($result, MYSQLI_ASSOC);

  echo json_encode($record);
?>