 <?php

if($_POST['firstname']=="" OR $_POST['lastname']=="" OR $_POST['phone']==""OR $_POST['email']=="" OR $_POST['user']=="" OR $_POST['pass']==""  OR $_POST['accounttype']==""  ) {


    




}  else {

    
	 
	 
	 $image_file = $_FILES['profile_pic'];
	 
	// File properties
	//image
			  
	$image_file_name = $image_file['name'];
	$image_file_temp = $image_file['tmp_name'];
	$image_file_size = $image_file['size'];
	$image_file_error = $image_file['error'];
	 
	$image_file_destination = '../uploads/images/'.$image_file_name;
	
	if(move_uploaded_file($image_file_temp,$image_file_destination))
	{
	
	  // Insert into the database after successful upload of the database
	  
	   try{
	   
	       require_once '../config/dbconfig.php';
	  
           $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
           // set the PDO error mode to exception
			  
           $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

             $firstname=filter_input(INPUT_POST, "firstname");
             $lastname=filter_input(INPUT_POST, "lastname");
             $mobile=filter_input(INPUT_POST, "phone");
             $email=filter_input(INPUT_POST, "email");
	         $user=filter_input(INPUT_POST, "user");
	         $pass=filter_input(INPUT_POST, "pass");
	         $accounttype=filter_input(INPUT_POST, "accounttype");		   
				
            $insertnewuserQuery = "INSERT INTO useraccounts(username,mobile,pass,location,email,usertype) VALUES (:user,:mobile,:pass,:location,:email,:usertype)";
		
		    $insertnewUser = $conn->prepare($insertnewuserQuery);
			
            $insertnewUser->bindParam(':user', $user);
            $insertnewUser->bindParam(':mobile',$mobile);	
            $insertnewUser->bindParam(':pass', $pass);
            $insertnewUser->bindParam(':location',$image_file_destination);	
            $insertnewUser->bindParam(':email',$email);	
	        $insertnewUser->bindParam(':usertype',$accounttype);	
				
            $insertnewUser->execute();
		
	        $userid=$conn->lastInsertId();
	
	        
	        if($userid > 0){
			
			 session_start();
			  
			 $_SESSION['userid'] = $userid;
		     $_SESSION['user'] = $user;
			 $_SESSION['usertype'] = $accounttype;
	    		
	         $json = json_encode(array(
	        
			    'statusResult' =>'AccountCreated',
				'loggedinStatus' =>'loggedin',
	            'loggedinUserType' =>$_SESSION['usertype'] 
				
             ));
		
		     echo $json;

	        exit;
	
	       } else {
	
	         $json = json_encode(array(
	        
		        'statusResult' =>'AccountNotCreated'
			
             ));
		
		     echo $json;

	         exit;
	
	       }
	
	   
	   
	   
	   }catch (PDOException $e){
	   	   
		   
		   
	      $json = json_encode(array(
	        
			'statusResult' =>'AccountNotCreated',
			'ExceptionDetails'=>$e 
           
          ));
		
		  echo $json;

	     exit;
	   
	   }
	  
	
	
	} else {
	
	
	   $json = json_encode(array(
	
	       'statusResult' => 'AccountNotCreated'
       
       ));

      echo $json;
	  
	  exit;	
	
	}



}

?>