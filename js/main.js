/*      Jessica J. Hernandez
        ID: 0004631401
        May 3, 2015 - Week 4
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