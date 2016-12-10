var projects =
[
	{name: "Personal Website",desc:"This is my first go at a personal website using Bootstrap, jquery, javascript, html and css. Looking forward to creating more web applications in the future"},
	{name: "Java 2D Game",desc:"Space Game project utilizing linked lists to implement open world gameplay. Still a work in progress. This project is a compilation of all the techniques I have learned in school thus far."},
	{name: "No Name",desc:"Working on a new application for web and mobile platforms. I have yet to announce a clear topic, however the source code is available."}
];
function addProjects(){
	projects.forEach(function(project){
	$(".row .row").append('<div class="col-lg-4 col-md-4 col-sm-4"><div class="thumbnail"><h4>'+project.name+'</h4><hr class="projDesc"><p>'+project.desc+'</p></div></div></div>');
});
}

addProjects();

var activeProjects = document.querySelectorAll(".thumbnail");


activeProjects.forEach(function(item){
	$(item).click(function(){
		var n = $(".thumbnail").length;
		console.log(n);
		if(n == 1){
			console.log("1 element");
		}else{
			console.log("more the one element");
			$(".thumbnail").remove();
			$(".row .row").hide().append(item).fadeIn(100);
			document.querySelector('#Header-Portfolio').scrollIntoView();
		}
	});
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      var extra = 30;
      var pixelsAway = $(hash).offset().top;
      if(pixelsAway > 0){
      	pixelsAway-=30;
      }else{
      	pixelsAway+=30;
      }
      $('html, body').animate({
        scrollTop: pixelsAway
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});