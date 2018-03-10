   
<style> 
.events-search{
    width: 100%;
    background-color:#0099cc;
	color:#fff;
	border:none;
	 height:25px;
	 padding-left:20px; 
	 margin-top:80;
	 margin-right:0px;
	 outline:none;
	 font-size:15px;
	 	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
}

.events-search:focus {
	border:none;
    width: 100%;
    background-color:#0099cc;
	color:#fff;
	 padding-left:15px;
     height:40px;	 
	 margin-top:80;
	 margin-right:0px;
	 outline:none;
	 font-size:18px;
}
::placeholder
{
	color:#fff;
}
</style>
       
   <div>
	  <input type="text" class="events-search" id="search-music" name="search" placeholder="Type here to search for events" style="color:black;">
   </div>
 
	   <div class="" id="audio-sermons" style="margin-top:0px;min-height:3000px;background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;">
           
         <?php
    $category = "audio";
	$servername = "localhost";
	$username = "zambians_yollo";
	$password = "sermons2017";
	$dbname = "zambians_zambiansermons";		  
	  
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $sqlCommd= "select s.full_name AS artist,m.album,m.image_url,m.songname,m.price,m.song_url from music_songs m INNER JOIN signup s ON s.id=m.userid WHERE category='".$category."' ORDER BY m.id DESC LIMIT 50";
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
		   
		     
<div class="w3-card-2 w3-display-container" style="height:170px;margin-bottom:0px;">
  <img src="<?php echo $file_url;  ?>" alt="Event" style="height:170px;width:100%;"/>

     <div class="w3-display-topleft w3-container " style="width:100%;color:#fff;background-color:rgba(0,0,0,0.6);">
	 <p class="w3-animate-zoom"> 
	 <span style="font-size:1.2em"> <?php echo $song_  ?> </span><br/>
	VENU:  <strong style="color:#0099cc;;"><?php echo $album_   ?></strong> ADMISSION:  <strong style="color:#0099cc;;"><?php echo $album_   ?></strong>
	 </p>
	 </div>
	  
     
	    <div class="w3-display-bottomright w3-container" style="width:100%;color:#fff;background-color:transparent;">
 		<center>
		
 	   
		   <i class="w3-animate-zoom"> 
		<img src="img/info.png" alt="Event" style="height:35px;width:35px;border-radius:50%;margin-bottom:3px;"/>
        </i> 
		  
       <i class="w3-animate-zoom" onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black"> 
		<img src="img/location.png" alt="Event" style="height:30px;width:30px;border-radius:50%;margin-bottom:3px;"/>
        </i> 
		
		  <i class="w3-animate-zoom"> 
		<img src="img/buy4.png" alt="Event" style="height:35px;width:35px;border-radius:50%;margin-bottom:3px;"/>
        </i> 
	   
			</center>
		</div>
		

  </div>
    			
			<?php		
					
					}
					
                mysqli_close($conn);
				
	
	}

 ?>
		  
           
      
 </div>

    
 