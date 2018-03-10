$().ready(function(){

     $.ajax({
			
	     url: "process/sessioncheck.php"
	             
	
     }).done(function(data) {
	
        var loginDetails = JSON.parse(data);
		   
         if(loginDetails.loggedinStatus==='loggedin' &&  loginDetails.loggedinUserType==='Admin'){

		     $('body').ready(function(){ 
     
		 
	          $('body').load('views/mainContainers.html',function() {
	 
	          // load topnav menu
              $('.topNav').ready(function() {

              $('.topNav').load('views/topmenuAdminUserLoggedIn.html'); 
			  
	         });
	 
	         
	
	     $('#hotmusic').ready(function(){

          $.getJSON('process/gettopformostdownloaded.php',function(data){  
      
           if(data.numofSongs > 0){
	
	        $('#topmostDownloadsHeading').append('<h4>Most Downloaded <strong style="color:red;" class="">HOT!!</strong></h4>');
	   
	       $.each(data.SongDetails,function(i,Song) {
	 
	     
	         $('#hotmusic').append('<div style="cursor:pointer;display:inline-block;"  id="openActionDox" class="w3-margin-top w3-col l3 m4 s6 w3-padding w3-left"><div  style="height:250px;" ><div id="imageHolder" ><img class="w3-border" id="songImage"  style="width:100%;height:200px;" src='+Song.image_url+' ></div><center><div class="w3-margin-top" id="songDetails"><div id="songId">'+Song.id+'</div><div style="display:none;" id="download">'+Song.totaldownloads+'</div><div style="display:none;" id="artist">'+Song.artist+'</div></div><div id="songname">'+Song.songname+' by '+Song.artist+'</div><div style="display:none;" id="songname">'+Song.songname+'</div><div style="display:none;" id="songPath">'+Song.song_url+'</div></center></div></div>');

	         // $('#hotmusic').append('<div style="cursor:pointer;" data-aos="zoom-in" id="openActionDox" class="w3-col l3 m4 s6 w3-padding w3-left"><img id="songImage" data-aos="zoom-in" style="width:100%;height:100px;" src='+Song.image_url+' ><div id="artistContainer" class="w3-margin-top"><center><p id="songId">'+Song.id+'</p><p id="artist">'+Song.artist+'</p></center></div><div  id="songContainer"  class="w3-margin-top"><center><p id="songname">'+Song.songname+'</p><p style="display:none;" id="songPath">'+Song.song_url+'</p></center></div><div  id="songContainer"  class="w3-margin-top"></div></div></div>');
		
	       });
	 
	           $('.subBody').css('display','block');
	        
	      } else {
		         
		        $('.subBody').css('display','block');
	       }
	   
	     
          });
   
          }); 
	 
	 
	     });  // End of the body load
	     
  
        });  // End of the body eady
  
			
		  		   
         } else if (loginDetails.loggedinStatus==='loggedin' &&  loginDetails.loggedinUserType==='Standard') {
	   
	         $('body').ready(function(){ 
     
		 
	          $('body').load('views/mainContainers.html',function() {
				
				$('.subBody').css('display','block');
	 
	          // load topnav menu
              $('.topNav').ready(function() {

              $('.topNav').load('views/topmenuNormalUserLoggedIn.html'); 
			  
	         });
	  
     
  
      	   
		         $('body').ready(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('main.html');
	 		 
   
		
	     });
		 
		      $('#books').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('books.html');
	 		 
   
		
	     });
		           $('#getbooks').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('books.html');
	 		 
   
		
	     });
		       $('#getmedia').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('media.html');
	 		 
   
		
	     });
		 
		    $(document).on('click','#getevents',function() {
		 
		         $('#mainContainer').empty();
			 	 $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			    $('#mainContainer').append('<div class="w3-card-2 w3-display-container"  id="getevent_details" data-aos="zoom-in"><img src='+Song.image_url+' id="event_img" alt="Event Image"/> <div class="w3-display-topright w3-container " id="event_content"><span class="w3-animate-left"> <h4>MUSIC  CONCERT  </h4> <span> 22 March 2017</span></span> <div class="w3-display-bottomright w3-container "><button class="w3-animate-left" id="event_btn"> Event Details </button>  </div></div></div>');
				 
			
			
	          });
	 	
           });
		
	     });
		  
	 
	     });  // End of the body load
	     
  
        });  // End of the body eady
  
			
			
	         
         }	else {

            $('body').ready(function(){ 
     
		 
	          $('body').load('views/mainContainers.html',function() {
			
     			$('.subBody').css('display','block');
	 
	          // load topnav menu
              $('.topNav').ready(function() {

              $('.topNav').load('views/topmenuNormalUser.html'); 
			  
	         });
	 
	        
		   
		  
	     });  // End of the body load
	     
  
        });  // End of the body eady
  
					 
        }		 
		
					
      });
	  
	  
	  //  UPLOAD BUTTON ACTIONS
	  //  UPLOAD BUTTON ACTIONS
	  //  UPLOAD BUTTON ACTIONS
  
     $(document).on("click","#uploadbutton",function (event) {
	   	 
		event.preventDefault();
		event.stopPropagation();
				
		
		var artistInput = $('#artistFullName').val();
        var albumInput = $('#album').val();
		
		
	    var imagefile = document.getElementById('image_file');
			 
		var songfile = document.getElementById('song_file');
			 
		var inputVariables = $("#uploadform").find('input').val();

        if($('#song_file').val()=='' || $('#image_file').val()=='' || $('#album').val()=='' || $('#artistFullName').val()=='') {
     
	        
	         if($('#song_file').val()=='') {
			 
			    $("#songError").html('Upload a song');
		
		
			 } else {
			 
			    $("#songError").html('');
			 
			 }
			 
			 if($('#image_file').val()=='') {
			 			 
			    $("#imageError").html('Upload an image for the song');
		
			 
			 } else {
			 		    
				$("#imageError").html('');			 
			 
			 }
			 
			 
			 if($('#album').val()=='') {
			 
			   $("#albumError").html('Enter the album of song');
		
			 } else {
			 
			   $("#albumError").html('');
			 
			 }
			 
			 
			 if($('#artistFullName').val()=='') {
			 
			    $("#artistError").html('Enter the name of the artist for the song');
		
			 } else {
			 
			    $("#artistError").html('');
			 
			 }
           
           
		
        } else {
		
		      $('.Error').html('');
			  
			  // Ensure the image is a permitted format
			  
			  var image_ext = $('#image_file').val().split('.').pop().toLowerCase();
			  
			  // Ensure the video is a permitted  format
			  
			  var song_ext = $('#song_file').val().split('.').pop().toLowerCase();
			  
			  // Check
			  
			  if ($.inArray(image_ext, ['png','jpg','jpeg']) == -1 || $.inArray(song_ext, ['mp3','mp4']) == -1 ) {
						    
				    if ($.inArray(image_ext, ['png','jpg','jpeg']) == -1) {
						    
				        $("#imageError").html('Allowed formats are png,jpg,jpeg');
			
			        } else{

                             $("#imageError").html('');
                    }


                     if ($.inArray(song_ext, ['mp3','wav']) == -1) {
						    
				           $("#songError").html('Allowed formats are mp3,mp4,avi,flv and wav');
			
			        } else{

                         $("#songError").html('');   
						 
                    }			 					
			
			 } else{

                 // Check size of the image and song
				 
				 var formDetails = $("#uploadform")[0];
				  
				  uploadProcess(formDetails);
				  
				  
				 
             }			
			  
		
		
		}
		 
		
			 
		 
		  
    });
		 
     $(document).on('change','#image_file',function (event) {
		 
		 $("#imageError").html('');
			  
		// Ensure the image is a permitted format
			  
		var image_ext = $('#image_file').val().split('.').pop().toLowerCase();
			  
				    
		if ($.inArray(image_ext, ['png','jpg','jpeg']) == -1) {
						    
				$("#imageError").html('Allowed formats are png,jpg,jpeg');
			
			} else{

                $("#imageError").html('');
            }


		
		
   });
		 		 
     $(document).on('change','#song_file',function (event) {
		 
		$("#songError").html('');   
		
			  
		// Ensure the video is a permitted  format
			  
		var song_ext = $('#song_file').val().split('.').pop().toLowerCase();
			  
		// Check		
	   
        if ($.inArray(song_ext, ['mp3','wav']) == -1) {
						    
				$("#songError").html('Allowed formats are mp3,mp4,avi,flv and wav');
			
			} else{

			     // check size of the song 
                $("#songError").html('');   
						 
             }			 					
			
				 
    });
	   	
     $(document).on("click","#openActionDox",function (event) {
	  	 
        event.preventDefault();
		event.stopPropagation();
		
		$('#topmostDownloadsHeading').css('display','none');
		
		$('#hotmusic').css('display','none');
		
		$('#latestsongsHeading').css('display','none');
		
		$('#latestmusic').css('display','none');
		
		$('#clickedSong').css('display','block');
		
		$('#backstageButtonContainer').css('display','block');
		
		
		
		var artistName =  $(this).find('#artist').html();
				
		var songName =  $(this).find('#songname').html();
		
		var songDownload =  $(this).find('#download').html();
		
		var songPath =  $(this).find('#songPath').html();
		
		
		var songid =  $(this).find('#songId').html();
		
					
		var songimagePath =  $(this).find('#songImage').attr('src');
		
		$('#clickedsongImage').empty();
				
		
		$('#clickedsongImage').append('<div id="imageColumnHolder" class="w3-col l3 m3 s3 w3-padding"></div><div id="actionsongColumnHolder" class="w3-col l6 m12 s12 w3-padding"></div>');
		
		$('#imageColumnHolder').append('<img class="w3-border"  id="songImage" style="width:211px;height:250px;" src='+songimagePath+'>');
		
		$('#actionsongColumnHolder').append('<div id="songNameAndArtist" class="w3-section">'+songName+'</div><div id="downloadButtonContainer" class="w3-section"><p id="songId">'+songid+'</p><a  id="playSong" songroute='+songPath+' class="w3-btn w3-orange  playPauseControl">Play<i style="margin-left:1em;" class="fa fa-play"></i></a><a href="process/filedownload.php?file=../'+songPath+' && songid='+songid+'"  id="downloadSong" class="w3-btn w3-blue">Download('+songDownload+' downloads)<i style="margin-left:1em;" class="fa fa-download"></i></a></div><div style="display:none;" id="commentBoxContainer" class="w3-section"><input class="w3-input w3-border" placeholder="Comment on your song and place Enter key to post"></div><div class="w3-section"><p style="display:none;" id="songpathString">'+songPath+'</p></div><div class="w3-section"><div class="w3-margin-top"><p style="font-type:italics;">Share</p></div><div class=""><button class="w3-btn w3-blue"><i class="fa fa-facebook"></i></button><button id="twitterButton" class="w3-btn w3-red"><i class="fa fa-twitter"></i></button></div>');
		
		//$('#titleAndsong').append('<div class="w3-left" id="songNameAndArtist">'+songName+' done by '+artistName+'</div>');
		
		//$('#downloadButtonContainer').append('<button id="downloadSong" class="w3-btn w3-blue">Download<i style="margin-left:1em;" class="fa fa-download"></i></button>');
		
		//$('#clickedsongImage').append('<center><div data-aos="zoom-in" style=""><div style="width:212px;height:250px;display:inline-block;" class=""><img data-aos="zoom-in" id="songImage" style="width:211px;height:250px;" src='+songimagePath+' ></div><div style="display:inline-block;" class="w3-padding" id="clickedsongData"><p id="songNameAndArtist">'+songName+' done by '+artistName+'</p><p style="display:none;" id="songpathSection" songurl='+songPath+'>'+songPath+'</p><button id="downloadSong" class="w3-btn w3-blue">Download<i style="margin-left:1em;" class="fa fa-download"></i></button><div id="socialIcons" class="w3-margin-top"><button class="w3-red w3-btn">Share<i style="margin-left:1em;" class="fa fa-share"></i></button></div></center>');
		
		 
		
      });
			
     $(document).on("click","#closePlayerContainer",function (event) {
	
	
	  
		document.getElementById('audioPlayer').pause();
		
	    document.getElementById('songActionBox').style.display='none';
	
});

     $(document).on("click","#downloadSongz",function (event) {
	  
	 event.preventDefault();
	 event.stopPropagation();
	   
	 var songnameSelected =  $(this).closest('#clickedsongImage').find('#songNameAndArtist').html();

	 var songurlSelected =  $(this).closest('#clickedsongImage').find('#songpathSection').html();
	   
	 $('#songActionBox').css('display','block');
	   
	 $('#playerSongsName').empty();
	   
	 $('#playerSongs').empty();
		
	 $('#playerSongsName').append('<center><div class="">' +songnameSelected +'</div></center>');
	 
	 $('#playerSongs').append('<center><div class="w3-margin-top"><audio id="audioPlayer" controls><source src='+songurlSelected +'></audio></div></center>');
	 
});
				
     $(document).on("click",".playPauseControl",function (event) {

     $(this).empty();
	 
	 var playID = $(this).attr('id');
	 
	 var audioTagId = document.getElementById('audioPlayer');
	 
	 if(playID==='playSong'){
	 	      
	    $(this).attr('id','PauseSong');
		   
		$(this).html('Pause<i style="margin-left:1em;" class="fa fa-pause"></i>');
		
		var songString =$(this).closest("#actionsongColumnHolder").find('#songpathString').html();
		
		audioTagId.src=songString;
		
		audioTagId.load();
		
		audioTagId.play();
		
		
	 
	 }else  if(playID==='PauseSong'){
	 
	    
	    $(this).attr('id','playSong');
		   
		$(this).html('Play<i style="margin-left:1em;" class="fa fa-play"></i>');
		
		audioTagId.pause();
	 
	 }
	 
	
	 
	
   

});	
	
     $(document).on("click","#register",function (event) {

        event.preventDefault();
	    event.stopPropagation();
	
	    $('.searchContainer').remove();
	    $('#mainContainer').empty();

	    document.getElementById("mainContainer").style.display = "none";
	
	    document.getElementById("uploadContainter").style.display = "none";
	
	    document.getElementById("loginContainter").style.display = "none";
	
	    document.getElementById("createnewUserContainter").style.display = "block";
		
	    document.getElementById('createUserAccountForm').reset();	
	
     
	
        $(".AccountError").html('');

     });

 
  
     	
     $(document).on("click","#loginButton",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	
	   $(".loginError").html('');
	
	
	   var userLogin = $("#loginuser").val();  
	   var passLogin = $("#loginpass").val();
	
	    var inputValues = $("#loginForm").find('input').val();
	
	    if(inputValues===''){
	
	         if(userLogin===''){
		 
		         $("#loginuserError").html('Oops incorrect username');
		    
		     }	else {
		 
		        $("#loginuserError").html('');
		 
	         }
		
		     if(passLogin===''){
		 
		          $("#loginpassError").html('Your password is wrong');
		    
		     }	else {
		 
		       $("#loginpassError").html('');
		 
	         }
			
	
	      }else {
	
		
	        datastring='userlogin=' + userLogin + '&passlogin=' +passLogin;
	
	
	           $.ajax({
		
	              data:datastring,
		          url: "process/systemlogin.php",		   
	              type: "POST"
			
	          }).done(function(loggedinResults){
	    
		          var loggedinData = JSON.parse(loggedinResults);
	    
	             if(loggedinData.loggedinStatus==='doesnotexist'){
               	
			        $('#loginresponseError').html('Either your username or password is not correct!!');			   
			   
                 }else if (loggedinData.loggedinStatus==='loggedin' &&  loggedinData.loggedinUserType==='Admin'){
               			  
			   
			   
		             $('body').ready(function(){ 
     
		 
	          $('body').load('views/mainContainers.html',function() {
	 
	        
	 
	        
      
           // load latest music

           $('#latestmusic').ready(function() {

             $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			    $('#latestmusic').append('<div style="cursor:pointer;display:inline-block;"  id="openActionDox" class="w3-col l3 m4 s6 w3-padding w3-left w3-margin-top"><div  style="height:250px;" ><div id="imageHolder" ><img class="w3-border" id="songImage"  style="width:100%;height:200px;" src='+Song.image_url+' ></div><center><div class="w3-margin-top" id="songDetails"><div id="songId">'+Song.id+'</div><div style="display:none;" id="download">'+Song.totaldownloads+'</div><div style="display:none;" id="artist">'+Song.artist+'</div></div><div id="songname">'+Song.songname+' by '+Song.artist+'</div><div style="display:none;" id="songname">'+Song.songname+'</div><div style="display:none;" id="songPath">'+Song.song_url+'</div></center></div></div>');
	 		
	          });
	 	
           });
   
		
	     });
      	  
	
	 
	 
	 
	     });  // End of the body load
	     
  
        });  // End of the body eady
  
			
			  
			   
                 }	 else if (loggedinData.loggedinStatus==='loggedin' &&  loggedinData.loggedinUserType==='Standard'){
               			  
			   
			   
	                $('body').ready(function(){ 
     
		 
	          $('body').load('views/mainContainers.html',function() {
				  
		       $('.subBody').css('display','block');
	 
	          // load topnav menu
              $('.topNav').ready(function() {

              $('.topNav').load('views/topmenuNormalUserLoggedIn.html'); 
			  
	         });
	 
	         
		      	   
		         $('body').ready(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('main.html');
	 		 
   
		
	     });
		 
		      $('#books').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('books.html');
	 		 
   
		
	     });
		           $('#getbooks').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('books.html');
	 		 
   
		
	     });
		       $('#getmedia').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('media.html');
	 		 
   
		
	     });
		   
		    $(document).on('click','#getevents',function() {
		 
		         $('#mainContainer').empty();
			 	 $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			    $('#mainContainer').append('<div class="w3-card-2 w3-display-container"  id="getevent_details" data-aos="zoom-in"><img src='+Song.image_url+' id="event_img" alt="Event Image"/> <div class="w3-display-topright w3-container " id="event_content"><span class="w3-animate-left"> <h4>MUSIC  CONCERT  </h4> <span> 22 March 2017</span></span> <div class="w3-display-bottomright w3-container "><button class="w3-animate-left" id="event_btn"> Event Details </button>  </div></div></div>');
				 
			
			
	          });
	 	
           });
		
	     });
		  
	     });  // End of the body load
	     
  
        });  // End of the body eady
  
			
			 			   
                 }	

			
	         
         });
	   
	   
	
	}
	

});
  
 // Create account button
	
	
	  
	$(document).on("click","#forwardtoStep2",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   var fname = $("#firstname").val();  
	   var lname = $("#lastname").val();
	   
	   if (fname=='' || lname == '' ){
	    
		   if(fname==''){
		   
		       $("#errorfname").css('display','inline-block');
			 
		   } else {
		   
		      $("#errorfname").css('display','none');
		  }
		   
		if(lname==''){
		   
		     $("#errorlname").css('display','inline-block');
			 
		        
		 } else {
		   
		      $("#errorlname").css('display','none');
		}
	   
	   } else {
	   
	      document.getElementById('signupmodal2').style.display='block';
	   
	   }
	
	   
    });
 
     $(document).on("keyup","#firstname",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#errorfname").css('display','none');
	   
	 
    });
 
     $(document).on("keyup","#phone",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#phoneerror").html('');
	 
     });
	 
	 $(document).on("keyup","#email",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#emailerror").html('');
	   
	 
    });
 
     $(document).on("keyup","#lastname",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#errorlname").css('display','none');
	   
	 
     });
 
     $(document).on("click","#forwardtoStep3",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   var uphone = $("#phone").val();  
	   var uemail = $("#email").val();
	   
	   if (uphone=='' || uemail == '' ){
	    
		   if(uphone==''){
		   
		       $("#phoneerror").html('Phone number is required');
			 
		   } else {
		   
		      $("#phoneerror").html('');
		  }
		   
		if(uemail==''){
		   
		     $("#emailerror").html('Phone number is required');
			 
		        
		 } else {
		   
		      $("#emailerror").html('');
		}
	   
	   } else {
	   
	      document.getElementById('signupmodal3').style.display='block';
	   
	   }
	
	   
    });
 
     
	 $(document).on("keyup","#user",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#usererror").html('');
	   
	 
    });
 
     $(document).on("keyup","#pass",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#passerror").html('');
	   
	 
     });
 
 
     $(document).on("click","#forwardtoStep4",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   var userL = $("#user").val();  
	   var passL = $("#pass").val();
	   
	   if (userL=='' || passL == '' ){
	    
		   if(userL==''){
		   
		       $("#usererror").html('User name is required');
			 
		   } else {
		   
		      $("#usererror").html('');
		  }
		   
		if(passL==''){
		   
		     $("#passerror").html('Password is required');
			 
		        
		 } else {
		   
		      $("#psserror").html('');
		}
	   
	   } else {
	   
	      document.getElementById('signupmodal4').style.display='block';
	   
	   }
	
	   
    });
 
     $(document).on("change","#profile_picture",function (event) {

         event.preventDefault();
	     event.stopPropagation();
	   
	    $("#profileerror").html('');
			
	   
	 
     });
 
     $(document).on("keyup","#accounttype",function (event) {

       event.preventDefault();
	   event.stopPropagation();
	   
	   $("#accounterror").html('');
	   
	 
     });
 
     $(document).on("click","#createaccountButton",function (event) {

         event.preventDefault();
	     event.stopPropagation();
		 
		 var imageProfile = $("#profile_picture").val();  
	     var accountclass = $("#accounttype").val();
		 
		 if (imageProfile==''|| accountclass==''){
		 
		   

			if (imageProfile==''){
			
			    $("#profileerror").html('Image is required');
				  
			} else {
			
			   $("#profileerror").html('');
			
			}
			
						
			if (accountclass==''){
						
			    $("#accounterror").html('Account class is required');
			
			}else {
			
			    $("#accounterror").html('');
			}
			
			
		 } else {
		 
		        var formDetails = $("#create_account_form")[0];		 		 
	
	            var dataObject = new FormData(formDetails);
								
			     $.ajax({
	
		           data:dataObject,
		           url: "process/createaccount.php",
		           enctype:'multipart/form-data',
			       processData:false,
		           contentType:false,
			       cache:false,
	               type: "POST",
				   
				   	xhr: function (){
				   
			   	       var xhr = new window.XMLHttpRequest();
		
		               xhr.upload.addEventListener('progress',function(evt){
					
			          if(evt.lengthComputable){
					  
			               var percent = (evt.loaded/evt.total) * 100;		
		                   var roundWidth = Math.round(percent);
						   
				           $('#loadingmodal').css('display','block');		       
                           $('#statusHeader').html(roundWidth + '%' + 'complete');

						  
                      }					  
					  
                 },false);
				
				 xhr.onload = function() {
	   
                 if (this.status == 200) {
		 
                       var resp = JSON.parse(this.response);
					   
					   var data = resp['statusResult'];
					   
					   $('#statusHeader').html(data); 
					   
					   if(data==='AccountCreated'){
					   
					       $('#statusHeader').html(100 + '%' + 'complete');
						   
						   // What happens after the account has been created. Put code below 
						   
						   setTimeout(function(){							
							
							  $('#loadingmodal').css('display','none');
							  $('#statusHeader').css('display','none');
							  $('#accountcreatedSuccessfulModal').css('display','block');
														 
							},3000);
							
							setTimeout(function(){							
							
							  $('#loadingmodal').css('display','none');
							  $('#statusHeader').css('display','none');
							  $('#logginuserModal').css('display','block');
														 
							},4000);
							
					   
					        setTimeout(function(){							
														  
							   $('#signupmodal').css('display','none');
							   
							   window.location.reload(true);
							   
							   
														 
							},5000);
					   
					   }else if (data==='AccountNotCreated') {
					   
					       $('#loadingmodal').css('display','none');

                            document.getElementById('signupmodal4').style.display='block';
							
							$('#signuperror').css('display','none');
							
							$('#signuperror').html('Your account has not been created. Revisist your details');

                           							
					   
					   }
					 
     
                    };
	
                };

			
				    return  xhr;
					 
				}
	
	             // End of new xhr function
			
		
                }); // End of ajax function
		
           }
    
     });

	
 	  
     $(document).on("click","#logout",function (event) {

        event.preventDefault();
	    event.stopPropagation();
	
       $.ajax({
		 
	       url: "process/applogout.php"		   
	  			
	    }).done(function(loggedoutResults){
	    
	    var loggedoutData = JSON.parse(loggedoutResults);
	    
	    if (loggedoutData.loggedoutStatus==='out'){
              			  
		   
            $('body').ready(function(){ 
     
		 
	           $('body').load('views/mainContainers.html',function() {
				 
			  $('.subBody').css('display','block');
	 
	          // load topnav menu
              $('.topNav').ready(function() {

              $('.topNav').load('views/topmenuNormalUser.html'); 
			  
	         });
	 
	          // load leftbar menu
              $('.leftBar').ready(function() {
        
                $('.leftBar').load('views/leftmenuLinksNormalUser.html',function(){
         
		      }); 
		
	       });
       		 
		   	   
		         $('body').ready(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('main.html.html');
	 		 
   
		
	     });
		  
		           $('#getbooks').click(function() {
			   
			  $('#mainContainer').empty();

             $('#mainContainer').load('books.html');
	 		 
   
		
	     });
		       $('#getmedia').click(function() {
			   
			  $('#mainContainer').empty();
			  $('#topNav2').empty();

             $('#topNav2').load('views/topNav2_audiomusic.html');
             $('#mainContainer').load('media.html');
	 		 
   
		
	     });
		  
	 
	     });  // End of the body load
	     
  
             });  // End of the body eady
  
			
			   
        }	

			
	         
    });
	   
	

});


	 $(document).on('click','#getaudiomusic',function() {
		         $('#container-floating').remove();
				 $('#top').empty();
				  $('#top').load('views/topnav_audiomusic.html');
		         $('.topNav2').empty();
		         $('.topNav2').load('views/topNav2_audiomusic.html');
		 
		         $('#mainContainer').empty();
			 	 $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			     // $('#mainContainer').append('<div id="music_container0" style="max-width:1600px;background-image:url(img/18.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;"><div class="" id="music_container" data-aos="zoom-in"> <div class="w3-col s12" id="music_container1"> <div class="w3-col s3 w3-animate-zoom" id="music_container2">  <img id="music_img" src='+Song.image_url+' alt=""/> </div> <div class="w3-col s9" id="music_container3">  <div id="music_song_title" class="w3-col l12 m12 s12" >'+Song.songname+'</div> <div id="music_artist_name" class="w3-col l12 m12 s12">'+Song.artist+'</div> <div id="music_album_title" class="w3-col l12 m12 s12"> Dont forget! </div><div id="music_downloads_container" class="w3-col l12 m12 s12"><span id="downloads_info">'+Song.totaldownloads+' Downloads</span></div> </div></div> </div></div>');
	 		 
			    $('#mainContainer').append('<div id="music_container0" style="max-width:1600px;background-image:url(img/18.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;padding-top:7px;"></div>');
				$('#music_container0').append('<div class="" id="music_container" data-aos="zoom-in"> <div class="w3-col s12" id="music_container1"> <div class="w3-col s3 w3-animate-zoom" id="music_container2">  <img id="music_img" src='+Song.image_url+' alt=""/> </div> <div class="w3-col s9" id="music_container3">  <div id="music_song_title" class="w3-col l12 m12 s12" >'+Song.songname+'</div> <div id="music_artist_name" class="w3-col l12 m12 s12">'+Song.artist+'</div> <div id="music_album_title" class="w3-col l12 m12 s12"> Dont forget! </div><div id="music_downloads_container" class="w3-col l12 m12 s12"><span id="downloads_info" class="fa fa-download">'+Song.totaldownloads+'</span> <span id="downloads_info" class="fa fa-thumbs-o-up">'+Song.totaldownloads+'</span> <span id="downloads_info" class="fa fa-star-o"></span><span id="downloads_info" class="fa fa-star-o"></span><span id="downloads_info" class="fa fa-star"></span> <span id="downloads_info" class="fa fa-star"></span><span id="downloads_info" class="fa fa-star"></span></div> </div></div> </div>');
	 		
			
			
	          });
	 	
           });
		
	     }); 
		 
		  $(document).on('click','#music_container0',function() {
			    
		 			  $('.topNav2').remove();
				  
		 			  $('#mainContainer').empty();
		 			   $('#mainContainer').load('scripts/audiomusic.html');
	 		 
		
	     }); 
		 
		 
		  $(document).on('click','#getaudiosermon',function() {
		 
		         $('#mainContainer').empty();
			 	 $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			     // $('#mainContainer').append('<div id="music_container0" style="max-width:1600px;background-image:url(img/18.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;"><div class="" id="music_container" data-aos="zoom-in"> <div class="w3-col s12" id="music_container1"> <div class="w3-col s3 w3-animate-zoom" id="music_container2">  <img id="music_img" src='+Song.image_url+' alt=""/> </div> <div class="w3-col s9" id="music_container3">  <div id="music_song_title" class="w3-col l12 m12 s12" >'+Song.songname+'</div> <div id="music_artist_name" class="w3-col l12 m12 s12">'+Song.artist+'</div> <div id="music_album_title" class="w3-col l12 m12 s12"> Dont forget! </div><div id="music_downloads_container" class="w3-col l12 m12 s12"><span id="downloads_info">'+Song.totaldownloads+' Downloads</span></div> </div></div> </div></div>');
	 		
			 
			 
			    $('#mainContainer').append('<div id="music_container0" style="max-width:1600px;background-image:url(img/17.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;padding-top:7px;"></div>');
				$('#music_container0').append('<div class="" id="music_container" data-aos="zoom-in"> <div class="w3-col s12" id="music_container1"> <div class="w3-col s3 w3-animate-zoom" id="music_container2">  <img id="music_img" src='+Song.image_url+' alt=""/> </div> <div class="w3-col s9" id="music_container3">  <div id="music_song_title" class="w3-col l12 m12 s12" >'+Song.songname+'</div> <div id="music_artist_name" class="w3-col l12 m12 s12">'+Song.artist+'</div> <div id="music_album_title" class="w3-col l12 m12 s12"> Dont forget! </div><div id="music_downloads_container" class="w3-col l12 m12 s12"><span id="downloads_info">'+Song.totaldownloads+' Downloads</span></div> </div></div> </div>');
	 		
			
			
	          });
	 	
           });
		
		  });



		   $(document).on('click','#books',function() {
		       $('.topNav').empty();
		       $('.topNav').load('views/books_topNav.html');
		       $('.topNav2').empty();
		       $('.topNav2').load('views/books_topNav2.html');
		         $('#mainContainer').empty();
			  $('#mainContainer').load('books.html');
	 		 
		
	     });
		 

		   
		   $(document).on('click','#editorial',function() {
		 
		         $('#mainContainer').empty();
			  $('#mainContainer').load('editorial.html');
	 		 
		
	     });
		 

		  
		   $(document).on('click', '#chats_all', function () {
		       $('.topNav').empty();
		       $('.topNav').load('views/chats_topNav.html');
		       $('.topNav2').empty();
		       $('.topNav2').load('views/chats_topNav2.html');
		 
		         $('#mainContainer').empty();
			 	 $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			     // $('#mainContainer').append('<div id="music_container0" style="max-width:1600px;background-image:url(img/18.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;"><div class="" id="music_container" data-aos="zoom-in"> <div class="w3-col s12" id="music_container1"> <div class="w3-col s3 w3-animate-zoom" id="music_container2">  <img id="music_img" src='+Song.image_url+' alt=""/> </div> <div class="w3-col s9" id="music_container3">  <div id="music_song_title" class="w3-col l12 m12 s12" >'+Song.songname+'</div> <div id="music_artist_name" class="w3-col l12 m12 s12">'+Song.artist+'</div> <div id="music_album_title" class="w3-col l12 m12 s12"> Dont forget! </div><div id="music_downloads_container" class="w3-col l12 m12 s12"><span id="downloads_info">'+Song.totaldownloads+' Downloads</span></div> </div></div> </div></div>');
	 		
			    $('#mainContainer').append('<div id="music_container0" style="max-width:1600px;background-color:rgba(0,0,0,0.05);background-repeat: no-repeat;background-attachment: fixed;background-position:center;background-size: cover;padding-top:7px;"></div>');
				$('#music_container0').append('<div class="" id="music_container" data-aos="zoom-in" style="border-radius:5px;height:50px;"> <div class="w3-col s12" id="music_container1" style="border-radius:1px;height:50px;background-color:rgba(0,0,0,0);box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.13); "> <div class="w3-col s2 w3-animate-zoom" id="music_container2" style="padding-left:3px;">  <img id="music_img" src='+Song.image_url+' alt="" style="border-radius:50%;height:45px;width:45px;"/> </div> <div class="w3-col s10" id="music_container3" style="padding-left:8px;padding-right:4px;">  <div id="music_song_title" class="w3-col l12 m12 s12"><div class="w3-col l11 m11 s11" style="color:gray;font-weight:600;">'+Song.songname+' </div> <div class="class="w3-col l1 m1 s1" style="color:green;"> on </div></div> <div id="music_artist_name" class="w3-col l11 m11 s11" style="color:#036696;">'+Song.artist+'</div>  <div class="class="w3-col l1 m1 s1" style="color:#036696;">* </div></div></div> </div>');
	 		
			
			
	          });
	 	
           });
		
	     });
		  
		
		  $(document).on('click','#getevent_details',function() {
			    
		 			  $('.topNav2').remove();
				  
		 			  $('#mainContainer').empty();
		 			   $('#mainContainer').load('scripts/event_chat.html');
	 		 
		
	     }); 
		    $(document).on('click','#hymns',function() {
		 
		         $('#mainContainer').empty();
			  	 $.getJSON('process/getlatestsongs.php',function(data){  
   	
	          $.each(data.SongDetails,function(i,Song) {
	 	  	 
			    $('#mainContainer').append('<div class="w3-card-2 w3-display-container"  id="getbook_details" data-aos="zoom-in"><img src='+Song.image_url+' id="event_img" alt="Event Image"/> <div class="w3-display-topright w3-container " id="event_content"><div class="w3-animate-left" style="background-color:rgba(0,0,0,0.5);width:100%;border-radius:10px;padding:5px;"> <h4>MUSIC  CONCERT  </h4> <span> 22 March 2017</span></div> <div class="w3-display-bottomright w3-container "><button class="w3-animate-left" id="event_btn"> Book Details </button>  </div></div></div>');
				 
			
			
	          });
	 	
           });
		
		    });



	  $(document).on('click','#getbook_details',function() {
			    
		 			  $('.topNav2').remove();
				  
		 			  $('#mainContainer').empty();
		 			   $('#mainContainer').load('scripts/book_chat.html');
	 		 
		
	     });
	  	 		 

	 	   
    

});


$(document).on('click', '#get_local_books', function () {

    $('.topNav2').remove();

    $('#mainContainer').empty();
    $('#mainContainer').load('books/local_books.html');


});

$(document).on('click', '#get_manual_of_bible_doctrines_english', function () {

    $('.topNav2').remove();

    $('#mainContainer').empty();
    $('#mainContainer').load('books/manual_of_bible_doctrines_english.html');


});
	   
	  	  
	   
	   $(document).on('click','#getuploadform',function (event) {
	    
	        event.preventDefault();
			
			 if ($('#uploadform').is(':visible')==true){
			 
			    
			 } else {
			 
			    document.getElementById('uploadmodal').style.display='block';
								
			 }

	    });
		
		  $(document).on('click','#sermonbtn',function (event) {
	    
	        event.preventDefault();
			
			 if ($('#sermonform').is(':visible')==true){
			 
			    
			 } else {
			 
			    document.getElementById('sermonmodal').style.display='block';
								
			 }

	    });
		
		   $(document).on('click','#eventbtn',function (event) {
	    
	        event.preventDefault();
			
			 if ($('#eventform').is(':visible')==true){
			 
			    
			 } else {
			 
			    document.getElementById('eventmodal').style.display='block';
								
			 }

	    });
		 


 