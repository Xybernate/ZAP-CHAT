<?php

session_start();


if($_SERVER['REQUEST_METHOD']=='POST')  {
	
	$image_url = "";
	$song_url = "";
	
	if(isset($_FILES['image_file']) && isset($_FILES['song_file']))  {
	
	          $image_file = $_FILES['image_file'];
			  $song_file = $_FILES['song_file'];

			  // File properties
			  //image
			  
			  $image_file_name = $image_file['name'];
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
			  $image_allowed = array('jpg','png');
			  
						   
			  $song_file_ext = explode('.', $song_file_name);
			  $song_file_ext = strtolower(end($song_file_ext));
			  
			  $audio_allowed = array('mp3', 'wav');
			  
			  $video_allowed = array('mp4', 'flv','avi');
			  
			   if(in_array($image_file_ext, $image_allowed) && in_array($song_file_ext,$audio_allowed))
			   {
			     // this is for audio files  
					
			    //Check if there are errors
				
				if($image_file_error === 0 && $song_file_error === 0)
				
				{
					 
				   $image_file_name_new = uniqid('', true).'.'.$image_file_ext;
				   $image_file_destination = 'uploads/audio/images/'.$image_file_name_new;
					   
				   $song_file_name_new = uniqid('', true).'.'.$song_file_ext;
				   $song_file_destination = 'uploads/audio/'.$song_file_name_new;
				   
				   if(move_uploaded_file($image_file_temp, $image_file_destination) && move_uploaded_file($song_file_temp, $song_file_destination))
					{
					   
					        $imagepath = $image_file_destination;
							$songpath = $song_file_destination;
							
							$song=filter_input(INPUT_POST, "song");
		                    $album=filter_input(INPUT_POST, "album");
			                $musictype="Audio";
		                    $audio="Audio";
							
							$userid=$_SESSION['_UserID'];

						
	                        $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
                            // set the PDO error mode to exception
			  
                            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

							$insertquery = "INSERT INTO music_songs(songname,album,category,image_url,song_url,filetype,userid) VALUES (:song,:album,:musictype,:imagepath,:songpath,:filetype,:userid)";
		
		                    $insertmusic = $conn->prepare($insertquery);
			
			                $insertmusic->bindParam(':song', $song);
		                    $insertmusic->bindParam(':album', $album);
				            $insertmusic->bindParam(':musictype', $musictype);
		                    $insertmusic->bindParam(':imagepath', $imagepath);
				            $insertmusic->bindParam(':songpath',$songpath);
							$insertmusic->bindParam(':filetype',$audio);
				            $insertmusic->bindParam(':userid',$userid);
							
							$insertmusic->execute();
							
							$musicid=$conn->lastInsertId();
						
							if($musicid > 0){
							
							    echo 'uploadsuccessful';
							  
							     exit;
							  
							  
							  
							 }  else {
							
							     unlink($image_file_destination);
							     echo 'uploadnotsuccessful';
							  
							     exit;
							  }
					   
					   
					} else {
					
					
					   echo 'uploadnotsuccessful';
							  
					   exit;
								 
					} // moving file to the folder directory

					
				} else {
					
					
					    // if there is an error in the image file
						
					     if($image_file_error !== 0){
						
						   echo 'imagefilecorrupt';
						   
						   
						}
						
						// if there is an error in the song file
						
					    if($song_file_error !== 0){
						
						   echo 'songfilecorrupt';
						}
						
						exit;
						
					} // End of checking if there are errors 
					
					// End of upload audio
			  
			   } else if (in_array($image_file_ext, $image_allowed) && in_array($song_file_ext,$video_allowed)){
			  
			  
			     // This is for video files
				   
				 //Check if there are errors
				 
				 if($image_file_error === 0 && $song_file_error === 0)
				
				{
					 
				   $image_file_name_new = uniqid('', true).'.'.$image_file_ext;
				   $image_file_destination = 'uploads/audio/images/'.$image_file_name_new;
					   
				   $song_file_name_new = uniqid('', true).'.'.$song_file_ext;
				   $song_file_destination = 'uploads/audio/'.$song_file_name_new;
				   
				   if(move_uploaded_file($image_file_temp, $image_file_destination) && move_uploaded_file($song_file_temp, $song_file_destination))
					{
					   
					       $imagepath = $image_file_destination;
							$songpath = $song_file_destination;
							
							$song=filter_input(INPUT_POST, "song");
		                    $album=filter_input(INPUT_POST, "album");
			                $musictype="Video";
		                    $audio="Video";
							
							$userid=$_SESSION['_UserID'];

							$db_host = "localhost";
                            $db_user = "africar_africa";
                            $db_pass = "music";
                            $db_name = "africar_africarythms_db";	
	  
	                        $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
                            // set the PDO error mode to exception
			  
                            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

							$insertquery = "INSERT INTO music_songs(songname,album,category,image_url,song_url,filetype,userid) VALUES (:song,:album,:musictype,:imagepath,:songpath,:filetype,:userid)";
		
		                    $insertmusic = $conn->prepare($insertquery);
			
			                $insertmusic->bindParam(':song', $song);
		                    $insertmusic->bindParam(':album', $album);
				            $insertmusic->bindParam(':musictype', $musictype);
		                    $insertmusic->bindParam(':imagepath', $imagepath);
				            $insertmusic->bindParam(':songpath',$songpath);
							$insertmusic->bindParam(':filetype',$audio);
				            $insertmusic->bindParam(':userid',$userid);
							
							$insertmusic->execute();
							
							$musicid=$conn->lastInsertId();
						
							if($musicid > 0){
							
							    echo 'uploadsuccessful';
							  
							     exit;
							  
							  
							  
							 }  else {
							
							     unlink($image_file_destination);
							     echo 'uploadnotsuccessful';
							  
							     exit;
							  }
					   
					   
					} else {
					
					
					   echo 'uploadnotsuccessful';
							  
					   exit;
								 
					} // moving file to the folder directory

					
				} else {
					
					
					    // if there is an error in the image file
						
					     if($image_file_error !== 0){
						
						   echo 'imagefilecorrupt';
						   
						   
						}
						
						// if there is an error in the song file
						
					    if($song_file_error !== 0){
						
						   echo 'songfilecorrupt';
						}
						
						exit;
						
					} // End of checking if there are errors 
					
					// End of upload audio
			  
			  }
			  
			  
	
	}// Check if the image or song file  has been set  
	
	
} else {

    echo 'noserverpost';
			   
	exit;

} // end of checking for the post method method

	
?>



