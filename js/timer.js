var app = new Vue({
    el: "#app-timer",
    data: {
        hourformat: '', //Morning , Afternoon , Evening
        clock: "", //Current Time
        todaysDate: "", // Current Day and Day (Tues 24)
        showTimer: "welcome", //Shows the Timer
        alarmTimeHour: "",
        alarmTimeMinute: "",
        alarmTimeSeconds: 0,
        APMs: "", // AM and PM
        timeDiff: "",
        showClock: "",
        notification: 0,
        saveInterval: undefined,
        timeInterval: undefined,
        countDown: undefined
    },
    methods: {
        getDate() {
            // Getting the Calendar and updated Clock time
            var calender = moment().format("ddd, MMM D");
            var clock = moment().format("hh:mm A");
            this.todaysDate = calender;
            this.clock = clock;

            // Comparing Time of Day
            var hours = moment().format("HH");
            if (hours >= 12) {
                if (hours >= 16) {
                    this.hourformat = 'Evening';
                } else {
                    this.hourformat = 'Afternoon';
                }
            } else {
                this.hourformat = 'Morning';
            }
        },
        setAlarm() {
            Push.Permission.request();
            // Extracting the Hour and Minute from the Inputed Time
            var time = $(".timepicker");
            // var time = document.querySelector(".timepicker");
            var newTime = time.val();
            var timeSplit = newTime.split(":");
            var timeSplitLetter = timeSplit[1] && timeSplit[1].split(" ");

            // Pulling the Data from the Time Input
            this.timeDiff = null; //reseting timeDiff
            this.alarmTimeSeconds = Number(moment().format("s"));
            this.alarmTimeHour = timeSplit[0];
            this.alarmTimeMinute = timeSplitLetter[0];
            this.APMs = timeSplitLetter[1];
            if (this.APMs == "PM") {
                if (this.alarmTimeHour == 12) {
                    this.alarmTimeHour = timeSplit[0];
                } else {
                    this.alarmTimeHour = Number(timeSplit[0]) + 12;
                }
            } else {
                this.alarmTimeHour = Number(timeSplit[0]);
            }

            /**** Creating the Countdown From Here ****/

            // Getting the Current Date
            var currentDate = moment().format("ddd MMMM D YYYY HH:mm:ss ZZ");

            // Setting Date format
            var setDate = moment(currentDate, "ddd MMMM D YYYY HH:mm:ss ZZ");

            // setting my Hour, Minutes and seconds binding it with my Input
            setDate.set({
                h: this.alarmTimeHour,
                m: this.alarmTimeMinute,
                s: this.alarmTimeSeconds
            });

            // * Getting the time Difference
            var eventTime = setDate.format("X"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
            var currentTime = moment().format("X"); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
            var diffTime = eventTime - currentTime;
            // var clockIcon = $("#clock");
            var duration = moment.duration(diffTime * 1000, "milliseconds");

            // Counting the time down
            this.countDown = function() {
                duration = moment.duration(duration - 1000, "milliseconds");

                // When Alarm is Done counting
                if (duration.seconds() <= 0 && duration.minutes() <= 0) {
                    // Time Up text
                    $(".countdown").addClass("stop");
                    this.timeDiff = $(".countdown").text("Time's Up!");

                    // Trigger Notification Once using Watch property
                    app.notification = 1;

                    // Stop Interval
                    clearInterval(this.saveInterval);

                    // Sound Notification
                    var audio = new Audio("./files/droplet.mp3");
                    audio.play();

                    // Alarm Animation
                    // clockIcon.animateCss("shake red-text");

                } else if (
                    duration.hours() ||
                    duration.minutes() ||
                    duration.seconds() > 0
                ) {
                    this.timeDiff = $(".countdown").text(
                        duration.hours() +
                        ":" +
                        duration.minutes() +
                        ":" +
                        duration.seconds()
                    );
                    this.showTimer = this.timeDiff;
                }
            };

            this.resetInterval();
        },
        resetInterval: function() {
            //* Update Alarm
            app.notification = 0;
            clearInterval(this.saveInterval);
            this.saveInterval = setInterval(this.countDown, 1000);
        },
        resetAlarm() {
            clearInterval(this.saveInterval);
            //* Reseting Alarm
            // $("#clock").removeClass("animated shake");
            // $("#clock").removeClass("red-text");
            $(".countdown").removeClass("stop");
            console.log("classes removed");
            this.timeDiff = $(".countdown").text("0:0:0");
        }
    },

    watch: {
        notification: function() {
            if (this.notification === 1) {
                // console.log("Notfication Updated by :", this.notification);
                // Push notification
                Push.create("Alarm", {
                    body: "Time's up young Warlock \nToo bad you don't have a TIME STONE",
                    icon: "img/clock.png",
                    vibrate: [300, 100],
                    timeout: 4000,
                    tag: "alarm",
                    onClick: function() {
                        window.focus("");
                        this.close();
                    }
                });
            }
        }
    },
    created() {
        this.timeInterval = setInterval(this.getDate, 100);
    }
});