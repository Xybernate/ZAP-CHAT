       
  <div class="w3-hide-medium w3-hide-small" id="audio-sermons" style="margin-top:0px;background-image:url(img/falls.jpg);min-height:3000px;background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;">
         
    
         <?php
		 
	   
   	  	$servername = "localhost";
        $username = "zambians_yollo";
        $password = "sermons2017";
        $dbname = "zambians_zambiansermons";		  
	  

         $searchvalue = $_POST['searchvalues'];		 

         $conn = mysqli_connect($servername, $username, $password, $dbname);

         $sqlCommd= "select s.full_name AS artist,m.image_url,m.songname,m.album,m.price,m.song_url from music_songs m INNER JOIN signup s ON s.id=m.userid WHERE s.full_name LIKE '%$searchvalue%' OR m.songname LIKE '%$searchvalue%' ORDER BY m.id DESC LIMIT 17";
         
		 $result = mysqli_query($conn, $sqlCommd);
         $num_rows = mysqli_num_rows($result);
	
	     if ($num_rows > 0 ) {
	
	
	        while($row = mysqli_fetch_array($result))
            {
		
		      $image_ = $row['image_url'];
              $song_ = $row['songname'];
              $album_ = $row['album'];
              $artist_ = $row['artist'];
              $price_ = $row['price'];
              $song_url_ = $row['song_url'];

              $file_url = $image_;
		   
              	   ?>
		  
		     		  
       		<div class="w3-hide-small w3-hide-medium"  style="padding-top:100px;margin-left:23%;margin-right:23%;height:99px;background-color:transparent;">
			 
			<div class="w3-col s12" style="background-color:rgba(0, 0, 0, 0.4);height:99px;border:1px solid rgba(0, 0, 0, 0.4);">
            
			
			<div class="w3-col s2 w3-animate-zoom" style="color:#fff;font-weight:600;height:98px;">
                 <img src="<?php echo $file_url;  ?>" alt="" style="width:100%;border-radius:1%;height:98px;">
				 
			  
            </div>

            <div class="w3-col s10" style="background-color:transparent;height:98px;">
            <div class="w3-center" style="width:100%;background-color:transparent;line-height:;font-size:14px">
			
			<span class="w3-animate-zoom"style="color:#fff;float:left;font-weight:600;margin-left:10px;text-transform:uppercase;" >  
		 	<?php echo $song_  ?>
			 
			</span>
			 
			 <br/>
			 <span class="w3-animate-zoom"style="float:left;font-weight:600;margin-left:10px;">
		  
			 <i style="color:#fff;font-weight:800;">
			 <?php echo $album_   ?>
			 </i> 
			 </span>
			 </div>
			 <div class="w3-animate-right" style="width:100%;line-height:50px;padding-top:20px;background-color:transparent;">
				
				<i> <a   href="download.php?filename=<?php echo $song_url_ ?>" class="fa fa-download" style="background-color:green;color:#fff;cursor:pointer;text-decoration:none;padding:5px;float:right;margin-right:10px;"  > <span> Download1</span> </a></i>
			
			 <i> <a id="<?php echo $song_url_ ?>" class="fa fa-pause pauseaudio" style="color:#fff;cursor:pointer;text-decoration:none;padding:5px;float:right;margin-right:10px;"> </a></i>
		     
			 <i><a id="<?php echo $song_url_ ?>" class="fa fa-play playaudio" style="color:#fff;cursor:pointer;text-decoration:none;padding:5px;float:right;margin-right:10px;"> </a> </i>
		     
			
            </div>
            </div>
        </div>
		   	
		 
         </div>
             
                    
			  
		     
		   
					
			<?php
        
                    }
					
                mysqli_close($conn);
				
	
	}
	
	?>
	
	 </div>
 
   
	   <div class="w3-hide-large" id="audio-sermons" style="background-image:url(img/falls.jpg);margin-top:0px;padding-top:24px;min-height:3000px;background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;">
           
      
         <?php
		 
	   
   	  	$servername = "localhost";
        $username = "zambians_yollo";
        $password = "sermons2017";
        $dbname = "zambians_zambiansermons";		  
	  

         $searchvalue = $_POST['searchvalues'];		 

         $conn = mysqli_connect($servername, $username, $password, $dbname);

         $sqlCommd= "select s.full_name AS artist,m.image_url,m.songname,m.album,m.price,m.song_url from music_songs m INNER JOIN signup s ON s.id=m.userid WHERE s.full_name LIKE '%$searchvalue%' OR m.songname LIKE '%$searchvalue%' ORDER BY m.id DESC LIMIT 17";
         
		 $result = mysqli_query($conn, $sqlCommd);
         $num_rows = mysqli_num_rows($result);
	
	     if ($num_rows > 0 ) {
	
	
	        while($row = mysqli_fetch_array($result))
            {
		
		      $image_ = $row['image_url'];
              $song_ = $row['songname'];
              $album_ = $row['album'];
              $artist_ = $row['artist'];
              $price_ = $row['price'];
              $song_url_ = $row['song_url'];

              $file_url = $image_;
		   
              	   ?>
		  
		     		  
       		      		  
       		<div class="w3-hide-large"  style="padding-top:77px;padding-bottom:1px;margin-left:1%;margin-right:1%;height:70px;background-color:transparent;">
			 
			<div class="w3-col s12" style="background-color:rgba(0, 0, 0, 0.4);margin-top:;height:70px;border:3px solid rgba(0, 0, 0, 0.1);">
            <div class="w3-col s3 w3-animate-zoom" style="color:gray;font-weight:600;height:70px;">
                 <img src="<?php echo $file_url;  ?>" alt="" style="width:100%;border-radius:1%;height:70px;">
				 
			  
            </div>

            <div class="w3-col s9" style="background-color:;height:70px;">
            <div class="w3-col s12" style="line-height:30px;font-size:14px;background-color:;">
			
			<span class="w3-animate-zoom"style="float:left;font-weight:400;margin-left:10px;" > 
			<span style="color:#fff;font-weight:600;text-transform:uppercase;font-size:13px;">
			<?php echo $song_  ?> 
			<i style="font-weight:800;color:#fff;"> ~ </i> 
			</span> 
			</span>
		 
			 <span class="w3-animate-zoom"style="float:left;font-weight:400;margin-left:10px;">  
			 <i style="color:#fff;font-weight:400;">
			 <?php echo $album_   ?></i>  
			 </span>
			 	
				 <br/>
			 	<i> <a   href="download.php?filename=<?php echo $song_url_ ?>" class="fa fa-download" style="background-color:transparent;color:#fff;cursor:pointer;text-decoration:none;padding:5px;float:right;margin-right:10px;"  >   </a></i>
			
			 <i> <a id="<?php echo $song_url_ ?>" class="fa fa-pause pauseaudio" style="color:#fff;cursor:pointer;text-decoration:none;padding:5px;float:right;margin-right:5px;"> </a></i>
		     
			 <i><a id="<?php echo $song_url_ ?>" class="fa fa-play playaudio" style="color:#fff;cursor:pointer;text-decoration:none;padding:5px;float:right;margin-right:5px;"> </a> </i>
		     
			
            </div>
            </div>
        </div>
		   	
		 
         </div>
             
                 
		   
					
			<?php
        
                    }
					
                mysqli_close($conn);
				
	
	}
	
	?>
	
	 </div>
    
            
          
       

