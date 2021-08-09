$(document).ready(function(){

    $(".meal .meal-info .text .readmore").on("click", function(){
        //read more on click toggle class hidden on element
       $(this).siblings("p.hidden").toggle("hidden");
       //change read more to read less if it's value is read more
       if($(this).html().toLowerCase()==="read more"){
        $(this).html("Read Less");
       }else{
        $(this).html("Read More");
       };
      
    });
    
});