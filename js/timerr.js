var app = new Vue({
    el: "#app-timer",
    data: {
        alarmTime: "",
        alarmTimeHour: "",
        alarmTimeMinute: "",
        alarmTimeSeconds: "",
        timeDiff: "00:00:00",
        interval: 1000,
        countDown: undefined,
    },
    methods: {

        resetInterval() {

            clearTimeout(this.countDown);
        },

        setAlarm() {

            this.timeDiff = null;

            // this shows the hours, minutes and seconds inputs
            this.alarmTime = this.alarmTimeHour + ":" + this.alarmTimeMinute + ":" + this.alarmTimeSeconds;


            // Getting the Current Date
            var currentDate = moment().format("ddd") + " " + moment().format("MMM") + " " + moment().format("D") + " " + moment().format("YYYY") + " " + moment().format("HH:mm:ss") + " GMT+0100 (WAT)";

            // Setting Date format
            var setDate = moment(currentDate, "ddd MMMM D YYYY HH:mm:ss ZZ");

            // setting my Hour, Minutes and seconds binding it with my Input
            setDate.set({
                h: this.alarmTimeHour,
                m: this.alarmTimeMinute,
                s: this.alarmTimeSeconds
            });

            // comparing current date with my new date
            console.log(setDate.toDate().toString());
            console.log(currentDate);

            // * Getting the time Difference
            var eventTime = setDate.format('X'); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
            var currentTime = moment().format('X'); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
            var diffTime = eventTime - currentTime;
            duration = moment.duration(diffTime * 1000, "milliseconds");
            var interval = 1000;

            // Counting the time down 
            this.countDown = function() {
                duration = moment.duration(duration - interval, "milliseconds");
                this.timeDiff = $(".countdown").text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
                // this.timeDiff = duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
            }
            this.resetInterval();
            setInterval(this.countDown, this.interval);
        }
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
 * // Work on This
 var eventTime = m.format("x"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
 var currentTime = moment().format('x'); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
 // var currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
 var diffTime = eventTime - currentTime;
 duration = moment.duration(diffTime * 1000, "milliseconds");
 var interval = 1000;

 // console.log(currentTime);
 // setInterval(function() {
 //     duration = moment.duration(duration - interval, "milliseconds");
 //     $(".countdown").text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
 // }, interval);
 // console.log(duration)
 * 
 * 
 */