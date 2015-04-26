/*      Jessica J. Hernandez
        ID: 0004631401
        April 26, 2015 - Week 3
        Web Standards Project | 201504-01
        Professor: Brandon Brown
        Full Sail University
*/


(function ($) {
    
    $('.readMore').click(function (e) {
        e.preventDefault();
        window.location.assign('palmsprings.html');
    });
                         
    $('.addToPassport').click(function (e) {
        e.preventDefault();
        window.location.assign('passport.html');
    });
    
})(jQuery); // end private scope