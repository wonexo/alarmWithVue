var app = new Vue({
    el: "#app-timer",
    data: {
        hourformat: "",
        clock: "",
        // clockAnimate: undefined,
        TodaysDate: "",
        alarmTime: "",
        alarmTimeHour: "",
        alarmTimeMinute: "",
        alarmTimeSeconds: "",
        timeDiff: "00:00:00",
        interval: 1000,
        saveInterval: undefined,
        timeInterval: undefined,
        countDown: undefined,
        identify: undefined
    },
    methods: {
        setAlarm() {
            this.timeDiff = null;

            // this shows the hours, minutes and seconds inputs
            this.alarmTime = this.alarmTimeHour + ":" + this.alarmTimeMinute + ":" + this.alarmTimeSeconds;

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

            // comparing current date with my new date
            // console.log(setDate.toDate().toString());
            // console.log(currentDate);

            // * Getting the time Difference
            var eventTime = setDate.format("X"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
            var currentTime = moment().format("X"); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
            var diffTime = eventTime - currentTime;
            duration = moment.duration(diffTime * 1000, "milliseconds");
            var interval = 1000;

            // Counting the time down
            this.countDown = function() {
                duration = moment.duration(duration - interval, "milliseconds");

                if (duration.seconds() < 0) {
                    this.timeDiff = $(".countdown").text("Time is Up !!");
                    clearInterval(this.saveInterval);
                    $("#clock").addClass("animated shake");
                    // When Countdown alarm Time is Up
                } else if (duration.hours() || duration.minutes() || duration.seconds() > 0) {
                    this.timeDiff = $(".countdown").text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
                    // this.alarmDone()

                }
            };

            this.resetInterval();
        },
        resetInterval() {

            //* Update Alarm
            clearInterval(this.saveInterval);
            this.saveInterval = setInterval(this.countDown, this.interval);
        },
        resetAlarm() {
            //* Reseting Alarm
            clearInterval(this.saveInterval);
            this.timeDiff = $(".countdown").text("00:00:00");
        },
        alarmDone() {
            $('#clock').addClass('animated shake');
        },
        getDate() {
            // Getting the Calendar and updated Clock time
            var calender = moment().format('dddd MMMM D YYYY');
            var clock = moment().format('hh:mm A');
            this.TodaysDate = calender;
            this.clock = clock;

            // Comparing Time of Day
            var hours = moment().format('HH')
            if (hours >= 12) {
                if (hours >= 16) {
                    this.hourformat = "Evening";
                } else {
                    this.hourformat = "Afternoon";
                }
            } else {
                this.hourformat = "Morning";
            }
        }

    },
    created() {
        this.timeInterval = setInterval(this.getDate, 100);

    }
});













/***
 * enter time in input 
 * set alarm
 * reset diff
 * store entered time in a variable
 * get time diff
 * decrement diff unitl zero
 * 
 * 
 * 
 * 
 * 
 * 
 */