var projects =
[
	{name: "Java Racing Game",image: "http://i.imgur.com/OBxPR4N.png",desc:"First project test"},
	{name: "No Name",image:"http://i.imgur.com/mTQQKVH.png",desc:"Second project test"},
	{name: "Minecraft P2 Project",image: "http://i.imgur.com/OBxPR4N.png",desc:"Third project test"},
	{name: "Java P2 Project",image:"http://i.imgur.com/mTQQKVH.png",desc:"Fourth project test"},
	{name: "Java Space Game",image: "http://i.imgur.com/OBxPR4N.png",desc:"First project test"},
	{name: "Java Project",image:"http://i.imgur.com/mTQQKVH.png",desc:"Second project test"},
	{name: "Minecraft P2 Project",image: "http://i.imgur.com/OBxPR4N.png",desc:"Third project test"},
	{name: "Java P2 Project",image:"http://i.imgur.com/mTQQKVH.png",desc:"Fourth project test"}
];
function addProjects(){
	projects.forEach(function(project){
	$(".row .row").append('<div class="col-lg-3 col-md-6 col-sm-12"><div class="thumbnail"><img src="'+project.image+'"><div class="caption"><h4>'+project.name+'</h4></div></div></div>');
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