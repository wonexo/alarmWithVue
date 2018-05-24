$(document).ready(function() {
    Push.Permission.request();

    // M.AutoInit
    var elem = document.querySelector(".timepicker");
    var instance = M.Timepicker.init(elem, {
        twelveHour: true
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