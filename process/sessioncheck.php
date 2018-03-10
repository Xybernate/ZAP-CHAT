<?php 
 
 session_start();

  if (empty($_SESSION['userid'])){
      
	
   	  $json = json_encode(array(
	        
	     'loggedinStatus' =>'notloggedin'
	    
      ));
		
       echo $json;	  
	  
	   exit();
	   
  
  } else {
      
	  $json = json_encode(array(
	        
	    'loggedinStatus' =>'loggedin',
	    'loggedinUserType' =>$_SESSION['usertype'] 
             
      ));
		
      echo $json;
   	
	  exit();
     
  }
  
?>