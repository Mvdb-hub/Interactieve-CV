// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function ()
{
    $('.navbar-nav .nav-link').on('click', function ()
    {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parent("li").addClass('active');
    });
});


window.onscroll = function () {
    MakeNavbarSticky();
};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function MakeNavbarSticky()
{
    if (window.pageYOffset > sticky -60) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}
