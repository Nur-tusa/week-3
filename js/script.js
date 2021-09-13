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

///////////tackling the submit button
 function showName(e){
    var name= document.getElementById("name").value;

        alert ( name + "  we have received your message. Thank you for reaching out to us.");
    }
    
