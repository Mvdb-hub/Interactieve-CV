// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function ()
{
    $('.navbar-nav .nav-link').on('click', function ()
    {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parent("li").addClass('active');
    });

    // Add smooth scrolling to all links that start with 'href=#'
    $('a[href^="#"]').on('click', function (event) {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
    });



    // change navbar active button on scrolling sections
    let mainNavLinks = document.querySelectorAll("nav ul li a");
    let mainSections = document.querySelectorAll("main section");

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                $(link).parent("li").addClass('active');
            } else {
                $(link).parent("li").removeClass('active');
            }
        });
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

