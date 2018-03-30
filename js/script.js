window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Just so you know, jQuery is loaded");
    } else {
        // jQuery is not loaded
        console.log("jQuery is not loaded :(");
    }
}






  window.setInterval(function(){

    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    
    $('body').css({
      'background-color' : randomColor,
    });

  }, 2000);