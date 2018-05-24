$(document).ready(function() {

    Push.Permission.request(onGranted, onDenied);

    // M.AutoInit
    var elem = document.querySelector(".timepicker");
    var instance = M.Timepicker.init(elem, {
        twelveHour: true
    });
    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass("animated " + animationName);
            });
            return this;
        }
    });




    /*
    // First Indication 
    $('.tone').tapTarget('open');
    // Next Click indicator
    $(".nxt").on("click", function() {

        $('.tone').tapTarget('close');
        $(".ttwo").tapTarget("open");
    });
    $(".dn").on("click", function() {
        $(".ttwo").tapTarget("close");
    });
    */
});