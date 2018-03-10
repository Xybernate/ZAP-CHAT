
  
$(document).on("click","#login",function (event) {
	   	 
		event.preventDefault();
		event.stopPropagation();
		
		$('#LoginForm').modal('show');
		  
		
		
	});
	
$(document).on("click","#register",function (event) {
	   	 
		event.preventDefault();
		event.stopPropagation();
		 
		$('#registerForm').modal('show');
		
		
});
		
$(document).on("click","#enterIntoSystem",function (event) {
	   	 
		event.preventDefault();
		event.stopPropagation();
		
		var username = $("#username").val();
		var pass = $("#password").val();
		   
		
		if($("#username").val() =="" || $("#password").val() =="") {
		  
		       alert('Enter valid username and password!!');
		  
		} else {
		  
		     
			   var datastring = 'login=' + username + '&userpass=' + pass;
			
			   $.ajax({
		
	               data:datastring,
			       url: "phpfiles/systemlogin.php",
	               type: "POST",
				   beforeSend:function(xhr){
				   
				      $("#enterIntoSystem").html('Logging in now......');			 
					 
				   }				   
	
	             }).done (function(data) {
			        
					if(data=='admin') {
					
					  $("#LoginForm").modal('hide');
					  
					  $("#register").css('display','none');
					   
					  $("#login").css('display','none');
					  
					  $("#logout").css('display','inline-block');

                      $(".editclass").css('display','inline-block');
					 
					  					  
					} else if (data=='normal') {  

					  $("#LoginForm").css('display','none');
					  
					 $("#LoginForm").modal('hide');
					  
					  $("#register").css('display','none');
					   
					  $("#login").css('display','none');
					  
					  $("#logout").css('display','inline-block');

                    						

					} else {
							
                      $("#enterIntoSystem").html('Enter');
					  
					  alert('Enter correct username and password');
					
			      }
					   
		     }).error(function(){
			   
			    $("#enterIntoSystem").html('Enter');
					  
			    alert('Enter correct username and password');
			 
			 }); 
		}
		
		 
		
		
		
	});
	
$(document).on("click","#postNewAccount",function (event) {
	   	 
		event.preventDefault();
		event.stopPropagation();
		 
		var usercompany = $('#company').val();
		var fullnames = $('#fullname').val();
		var userpass = $('#newpassword').val();
		var user = $('#newusername').val();
		var user = $('#newpassword').val();
		
	});
  
$(document).on("click","#logout",function (event) {
	   	 
		  event.preventDefault();
		  
		  $.post("phpfiles/logout.php",function(data) {
			  
			    if(data=="out"){
				
				    $("#register").css('display','inline');
					   
					$("#login").css('display','inline');
					  
					$("#logout").css('display','none');

                    $(".editclass").css('display','none');				
				
			    } else {
					
					alert("You are still logged in");
					
				}
	        
			});
	
			 
	});
	 
 // Open form for editing navbar Brand
  
$(document).on("click","#editnavbarBrandText",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#brandTextEditForm').modal('show');  
		 
});

// Post editing navbar Brand
  
$(document).on("click","#postnewBrandText",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
	
	var newBrandText = $('#brandText').val();
  
    $('#navbarBrandText').html(newBrandText + '<i style="margin-left:0.15em;" id="editnavbarBrandText" class="fa fa-edit editclass"></i>');
	
	$('#brandTextEditForm').modal('hide');

    	
		 
});
	 
 
 
 // Open new who we are paragraph content
 
 $(document).on("click","#newwhoweareParagraph",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#whoweareParagaph').modal('show');  
		 
});

 
 // Open new who we are paragraph one
 
 $(document).on("click","#postnewwhoweAreParagraph",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#whowearenewParagraph').val() +'<i id="editParagraph" style="margin-left:0.15em;cursor:pointer;" class="fa fa-edit editclass"></i>';
		 
});

 // Open new who we are paragraph one
 
 $(document).on("click","#openwhoweareParagraph1Form",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
	
	$('#whoweareparagraphContent1').val('');
  
    $('#whoweareContent1').modal('show');  
		 
});

 // Post new who we are paragraph one
  
$(document).on("click","#postnewwhoweAreParagraph1Content",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
	
	if($('#whoweareparagraphContent1').val()==''){
	
	  alert('Enter new content');
	  
	} else {
	
	 var category = 'whoweareParagraph1';
	 
	 var newwhoweareParagraph1 = $('#whoweareparagraphContent1').val() + '<i id="openwhoweareParagraph1Form" style="margin-left:0.15em;cursor:pointer;" class="fa fa-edit editclass"></i>';
  
     var datastring = 'newhoweareparagraph1=' + newwhoweareParagraph1+ '&groupelement=' + category;
	
	
	 $.ajax({
		
        data:datastring,
        type: "POST",		
	    url: "phpfiles/whoweareparagraph1.php"
	             
	
	}).done(function(data) {
	
	   if(data=='done'){
	   
	     $('#whoweareParagraph1').html(newwhoweareParagraph1);
	     $('#whoweareContent1').modal('hide');
	   
	   } else if (data=='notdone'){ 

          alert('Update has not been done. Re-enter your content');

       }
	
	}).error(function(data) {
	
	   alert('No update has been done. Something is wrong with the system');
	
	});
	
	
    }
    	
		 
});

// Open new who we are paragraph two
 
 $(document).on("click","#openwhoweareParagraph2Form",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
	
    $('#newwhoweareParagraphContent2').val();
	
    $('#whoweareContent2').modal('show');  
		 
});

 // Post new who we are paragraph two
  
$(document).on("click","#postnewwhoweAreText2",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
	
	
    if($('#newwhoweareParagraphContent2').val() ==''){
	
	  alert('Enter new content');
	  
	} else {
	
	 var category = 'whoweareParagraph2';
	 
	 var newwhoweareParagraph2 = $('#newwhoweareParagraphContent2').val() + '<i id="openwhoweareParagraph2Form" style="margin-left:0.15em;cursor:pointer;" class="fa fa-edit editclass"></i>';
  
     var datastring = 'newhoweareparagraph2=' + newwhoweareParagraph2+ '&groupelement=' + category;
	
	
	 $.ajax({
		
        data:datastring,
        type: "POST",		
	    url: "phpfiles/whoweareparagraph1.php"
	             
	
	}).done(function(data) {
	
	   if(data=='done'){
	   
	     $('#whoweareParagraph2').html(newwhoweareParagraph2);
	
	     $('#whoweareContent2').modal('hide');
	   
	   } else if (data=='notdone'){ 

          alert('Update has not been done. Re-enter your content');

       }
	
	}).error(function(data) {
	
	   alert('No update has been done. Something is wrong with the system');
	
	});
	
	
    }
    	
    

    	
		 
});

// Post service1 form
 
 $(document).on("click","#openservice1",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#service1Form').modal('show');  
		 
});


//Post service1 content
  
$(document).on("click","#openaccountingparagraphForm",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
	
	$('#service1Content').modal('show'); 
		 
});

// Post service 2 title form
 
 $(document).on("click","#openservice2",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#service2Form').modal('show');  
		 
});

// Post service 2 content form
 
 $(document).on("click","#openservice2Content",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#service2Content').modal('show');  
		 
});

// Post service 3 title form
 
 $(document).on("click","#openservice3title",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#service3titleForm').modal('show');  
		 
});

// Post service 3 content form
 
 $(document).on("click","#openservice3Content",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#service3Content').modal('show');  
		 
});
	 
	 
	 
// Open new client content form
 
 $(document).on("click","#openclientContentForm",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#clientContentForm').modal('show');  
		 
});

// Open new team content form
 
 $(document).on("click","#openteamContentForm",function (event) {
	   	 
    event.preventDefault();
    event.stopPropagation();
  
    $('#teamContentForm').modal('show');  
		 
});
	 
 
  