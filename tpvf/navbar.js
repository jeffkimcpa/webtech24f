function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function changeMe() {
    var x = document.getElementById('banner');
    if (x.style.backgroundImage.includes('japan_banner.jpg')) {
        x.style.backgroundImage = "url('japan_banner2.jpg')";
    } else {
        x.style.backgroundImage = "url('japan_banner.jpg')";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.topnav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove the `active` class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // Add the `active` class to the clicked link
            this.classList.add('active');
        });
    });
});