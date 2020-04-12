// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function ()
{
    $('.navbar-nav .nav-link').on('click', function ()
    {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parent("li").addClass('active');
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            var offsetTop = $(hash).offset().top

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: offsetTop
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});


window.onscroll = function () {
    MakeNavbarSticky();
};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function MakeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}