<?php
require_once('loader.php');

 

if (isset($_POST['submit'])){
    try{ 
        // parameters
        $username = $_POST['username'];
        $number = $_POST['number'];
        $email = $_POST['email'];
        $password = $_POST['password']; 

        //sql
        $query = "INSERT INTO `users` SET username=?, number=?, email=?, password=?";

        // stmt
        $stmt = $conn->prepare($query);
         
        // bind
        $stmt->bindvalue(1, $username);
        $stmt->bindvalue(2, $number);
        $stmt->bindvalue(3, $email);
        $stmt->bindvalue(4, $password); 

        // exe
        $stmt->execute();

 
        header("location:panel.html"); 
    }catch(PDOException $e){
            echo "Your error message is : ". $e->getMessage();
            header("location:regester.html");           
     }
} 

 
?>