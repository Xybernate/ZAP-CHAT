<?php


	require_once '../config/dbconfig.php';			
				
	$conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
	
    $ratingId=filter_input(INPUT_POST, "ratingId");
    $songId=filter_input(INPUT_POST, "songId");		
			  
    conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $insertRatingQuery = "INSERT INTO rating(rating,songid) VALUES (:ratingId,:songId)";
		
    $insertRating = $conn->prepare($insertRatingQuery);
			
	$insertRating->bindParam(':ratingId',$ratingId);
	$insertRating->bindParam(':songId', $songId);				

							
	$insertRating->execute();
							
	$ratingId=$conn->lastInsertId();
	
	if($ratingId  > 0){
	
	   echo 'RatingInserted';
	   
	   exit;
	   
	} else {
	
	
	    echo 'RatingNotInserted';
	   
	    exit;
	
	}
	
	
						
			
?>



