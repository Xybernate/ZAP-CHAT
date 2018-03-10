 

$(document).ready(function(){

  $.getJSON('process/gettopformostdownloaded.php',function(data){  
   
    if(numofSongs > 0){
	
	$.each(data.SongDetails,function(i,Song) {
	 
	   $('#topmostDownloadsHeading').append('<h4>Most Downloaded <strong style="color:red;" class="">HOT!!</strong></h4>');
	   
	   $('#hotmusic').append('<div style="cursor:pointer;display:inline-block;"  id="openActionDox" class="w3-margin-top w3-col l3 m4 s6 w3-padding w3-left"><div  style="height:250px;" ><div id="imageHolder" ><img class="w3-border" id="songImage"  style="width:100%;height:200px;" src='+Song.image_url+' ></div><center><div class="w3-margin-top" id="songDetails"><div id="songId">'+Song.id+'</div><div style="display:none;" id="download">'+Song.totaldownloads+'</div><div style="display:none;" id="artist">'+Song.artist+'</div></div><div id="songname">'+Song.songname+' by '+Song.artist+'</div><div style="display:none;" id="songname">'+Song.songname+'</div><div style="display:none;" id="songPath">'+Song.song_url+'</div></center></div></div>');

	 
	 
	   // $('#hotmusic').append('<div style="cursor:pointer;" data-aos="zoom-in" id="openActionDox" class="w3-col l3 m4 s6 w3-padding w3-left"><img id="songImage" data-aos="zoom-in" style="width:100%;height:100px;" src='+Song.image_url+' ><div id="artistContainer" class="w3-margin-top"><center><p id="songId">'+Song.id+'</p><p id="artist">'+Song.artist+'</p></center></div><div  id="songContainer"  class="w3-margin-top"><center><p id="songname">'+Song.songname+'</p><p style="display:none;" id="songPath">'+Song.song_url+'</p></center></div><div  id="songContainer"  class="w3-margin-top"></div></div></div>');
		
	 });
	 
	} else {
	
	
	}
	
	
  });
   
});


 function openUpload() {
    
	document.getElementById('uploadform').reset();
	
	$(".Error").html('');
	
    document.getElementById("uploadmodal").style.display = "block";
   
  }
  
$(document).on("click","#register",function (event) {

    event.preventDefault();
	event.stopPropagation();
	
	$('#searchContainer').remove();
	$('#mainContainer').empty();

	document.getElementById("mainContainer").style.display = "none";
	
	document.getElementById("uploadContainter").style.display = "none";
	
	document.getElementById("loginContainter").style.display = "none";
	
	document.getElementById("createnewUserContainter").style.display = "block";
		
	document.getElementById('createUserAccountForm').reset();	
	
    document.getElementById("createUserAccountBox").style.display = "block";
	
    $(".AccountError").html('');

});

$(document).on("click","#closecreateUserAccountBox",function (event) {

    event.preventDefault();
	event.stopPropagation();

    document.getElementById("createUserAccountBox").style.display = "none";


});

$(document).on("click","#login",function (event) {

    event.preventDefault();
	event.stopPropagation();
	
	$('#searchContainer').remove();
	$('#mainContainer').empty();
	
	document.getElementById("mainContainer").style.display = "none";
	
	document.getElementById("uploadContainter").style.display = "none";
	
	document.getElementById("loginContainter").style.display = "block";
	
	document.getElementById("createnewUserContainter").style.display = "none";
		
	document.getElementById('loginForm').reset();	
	
    document.getElementById("loginBox").style.display = "block";

});
  
$(document).on("click","#createaccountButton",function (event) {

    event.preventDefault();
	event.stopPropagation();
	
	
	
	$(".AccountError").html('');
	
	
	var user = $("#username").val();  
	var pass = $("#pass").val();
	var mobile = $("#phone").val();
	var address = $("#location").val();
	
	var emailStatus = $("#email").val();
	
	var email = checkifemailisEmpty(emailStatus);
	
	var inputValues = $("#createUserAccountForm").find('input').val();
	
	if(inputValues===''){
	
	     if(user===''){
		 
		     $("#usernameError").html('Enter your username');
		    
		 }	else {
		 
		    $("#usernameError").html('');
		 
	    }
		
		 if(pass===''){
		 
		     $("#passError").html('Enter your password');
		    
		 }	else {
		 
		    $("#passError").html('');
		 
	    }
		
		 if(mobile===''){
		 
		     $("#phoneError").html('Enter your mobile phone');
		    
		 }	else {
		 
		    $("#phoneError").html('');
		 
	    }

         if(address===''){
		 
		     $("#locationError").html('Enter your location');
		    
		 }	else {
		 
		 
		 
		    $("#locationError").html('');
		 
	    }
		
		
	
	}else {
	
	
	      datastring='user=' + user + '&pass=' +pass+ '&mobile='+mobile+'&address='+address+'&email='+email;
	
	      $.ajax({
		
	           data:datastring,
		       url: "process/createaccount.php",		   
	           type: "POST"
			
	      }).done(function(results){
	    
		     var newaccountData = JSON.parse(results);
	    
	         if(newaccountData.successStatus==='Insertion'){
               			   
			   document.getElementById("createUserAccountBox").style.display = "none";
			   
			   document.getElementById("logindialogAfterCreation").style.display = "block";
			   
			   
             }else if (newaccountData.successStatus==='noInsertion'){

               
			   $('#responseError').html(' Your account has not been created.Check your details!!');
			   
			   
             }	

			
	         
         });
	   
	
	}
	

});
     
$(document).on("click","#closelogindialogAfterCreation",function (event) {

    event.preventDefault();
	event.stopPropagation();			
	
    document.getElementById("logindialogAfterCreation").style.display = "none";

});
   
 $(document).on("keyup","#username",function (event) {
	  
	 event.preventDefault();
	 event.stopPropagation();
	 	
	 
	 var usernameResults = $(this).val();
	 
	 var getuserNameStatus = checkusernameAvailability(usernameResults);
	  
	
	 if(getuserNameStatus==='notavailable'){
			 		
		$('#notavailableStatus').html('Account is not available');
		$('#createaccountButton').prop('disabled',true);
			 
	}else if (getuserNameStatus==='available') {
			 	 
		$('#availableStatus').html('Account is available');
		
		$('#createaccountButton').prop('disabled',false);
			 
			 
	} else if ( getuserNameStatus===''){
	
	   $('#createaccountButton').prop('disabled',true);
	
	}
	 
	 
	
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
		 
		     $("#loginuserError").html('Enter your valid username');
		    
		 }	else {
		 
		    $("#loginuserError").html('');
		 
	    }
		
		 if(passLogin===''){
		 
		     $("#loginpassError").html('Enter your valid password');
		    
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
               			  
			   
			   $('#logout').css('display','inline');
               $('#register').css('display','none');
               $('#login').css('display','none');
               $('#administratorPortal').css('display','inline'); 
			   $('#uploadButton').css('display','inline');	   
			   
			   $("#loginBox").css('display','none');
			  
			   
             }	 else if (loggedinData.loggedinStatus==='loggedin' &&  loggedinData.loggedinUserType==='Standard'){
               			  
			   
			    $('#logout').css('display','inline');
                $('#register').css('display','none');
                $('#login').css('display','none'); 			   
			    $("#loginBox").css('display','none');
			 			   
             }	

			
	         
         });
	   
	   
	
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
               			  
			   
		  $('#logout').css('display','none');
          $('#register').css('display','inline');
          $('#login').css('display','inline');	
		  $('#uploadButton').css('display','none');
		  
			   
			   
        }	

			
	         
    });
	   
	

});
  
   
$(document).on("click","#closeloginBox",function (event) {

    event.preventDefault();
	event.stopPropagation();	
		
	
    document.getElementById("loginBox").style.display = "none";

});
  
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
		
		 $('#relatedSongs h4').html('Songs related to - ' +artistName);
		 
		 $('#songsRelatedToTheArtist').empty();
		 
		 var datastring ='chosenArtist='+artistName;
		
		
		  $.ajax({
		
	           data:datastring,
		       url: "process/getotherArtistSong.php",		   
	           type: "POST"
			
	      }).done(function(results){
	 
	           var data = JSON.parse(results);
			 
		       $.each(data.SongDetails,function(i,Song) {
	 
	              $('#songsRelatedToTheArtist').append('<div style="cursor:pointer;display:inline-block;"  id="openActionDox" class="w3-col l3 m4 s6 w3-padding w3-left"><div  style="height:270px;" ><div id="imageHolder" ><img class="w3-border" id="songImage"  style="width:100%;height:200px;" src='+Song.image_url+' ></div><center><div class="w3-margin-top" id="songDetails"><div id="songId">'+Song.id+'</div><div style="display:none;" id="download">'+Song.totaldownloads+'</div><div style="display:none;" id="artist">'+Song.artist+'</div></div><div id="songname">'+Song.songname+' by '+Song.artist+'</div><div style="display:none;" id="songname">'+Song.songname+'</div><div style="display:none;" id="songPath">'+Song.song_url+'</div></center></div></div>');
	 
	           });
	   
        });
		
		
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
	
$(document).on("click","#backtomainstageButton",function (event) {
	  	 
        event.preventDefault();
		event.stopPropagation();
		
		backhome();
	
});
	
$(document).on("click",".ratingsCheckBox",function (event) {
	  
	 event.preventDefault();
	 event.stopPropagation();
	
	 //var checkedBoxId = $(this).attr('id');
	
	 var checkedBoxRatingClass = $(this).attr('ratingclass');
		
	 var songIdSelected =  $(this).closest('#actionsongColumnHolder').find('#songId').html();
	 	
	 var datastring='ratingId='+checkedBoxRatingClass+'&songId='+songIdSelected;
	 
	 
	 $.ajax({
		
	        data:datastring,
		    url: "process/postSongRatings.php",		   
	        type: "POST"
			
	 }).done(function(data){
	 
	    if(data==='RatingInserted'){ 

		 		 
		} else if ( data==='RatingNotInserted'){  
		 
		 
		 
		}
	 
	 
	});
	
	
	
	
});
	
// Search values for song
	
$(document).on("keyup","#searchButton",function (event) {
	  
	 event.preventDefault();
	 event.stopPropagation();
	 
	
	 
	 var searchResults = $(this).val();
	 
	 if(searchResults=='') {
	 
	      backhome();
	 
	  } else if ( searchResults !='' ) {
	 
	    clearRoWforSearchResults();
		
		  $('#searchResultsRow').empty();
		
		$('#searchResultsHeader').css('display','block');
		
        $('#searchResultsRow').css('display','block');
  
		
		datastring ='searchValue='+searchResults;
		
		$.ajax({
		
	           data:datastring,
		       url: "process/searchmusic.php",		   
	           type: "POST"
			
	      }).done(function(results){
	 
	           var data = JSON.parse(results);
			 
		       $.each(data.SongDetails,function(i,Song) {
	 
	              $('#searchResultsRow').append('<div style="cursor:pointer;display:inline-block;" data-aos="zoom-in" id="searchedopenActionDox" class="w3-col l3 m4 s6 w3-padding w3-left"><div  style="height:270px;" ><div id="imageHolder" ><img class="w3-border" id="songImage" data-aos="zoom-in" style="width:100%;height:200px;" src='+Song.image_url+' ></div><center><div class="w3-margin-top" id="songDetails"><div style="display:none;" id="download">'+Song.totaldownloads+'</div><div id="songId">'+Song.id+'</div><div style="display:none;" id="artist">'+Song.artist+'</div></div><div id="songname">'+Song.songname+' by '+Song.artist+'</div><div style="display:none;" id="songname">'+Song.songname+'</div><div style="display:none;" id="songPath">'+Song.song_url+'</div></center></div></div>');
	 
	           });
	   
        });

	 
	 }
	
	
});

$(document).on("click","#administratorPortal",function (event) {

   
   $('#searchContainerMobile').css('display','none');
   $('#searchContainer').css('display','none');
   $('#mainContainer').css('display','none');
   $('#searchAdminContainerMobile').css('display','block');
   $('#AdminSongsContainer').css('display','block');
   
   $.ajax({
	
		url: "process/getSongsAsAdmin.php"	   
	          			
	}).done(function(resultsSongs){
  
       var dataSongs = JSON.parse(resultsSongs);
	   
	   var numSongs = dataSongs.numofSongs;
	 
	   if (numSongs > 0) {
	     
		  
		  $('#AdminSongsContainer').empty();
		  
		  $('#AdminSongsContainer').append('<table id="listofSongs" class="w3-table w3-bordered"><tr id="listSongHeader"><th>Song ID</th><th>Song Name</th><th>Album</th><th>Downloads</th><th>Payment Status</th><th>Posting Date</th><th>Action</th></tr></table>');
	   
	       $.each(dataSongs.SongDetails,function(i,Song) {
	 
	              $('#listofSongs').append('<tr id="'+Song.id+'"><td>'+Song.id+'</td><td>'+Song.songname+'</td><td>'+Song.album+'</td><td>'+Song.totaldownloads+'</td><td>'+Song.paystatus+'</td><td>'+Song.postingdate+'</td><td><button id="freesong" class="w3-btn w3-blue">Free</button><button id="paidsong" class="w3-btn w3-orange">Paid</button></td></tr>');
	 
	       });
	   
	   } else {
	   
	   
	   
	   }
	
    });
 
 
});
	
$(document).on("keyup","#searchAdminButton",function (event) {
	  
	 event.preventDefault();
	 event.stopPropagation();
	 	
	 
	 var searchAdminResults = $(this).val();
	 
	 if(searchAdminResults=='') {
	 
	      backAdminHome();
	 
	  } else if ( searchAdminResults !='' ) {
	 
		datasstringAdmin ='searchAdminValue='+searchAdminResults;
		
		$.ajax({
		
	           data:datasstringAdmin,
		       url: "process/searchedSongsAsAdmin.php",		   
	           type: "POST"
			
	      }).done(function(resultsAdminSongs){
	 
	         var dataSongs = JSON.parse(resultsAdminSongs);
	   
	         var numSongs = dataSongs.numofSongs;
	 
	         if (numSongs > 0) {
	     
		  
		       $('#AdminSongsContainer').empty();
		  
		       $('#AdminSongsContainer').append('<table id="listofSongs" class="w3-table w3-bordered"><tr id="listSongHeader"><th>Song ID</th><th>Song Name</th><th>Album</th><th>Downloads</th><th>Payment Status</th><th>Posting Date</th><th>Action</th></tr></table>');
	   
	           $.each(dataSongs.SongDetails,function(i,Song) {
	 
	                $('#listofSongs').append('<tr id="'+Song.id+'"><td>'+Song.id+'</td><td>'+Song.songname+'</td><td>'+Song.album+'</td><td>'+Song.totaldownloads+'</td><td>'+Song.paystatus+'</td><td>'+Song.postingdate+'</td><td><button id="freesong" class="w3-btn w3-blue">Free</button><button id="paidsong" class="w3-btn w3-orange">Paid</button></td></tr>');
	 
	          });
	   
	          } else {
	   
	   
	   
	          }
	
	   
        });

	 
	 }
	
	
});
	
$(document).on("click","#searchedopenActionDox",function (event) {

        
	  	 
        event.preventDefault();
		event.stopPropagation();
			
		
		$('#topmostDownloadsHeading').css('display','none');
		
		$('#hotmusic').css('display','none');
		
		$('#latestsongsHeading').css('display','none');
		
		$('#latestmusic').css('display','none');
		
		$('#searchResultsRow').css('display','none');
		
		$('#searchResultsHeader').css('display','none');
		
		$('#searchedclickedSong').css('display','block');
						
		var artistName =  $(this).find('#artist').html();
				
		var songName =  $(this).find('#songname').html();
		
		var songPath =  $(this).find('#songPath').html();
				
		var songid =  $(this).find('#songId').html();
		
		var songDownload =  $(this).find('#download').html();		
					
		var songimagePath =  $(this).find('#songImage').attr('src');
		
		$('#searchedclickedsongImage').empty();
				
		
		$('#searchedclickedsongImage').append('<div id="imageColumnHolder" class="w3-col l3 m3 s3 w3-padding"></div><div id="actionsongColumnHolder" class="w3-col l6 m12 s12 w3-padding"></div>');
		
		$('#imageColumnHolder').append('<img class="w3-border"  id="songImage" style="width:211px;height:250px;" src='+songimagePath+'>');
		
		$('#actionsongColumnHolder').append('<div id="songNameAndArtist" class="w3-section">'+songName+'</div><div id="downloadButtonContainer" class="w3-section"><p id="songId">'+songid+'</p><a  id="playSong" songroute='+songPath+' class="w3-btn w3-orange  playPauseControl">Play<i style="margin-left:1em;" class="fa fa-play"></i></a><a href="process/filedownload.php?file=../'+songPath+' && songid='+songid+'"  id="downloadSong" class="w3-btn w3-blue">Download('+songDownload+' downloads)<i style="margin-left:1em;" class="fa fa-download"></i></a></div><div style="display:none;" id="commentBoxContainer" class="w3-section"><input class="w3-input w3-border" placeholder="Comment on your song and place Enter key to post"></div><div class="w3-section"><p style="display:none;" id="songpathString">'+songPath+'</p></div><div class="w3-section"><div class="w3-margin-top"><p style="font-type:italics;">Share</p></div><div class=""><button class="w3-btn w3-blue"><i class="fa fa-facebook"></i></button><button id="twitterButton" class="w3-btn w3-red"><i class="fa fa-twitter"></i></button></div>');
		
		//$('#titleAndsong').append('<div class="w3-left" id="songNameAndArtist">'+songName+' done by '+artistName+'</div>');
		
		//$('#downloadButtonContainer').append('<button id="downloadSong" class="w3-btn w3-blue">Download<i style="margin-left:1em;" class="fa fa-download"></i></button>');
		
		//$('#clickedsongImage').append('<center><div data-aos="zoom-in" style=""><div style="width:212px;height:250px;display:inline-block;" class=""><img data-aos="zoom-in" id="songImage" style="width:211px;height:250px;" src='+songimagePath+' ></div><div style="display:inline-block;" class="w3-padding" id="clickedsongData"><p id="songNameAndArtist">'+songName+' done by '+artistName+'</p><p style="display:none;" id="songpathSection" songurl='+songPath+'>'+songPath+'</p><button id="downloadSong" class="w3-btn w3-blue">Download<i style="margin-left:1em;" class="fa fa-download"></i></button><div id="socialIcons" class="w3-margin-top"><button class="w3-red w3-btn">Share<i style="margin-left:1em;" class="fa fa-share"></i></button></div></center>');
		
		 $('#searchedrelatedSongs h4').html('Songs related to - ' +artistName);
		 
		 $('#searchedsongsRelatedToTheArtist').empty();
		 
		 var datastring ='chosenArtist='+artistName;
		
		
		  $.ajax({
		
	           data:datastring,
		       url: "process/getotherArtistSong.php",		   
	           type: "POST"
			
	      }).done(function(results){
	 
	           var data = JSON.parse(results);
			 
		       $.each(data.SongDetails,function(i,Song) {
	 
	              $('#searchedsongsRelatedToTheArtist').append('<div style="cursor:pointer;display:inline-block;"  id="searchedopenActionDox" class="w3-col l3 m4 s6 w3-padding w3-left"><div  style="height:270px;" ><div id="imageHolder" ><img class="w3-border" id="songImage"  style="width:100%;height:200px;" src='+Song.image_url+' ></div><center><div style="display:none;" id="download">'+Song.totaldownloads+'</div><div class="w3-margin-top" id="songDetails"><div id="songId">'+Song.id+'</div><div style="display:none;" id="artist">'+Song.artist+'</div></div><div id="songname">'+Song.songname+' by '+Song.artist+'</div><div style="display:none;" id="songname">'+Song.songname+'</div><div style="display:none;" id="songPath">'+Song.song_url+'</div></center></div></div>');
	 
	         });
	   
        });
		
		
});
	
function backhome(){

   var audioTagId = document.getElementById('audioPlayer');
   
   audioTagId.pause();
   
  $('#searchAdminContainerMobile').css('display','none');
  
  $('#AdminSongsContainer').css('display','none');
  
  $('#searchContainerMobile').css('display','block');
  
   $('#searchContainer').css('display','block');

  $('#mainContainer').css('display','block');
		
  $('#topmostDownloadsHeading').css('display','block');
		
  $('#hotmusic').css('display','block');
		
  $('#latestsongsHeading').css('display','block');
		
  $('#latestmusic').css('display','block');
		
  $('#clickedSong').css('display','none');
  
  $('#searchResultsHeader').css('display','none');
		
  $('#searchResultsRow').css('display','none');
  
  $('#searchedclickedSong').css('display','none');
  
    document.getElementById("uploadContainter").style.display = "none";
	
	document.getElementById("loginContainter").style.display = "none";
	
	document.getElementById("createnewUserContainter").style.display = "none";
	
	
    $(".AccountError").html('');
 

}
	
function backAdminHome () {

 $('#searchContainerMobile').css('display','none');
   $('#searchContainer').css('display','none');
   $('#mainContainer').css('display','none');
   $('#searchAdminContainerMobile').css('display','block');
   $('#AdminSongsContainer').css('display','block');
   
   $.ajax({
	
		url: "process/getSongsAsAdmin.php"	   
	          			
	}).done(function(resultsSongs){
  
       var dataSongs = JSON.parse(resultsSongs);
	   
	   var numSongs = dataSongs.numofSongs;
	 
	   if (numSongs > 0) {
	     
		  
		  $('#AdminSongsContainer').empty();
		  
		  $('#AdminSongsContainer').append('<table id="listofSongs" class="w3-table w3-bordered"><tr id="listSongHeader"><th>Song ID</th><th>Song Name</th><th>Album</th><th>Downloads</th><th>Payment Status</th><th>Posting Date</th><th>Action</th></tr></table>');
	   
	       $.each(dataSongs.SongDetails,function(i,Song) {
	 
	              $('#listofSongs').append('<tr id="'+Song.id+'"><td>'+Song.id+'</td><td>'+Song.songname+'</td><td>'+Song.album+'</td><td>'+Song.totaldownloads+'</td><td>'+Song.paystatus+'</td><td>'+Song.postingdate+'</td><td><button id="freesong" class="w3-btn w3-blue">Free</button><button id="paidsong" class="w3-btn w3-orange">Paid</button></td></tr>');
	 
	       });
	   
	   } else {
	   
	   
	   
	   }
	
    });
 
 



}	
	
function clearRoWforSearchResults(){

     $('#mainContainer').css('display','none');

}
	
function uploadProcess (form) {
   
		  
		var dataObject = new FormData(form);
			 
		$.ajax({
		
	        data:dataObject,
		    url: "uploadfiles.php",
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
				
		          $('#progressBar').css('display','inline-block');
		          $('#progressBar').css('background','green');
		          $('#progressBar').css('width',roundWidth+'%');
                  $('#progressBar').html(roundWidth + '%' + 'complete');					  
				 	  
				
			      }					  
					  
			    },false);
				
				xhr.onload = function() {
	   
                 if (this.status == 200) {
		 
                       var resp = JSON.parse(this.response);
					   
					   var data = resp['responseResult'];
					   
					   
					   
					  if(data=='songexistsalready'){
				
				
                          $('#progressBar').css('display','none');					
				          $('#statusBar').html('No upload as the song has already been uploaded!');
				
			          }

					   if(data=='imagenotcorrectfile'){
				
				
                          $('#progressBar').css('display','none');					
				          $('#statusBar').html('No upload as your image is not either jpg,jpeg or png format!');
				
			           }
			
			          if(data=='songnotcorrectfile'){
				
				
                           $('#progressBar').css('display','none');					
				           $('#statusBar').html('No upload as your song is not either mp3 or wav!');
				
			          }
			
			
			          if(data=='imageANDsongnotcorrectfile'){
				
				
                          $('#progressBar').css('display','none');					
				          $('#statusBar').html('No upload as neither your song nor image is in the correct format. Song should be mp3 or wav format. Image should be in the jpg,jpeg or png format !');
				
			          }
			
			
			          if(data=='imagenotcorrectfile'){
				
				
                           $('#progressBar').css('display','none');					
				           $('#statusBar').html('Something went wrong!No upload as your image is not in the correct format.');
				
			          }
		
			          if(data=='uploadsuccessful'){
						
				           $('#statusBar').html('Your upload is successfull');
				
				           document.getElementById('uploadform').reset();
				
			          }
								  
			          if(data=='uploadnotsuccessful'){
				
				
                         $('#progressBar').css('display','none');					
				         $('#statusBar').html('Something went wrong!Your upload was not successfull.');
				
			          }
								  
			           if(data=='imagefilecorrupt'){
								  
				
				            $('#progressBar').css('display','none');				
				            $('#statusBar').html('Something went wrong!Your image maybe corrupt. No upload has been done');
			           }
								  
			          if(data=='songfilecorrupt'){
								  
				            $('#progressBar').css('display','none');				
				            $('#statusBar').html('Something went wrong!Your song maybe corrupt. No upload has been done.');
			  
			           }
			
			           if(data=='bothimagesongfilecorrupt'){
								  
				           $('#progressBar').css('display','none');				
				           $('#statusBar').html('Something went wrong!Both your image and song maybe corrupt. No upload has been done.');
			  
			           }
			        
     
                    };
	
                };

			
				    return  xhr;
					 
				}
	
	       });
						
						
   
    }
		 
function uploadProcessQuery(form){
      
	  var dataObject1 = new FormData(form);
	  
	  var xhr = new window.XMLHttpRequest();
	  
       xhr.open('POST', 'uploadtest.php', true);
	   
	   xhr.onload = function() {
	   
         if (this.status == 200) {
		 
           var resp = JSON.parse(this.response);

           console.log('Server got:', resp);
     
          };
	
       };

	   xhr.send(form);	  

    }	
	
function checkifemailisEmpty(email){
 
      var checkmail;
	  
      if(email===''){
		 
		   var checkmail='No Email';
		    
		 }	else {
		 
		   checkmail=email;
		 
	    }
   
      return checkmail;

}

function checkusernameAvailability(proposedName){
      	
	var useravailabilityStatus;
	
	if(proposedName==='') {
	 	     
	    $('#notavailableStatus').html('');
		
		$('#availableStatus').html('');
		
		useravailabilityStatus='';
		
		
	} else if (proposedName !='' ) {
	 	 
        
		datastring ='suggestedName='+proposedName;
		
		$.ajax({
		
	           data:datastring,
		       url: "process/useraccountAvailability.php",		   
	           type: "POST",
			   async:false
			
	      }).done(function(avilableResults){
	 
	         var statusData = JSON.parse(avilableResults);
			 
			 useravailabilityStatus=statusData.Status;
			 			 
				   
         });
	
	
	}
	
	 return useravailabilityStatus;
	
	
}

function openSideBar(){

   document.getElementById('sidebarMenu').style.display="block";

}

function closeSideBar(){

   document.getElementById('sidebarMenu').style.display="none";

}

