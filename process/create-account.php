<?php

if($_POST['user']=="" OR $_POST['pass']=="" OR $_POST['mobile']==""OR $_POST['location']=="" OR $_POST['email']=="" ) {

   
    echo 'EmptyData';
	
	exit;

} else {


 try{

    $user=filter_input(INPUT_POST, "user");
    $mobile=filter_input(INPUT_POST, "mobile");
    $pass=filter_input(INPUT_POST, "pass");
    $location=filter_input(INPUT_POST, "address");
	$email=filter_input(INPUT_POST, "email");

    require_once '../config/dbconfig.php';
	  
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
    // set the PDO error mode to exception
			  
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
				
    $insertnewuserQuery = "INSERT INTO useraccounts(username,mobile,pass,location,email) VALUES (:songid,:num)";
		
    $insertnewUser = $conn->prepare($insertQuery);
			
    $insertnewUser->bindParam(':user', $user);
    $insertnewUser->bindParam(':mobile',$mobile);	
    $insertnewUser->bindParam(':pass', $pass);
    $insertnewUser->bindParam(':location',$location);	
    $insertnewUser->bindParam(':email',$email);	
				
    $insertnewUser->execute();
	
	$userid=$conn->lastInsertId();
	
	} catch  ( PDOException $e ){
		
	   echo 'noInsertion';	
	   
	   exit;
	   
	   
	
	}
	

}

























?>