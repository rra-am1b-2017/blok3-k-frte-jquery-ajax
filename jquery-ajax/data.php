<?php
  include("./connect_db.php");

  $sql = "SELECT * FROM `pictures` WHERE `category` = '{$_POST["category"]}'";

  echo $sql;

?>