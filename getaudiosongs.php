<?php

session_start();

require_once 'config/dbconfig.php';			
			            
				
$conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
			  
$audio='Audio';
			  
// set the PDO error mode to exception
			  
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$getMusicQuery = "SELECT songname,album,image_url,song_url,filetype,artist FROM musicfiles";
		
$getMusic = $conn->prepare($getMusicQuery);

							
$getMusic->execute();

$getMusic->setFetchMode(PDO::FETCH_ASSOC); 

$songdetails=array();

$numOfSongs =  $getMusic->rowCount(); 

if( $numOfSongs  > 0 ) {	

  while ($row = $getMusic -> fetch ()) {
  
    $songdetails[]=$row;
  
  }

} 

$json = json_encode(array(
	   
    'numofSongs' => $numOfSongs,
    'SongDetails' => $songdetails
));
		

echo $json;

exit;
							  

					   
	
		
?>



