<?php

session_start();

require_once '../config/dbconfig.php';			
			            
				
$conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);


// set the PDO error mode to exception
			  
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$getMusicQuery = "SELECT m.id,m.songname,m.album,m.image_url,m.song_url,m.filetype,m.artist,IFNULL(d.downloaded,0) AS totaldownloads FROM musicfiles  m

                  INNER JOIN (SELECT songid AS id,SUM(num) AS downloaded FROM downloads) d  ON d.id=m.id ORDER BY m.id DESC LIMIT 12";
		
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



