function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  

function changeMe() {
		var x;
		x = document.getElementById('banner');
		if (x.style.backgroundImage.includes('japan_banner.jpg'))
			{
			x.style.backgroundImage = "url('japan_banner2.jpg')";
			}
		else
		{
			x.style.backgroundImage = "url(japan_banner.jpg)";
		}
}