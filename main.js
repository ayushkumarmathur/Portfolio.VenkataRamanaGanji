/*------------------------------------------
 Fun-facts counter
 ------------------------------------------*/

(function () {
    if(!$('#funfacts').html()) return;
    var inview = new Waypoint.Inview({
        element: $('#funfacts')[0],
        enter: function (direction) {
            $('.count.number').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            this.destroy();
        }
    });

})();
