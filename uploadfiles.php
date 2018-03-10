<?php

session_start();

	
 
  if(isset($_FILES['image_file']) && isset($_FILES['song_file']))  {
  
     $image_file = $_FILES['image_file'];
	 $song_file = $_FILES['song_file'];  
	 
	 // File properties
			  //image
			  
	$image_file_name = $image_file['name'
	];
	$image_file_temp = $image_file['tmp_name'];
	$image_file_size = $image_file['size'];
	$image_file_error = $image_file['error'];
	
	//song
	
	$song_file_name = $song_file['name'];
	$song_file_temp = $song_file['tmp_name'];
	$song_file_size = $song_file['size'];
	$song_file_error = $song_file['error'];
	
	//Work out the file extension
	//image
	$image_file_ext = explode('.', $image_file_name);
	$image_file_ext = strtolower(end($image_file_ext));
	$image_allowed = array('jpg','png','jpeg');
	
	$song=filter_input(INPUT_POST, "title");	
	
	$song_file_ext = explode('.', $song_file_name);
	$song_file_ext = strtolower(end($song_file_ext));
	
	$audio_allowed = array('mp3', 'wav');	

    $image_file_destination = 'uploads/images/'.$image_file_name;					   
			
	$song_file_destination = 'uploads/audio/'.$song.'.'.$song_file_ext;

	//check if the file exists
	
	 if(file_exists($song_file_destination)){

	    $json = json_encode(array(
	   
            'status' => 'notsuccessfull',
            'responseResult' => 'songexistsalready'
        ));
		
		echo $json;
	  
	    exit;
	
       }	else {
	
	   // check if the image and song is what is permissible
	
	   if(in_array($image_file_ext, $image_allowed) && in_array($song_file_ext,$audio_allowed))
	   {
	      // check if the image or song has errors 
	   
	   if($image_file_error === 0 && $song_file_error === 0){
	   
	        // post the song
			
			// check if the directory exists  'uploads'
			
						
		    $image_file_destination = 'uploads/images/'.$image_file_name;					   
			
		
			
			if(move_uploaded_file($image_file_temp, $image_file_destination) && move_uploaded_file($song_file_temp, $song_file_destination))
			{
			
			    $imagepath = $image_file_destination;
			    $songpath = $song_file_destination;
				
                			
				$artist=filter_input(INPUT_POST, "artist");
		        $album=filter_input(INPUT_POST, "album");
				
			  
				require_once 'config/dbconfig.php';			
				
	            $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
				$audio='Audio';
			  
                // set the PDO error mode to exception
			  
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		        $insertquery = "INSERT INTO musicfiles(songname,album,image_url,song_url,filetype,artist) VALUES (:song,:album,:imagepath,:songpath,:filetype,:artist)";
		
		        $insertmusic = $conn->prepare($insertquery);
			
			    $insertmusic->bindParam(':song', $song);
		        $insertmusic->bindParam(':album', $album);				
		        $insertmusic->bindParam(':imagepath', $imagepath);
				$insertmusic->bindParam(':songpath',$songpath);
		        $insertmusic->bindParam(':filetype',$audio);
				$insertmusic->bindParam(':artist',$artist);
							
				$insertmusic->execute();
							
				$musicid=$conn->lastInsertId();
						
				if($musicid > 0){
							
				 
				  $json = json_encode(array(
                    'status' => 'successfull',
                    'responseResult' => 'uploadsuccessful'
                  ));

                  echo $json;
							  
				  exit;
							  
							  
							  
			    }  else {
							
				  unlink($image_file_destination);
				  unlink($song_file_destination);
				 
				  $json = json_encode(array(
	   
                    'status' => 'notsuccessfull',
                    'responseResult' => 'uploadnotsuccessful'
				 
                  ));
		
	             echo $json;
				  
				 exit;
				 
				 
				}
					   
			
		    } else {
			
			  $json = json_encode(array(
	   
                 'status' => 'notsuccessfull',
                 'responseResult' => 'uploadnotsuccessful'
				 
               ));
		
	           echo $json;
 
			   exit;

            }			
	   
	    }  else {
		
		 
		  
		   if($image_file_error != 0 && $song_file_error  ===   0){
	   
	          // check if its the image with errors
			  
			   $json = json_encode(array(
	   
                 'status' => 'notsuccessfull',
                 'responseResult' => 'imagefilecorrupt'
				 
               ));
		
	           echo $json;
			
			   exit;
			  
	   
	      } else if($image_file_error != 0 && $song_file_error === 0){
	   
	         //check if its the song with errors
			 
			  $json = json_encode(array(
	   
               'status' => 'notsuccessfull',
               'responseResult' => 'songfilecorrupt'
              ));
		
	          echo $json;
		   
			  exit;
	   
	      } else if($image_file_error === 0 && $song_file_error === 0){
	   
	         // check if its the image and song with erros
			 
			  $json = json_encode(array(
	   
               'status' => 'notsuccessfull',
               'responseResult' => 'bothimagesongfilecorrupt'
              ));
		
	          echo $json;
			 			
			  exit;
	   
	      } 
		
		
		}
		
		
		
	  // End of checking  if the image or song has errors 
	  
	}  else {
	
	   // check if it is the image which is not allowed OR it is the song 
	   
	   if(!in_array($image_file_ext, $image_allowed) && in_array($song_file_ext,$audio_allowed) ) {
	   
	     $json = json_encode(array(
	   
            'status' => 'notsuccessfull',
            'responseResult' => 'imagenotcorrectfile'
         ));
		
	     echo $json;
		 
	     exit;
		  
	   } else   if(!in_array($song_file_ext,$audio_allowed) && in_array($image_file_ext, $image_allowed)) {
	   
	      $json = json_encode(array(
	   
            'status' => 'notsuccessfull',
            'responseResult' => 'songnotcorrectfile'
         ));
		
	     echo $json;
	   
		 exit;
	   
	   } else if ( !in_array($image_file_ext, $image_allowed) && !in_array($song_file_ext,$audio_allowed)   ) {
	   
	      $json = json_encode(array(
	   
            'status' => 'notsuccessfull',
            'responseResult' => 'imageANDsongnotcorrectfile'
         ));
		
	     echo $json;
	     
		 exit;
	   
	   }
	   
	    //End of  checking if it is the image which is not allowed OR it is the song 
	
	}
    
	
    } // End of checking if the file exists
  
  
  } else {
  
  
       $json = json_encode(array(
	   
            'status' => 'notsuccessfull',
            'responseResult' => 'datanotposted'
        ));
		
	    echo $json;
	  
	    exit;
  
  }
  
  // checking if the image and song file are available
  
	

	
?>



