$(document).ready(function() {
    // M.AutoInit();
    var elem = document.querySelector(".timepicker");
    var instance = M.Timepicker.init(elem, true);
    // instance.showView("minutes");

    $('.tone').tapTarget('open');


    $(".nxt").on("click", function() {

        $('.tone').tapTarget('close');
        $(".ttwo").tapTarget("open");
    });
    $(".dn").on("click", function() {
        $(".ttwo").tapTarget("close");
    });
    Push.Permission.request(onGranted, onDenied);

});