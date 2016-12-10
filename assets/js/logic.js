var projects =
[
	{name: "Personal Website",link:"https://github.com/GoPro16/GoPro16.github.io",desc:"This is my first go at a personal website using Bootstrap, jquery, javascript, html and css. Looking forward to creating more web applications in the future"},
	{name: "Java 2D Game",link:"https://github.com/GoPro16/SpaceGame",desc:"Space Game project utilizing linked lists to implement open world gameplay. Still a work in progress. This project is a compilation of all the techniques I have learned in school thus far."},
	{name: "Mobile App",link:"https://github.com/GoPro16/desktopGame",desc:"Working on a new application for web and mobile platforms. Still in the process of learning the new skills and techniques. Source code will be avaiable as soon as possible."}
];
function addProjects(){
	projects.forEach(function(project){
	$(".row .row").append('<div class="col-lg-4 col-md-4 col-sm-4"><a href="'+project.link+'" target="_blank"><div class="thumbnail"><h4>'+project.name+'</h4><hr class="projDesc"><p>'+project.desc+'</p></div></a></div>');
});
}

addProjects();



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
