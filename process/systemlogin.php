<?php

  if($_SERVER['REQUEST_METHOD']=='POST')  {
  
      
	  
	   $user=filter_input(INPUT_POST, "userlogin");
	  
	   $pass=filter_input(INPUT_POST, "passlogin");
	  
	  
	  
	   require_once '../config/dbconfig.php';
	  
	   $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
        // set the PDO error mode to exception
			  
       $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
 
       $checkuserAccountQuery = "SELECT  id,usertype FROM useraccounts WHERE username=:uname AND pass=:upass";
		
	   $checkuserAccount = $conn->prepare($checkuserAccountQuery);
			
	   $checkuserAccount->bindParam(':uname', $user);
	   $checkuserAccount->bindParam(':upass', $pass);
		
	   $checkuserAccount->execute();

       $checkuserAccount->setFetchMode(PDO::FETCH_ASSOC); 
	   
	    if($checkuserAccount->rowCount()==0 ) {
		
		    
		
		    $json = json_encode(array(
	        
			  'loggedinStatus' =>'doesnotexist'
             
            ));
		
		     echo $json;
   		  
		     exit;
		
	     }  else if ($checkuserAccount->rowCount() == 1)  {
		 
		  
		    session_start();
			
			$row = $checkuserAccount -> fetch ();
			
			$_SESSION['userid'] = $row['id'];
		    $_SESSION['user'] = $user;
            $_SESSION['usertype'] = $row['usertype'];				
									
		     $json = json_encode(array(
	        
			  'loggedinStatus' =>'loggedin',
			  'loggedinUserType' =>$_SESSION['usertype'] 
             
            ));
		
		     echo $json;
   		  
		     exit;
				  
		  
			
		} // end of checkinf for the existence of the user on the system
	 
	  
   }
	
  ?>



