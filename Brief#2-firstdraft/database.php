<?php
    $servername = 'localhost';
    $username = 'root';
    $password = ''; 
    $dbname = 'scrumboard';
    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $connexion = mysqli_connect($servername,$username,$password,$dbname);
    
    $query = "SELECT * FROM tasks";
    $result = mysqli_query($connexion,$query);
    
   

    //CHECK FOR THE STATE OF THE CONNECTION
    if(!$connexion) echo "failed connection";
    else echo "successful connection to the database";

 
?>