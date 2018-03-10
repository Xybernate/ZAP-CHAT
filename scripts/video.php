      
  <div class="" id="audio-sermons" style="margin-top:0px;background-image:url(img/falls.jpg);min-height:3000px;background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;">
           
         <?php
    $category = "video";
	$servername = "localhost";
	$username = "zambians_yollo";
	$password = "sermons2017";
	$dbname = "zambians_zambiansermons";		  
	  
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $sqlCommd= "select s.full_name AS artist,m.album,m.image_url,m.songname,m.price,m.song_url from music_songs m INNER JOIN signup s ON s.id=m.userid WHERE category='".$category."' ORDER BY m.id DESC LIMIT 1";
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
		   
		   ?>
		   
 
             <center>
			    <p class="w3-animate-fading"style="font-size:20px;color:#fff;padding-top:200px;">
					Sorry there are no video sermons for now. We will update soon...
                    </p>
						
             </center>
                 
			<?php		
					
					}
					
                mysqli_close($conn);
				
	
	}

 ?>
		  
           
      
 </div>

      
 