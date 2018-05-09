$(document).ready(function() {
    // M.AutoInit();
    var elem = document.querySelector(".timepicker");
    var instance = M.Timepicker.init(elem, {
        twelveHour: true
    });



    var time = $(".timepicker");
    $("#test").on('click', function() {
        var newTime = time.val();
        let timeGet = newTime.split(":");
        let timeGetMore = timeGet[1].split(" ");
        console.log(timeGet[0]);
        // console.log(timeGet[1]);
        console.log(timeGetMore[0]);
        console.log(timeGetMore[1]);

        console.log(newTime);
    })


    // instances.next();

    // console.log(instance.time())


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