$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        
    var $bgobj = $(this);
    
    $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        
        var coords = '50% '+ yPos + 'px';
        
        $bgobj.css({ backgroundPosition: coords });
        
                   
    });//end of .scroll function
            
 });//end of each function
       
    
});//end of Jquery