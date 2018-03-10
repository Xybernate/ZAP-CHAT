<?php

if($_POST['suggestedName']=="" ) {

   // check for errors
   
   
    echo 'EmptyData';
	
	exit;

} else {


   // check for html tags to prevent cross site scripting 
   
 
    $user=filter_input(INPUT_POST, "suggestedName");
   

    require_once '../config/dbconfig.php';
	  
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
    // set the PDO error mode to exception
			  
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
				
    $checkuserAvailabiltyQuery = "SELECT id FROM useraccounts WHERE username=:user";
		
    $checkuserAvailabilty= $conn->prepare($checkuserAvailabiltyQuery);
			
    $checkuserAvailabilty->bindParam(':user', $user);
	
	$checkuserAvailabilty->setFetchMode(PDO::FETCH_ASSOC); 
   
    $checkuserAvailabilty->execute();
		
	if($checkuserAvailabilty->rowCount()===1 ) {
		
		 $json = json_encode(array(
	        
			'Status' =>'notavailable'
			
        ));
		
		echo $json;

	    exit;
		
	
	} else if ( $checkuserAvailabilty->rowCount()===0 ){
	
	    $json = json_encode(array(
	        
			'Status' =>'available'
			
        ));
		
		echo $json;

	    exit;
	
	
	}	
	
  }
?>