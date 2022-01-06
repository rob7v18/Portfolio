function myfunction () {
    if (window.innerWidth <= 750) {
    $('nav').on('click', '.menu-icon, .nav-links', function (event) {
        $('.navs').toggle();
        })
    }
    else {;}
}

$(myfunction);