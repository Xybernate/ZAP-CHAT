    
<style> 
.distributers-search{
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

.distributers-search:focus {
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
       
  
 
	   <div class="" id="" style="margin-top:0px;min-height:3000px;background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;">
           
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
		   
		     
<div class="w3-card-2 w3-display-container" style="height:130px;"  data-aos="zoom-in">
  <img src="img/7.jpg" alt="" style="height:130px;width:100%;"/>

     <div class="w3-display-topright w3-container " style="height:130px;width:100%;color:#fff;background-color:rgba(0,0,0,0.5);">
	 <p class="w3-animate-zoom"style="font-size:0.9em;font-family:segoe ui light;"> 
	 
	 <span > <?php echo $song_  ?> </span><br/>
	 
	ARTIST:  <strong style="color:#0099cc;;"><?php echo $album_   ?> </strong> <br/>  
	ALBUM:  <strong style="color:#0099cc;;"><?php echo $album_   ?> </strong> <br/>
	
	 </p>
 
	 
 
	 </div>
 <div class="w3-display-bottomright w3-container " style="font-size:0.8em;height:30px;width:100%;color:#fff;background-color:rgba(0,0,0,0.6);padding-top:5px;">
  <i class="fa fa-ellipsis-v" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:right;"> </i>
  <i class="fa fa-download" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:right;"> </i>
  <i class="fa fa-commenting" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:right;"> </i>


 <i class="fa fa-play" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:left;"> </i>
  <i class="fa fa-play" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:left;"> </i>
  <i class="fa fa-play" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:left;"> </i>
 <i class="fa fa-pause" style="font-size:1.4em;padding-left:8px;padding-right:5px;float:left;"> </i>
 
 

</div>
 
  </div>
    			
			<?php		
					
					}
					
                mysqli_close($conn);
				
	
	}

 ?>
		  
           
      
 </div>
 
 