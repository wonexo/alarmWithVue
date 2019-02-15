$(document).ready(function() {

    Push.Permission.request();

    // M.AutoInit

    let mElem = document.querySelector(".mPick");

    let instance = M.Timepicker.init(mElem, {
        twelveHour: true
    })
    let dElem = document.querySelector(".dPick");
    let instances = M.Timepicker.init(dElem, {
        twelveHour: true
    });





    /*
    // $.fn.extend({
    //     animateCss: function (animationName) {
    //         var animationEnd =
    //             "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    //         this.addClass("animated " + animationName).one(
    //             animationEnd,
    //             function () {
    //                 $(this).removeClass("animated " + animationName);
    //             }
    //         );
    //         return this;
    //     }
    // });
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