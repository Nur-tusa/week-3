/////////tackling the three image which display information
$(document).ready(function(){
    $(".column").click(function(){
      $(".img1").slideToggle();
    });
  });

  $(document).ready(function(){
    $(".column2").click(function(){
        $(".img2").slideToggle();
      
    });
  });
  $(document).ready(function(){
    $(".column3").click(function(){
      $(".img3").slideToggle();
    });
  });
  //////////tackling the hover section of 8pics
  $('.row').hover(function(){
    $('.text',this).slideToggle('slow');
 }, function(){
    $('.text',this).slideToggle('slow');
 });


 function showName(e){
    var name= document.getElementById("name").value;

        alert ( name + "  we have received your message. Thank you for reaching out to us.");
    }
    
!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e78302a0754479e5b6abb0e38/fa390717e3801b4be198dddf6.js");
