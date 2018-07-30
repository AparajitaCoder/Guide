// JavaScript Document

//******Form Validation*********

(function($,W,D)
{
    var JQUERY4U = {};
    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
      //Name validation
      $.validator.addMethod("nameRegex", function(value, element) {
              return this.optional(element) || /^[a-zA-Z\' ']+$/i.test(value);
      }, "Only letters, or spaces allowed");
	  
      //Mobile validation	  
	  $.validator.addMethod("telRegex", function(value, element) {
              return this.optional(element) || /^[0-9]{10,10}$/i.test(value);
      }, "Only Numbers are allowed");
	  
      //Email validation
	  $.validator.addMethod("emailRegex", function(value, element) {
              return this.optional(element) || /^^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/i.test(value);
      }, "Enter valid email address");
      $("#contact-form").validate({
         rules: {
            txt_name: {
            required: true,
            nameRegex: true           
          },
          txt_city: {
            required: true,
            nameRegex: true
          },
          txt_email: {
            required: true,
            emailRegex: true
          },		  
          txt_tel: {
            required: true,
			minlength: 10,
			maxlength: 10,
			telRegex: true
          },
          txt_comm: {
            required: true,
            //nameRegex: true         
          },          
       },
       submitHandler: function(form) {
          //return false;
          //$('#btn_cont').attr("disabled", false); 
         // $('input:submit').attr("disabled", true); 
                   // form.submit();
           submit_post();
          $('#btn_cont').attr("disabled", true); 
		   document.getElementById("contact-form").reset();
          }
      });
    }
  }//when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
})(jQuery, window, document);
function submit_post(){ 
//alert('Hello');
var dataString = $("#contact-form").serialize();
      $.ajax({
      type: "POST",
      url:  "contact-ajax.php",
      data: dataString,
      cache: false,    

      beforeSend: function()
      {
      },      
      success: function(msg){   
          //var obj = $.parseJSON(msg);     
          
          //alert(obj[0]);
          //msg_span
         //alert('Hello');
        //$.('#msg_span').html(obj[0]);
         $("#msg_span").html(msg);
      },
	  
      error: function(){
      alert("failure");
      }
	  
      });
}
function remove_contact_msg() {
	$("#msg_span").html('');
    $('#btn_cont').attr("disabled", false); 
500}