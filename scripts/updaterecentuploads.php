<h3> Recent Uploads</h3>
    <div style="background-color:;margin-right:;">
        
	 
                
         <?php
      $category = "Audio";
   	 $servername = "localhost";
         $username = "africar_africa";
         $password = "music";
         $dbname = "africar_africarythms_db";	  

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $sqlCommd= "select s.full_name AS artist,m.album,m.image_url,m.songname,m.price,m.song_url from music_songs m INNER JOIN signup s ON s.id=m.userid WHERE filetype='".$category."' ORDER BY m.id DESC LIMIT 25";
    $result = mysqli_query($conn, $sqlCommd);
    $num_rows = mysqli_num_rows($result);
	
	if ($num_rows > 0 ) {
	
	    while($row = mysqli_fetch_array($result))
        {
		
		   $image_ = $row['image_url'];
           $song_ = $row['songname'];
           $artist_ = $row['artist'];
		   $album_ = $row['album'];
           $price_ = $row['price'];
           $song_url_ = $row['song_url'];

           $file_url = $image_;
		   
       		  echo '<div  class="col-md-12 col-lg-12 col-sm-12" style="margin-top:18px;padding-bottom:10px;">';
			 
				
	   	      echo '<i style=""  class="w3-col m2 w3-hide-small w3-hide-medium">';   
	  	      echo ' <img src="'. $file_url . '" alt="" style="height:50px;max-width:70px;border-radius:4%">';
					
	  	     echo '</i>'; 
		
		 	 echo '<i style=""  class="w3-col m2 w3-hide-large">';   
	  	     echo ' <img src="'. $file_url . '" alt="" style="height:100px;max-width:90%;border-radius:4%">';
					
	  	     echo '</i>'; 
	  
	  	     echo '<i style="color:#fff;text-align:left;background-color:transparent;"  class="w3-col m3"> <span style="color:#fff;font-weight:400;background-color:transparent;border:1px solid teal;padding:3px;border-radius:2px;"> SONG</span><br/> '.$song_.'</i>'; 
	    	 echo '<i style="color:#fff;text-align:left;background-color:transparent;"  class="w3-col m3"><span style="color:#fff;font-weight:400;background-color:transparent;padding:3px;border-radius:1px;border:1px solid teal;"> ARTIST</span> <br/>'.$album_ .'</i>'; 
  
		     echo '<i  class="w3-col m4" style="background-color:transparent;float:right;">';
	  	     echo '<button type="submit" name="Submit" class="playaudio" id="'.$song_url_.'" style="background-color:transparent;height:25px;width:25px;padding:3px;"><i class="fa fa-play" style="color:#fff;font-size:15px;"></i></button>';
		 			
						echo '<button type="submit" name="Submit" class="pauseaudio"  style="background-color:transparent;height:25px;width:25px;padding:3px;" ><i class="fa fa-pause" style="color:#fff;font-size:15px;"></i></button>';
				 
						echo '<button type="submit" name="Submit" class="pauseaudio"  style="background-color:transparent;height:25px;width:25px;padding:3px;" ><i class="fa fa-download" style="color:#fff;font-size:15px;"></i></button>';
				 
					 
	 	     echo '</i>';
				 
					
						echo '</div>';
        
        
                    }
					
                mysqli_close($conn);
				
	
	}

 ?>
		  
            
          
        </div>