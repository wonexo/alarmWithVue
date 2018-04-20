var app = new Vue({
    el: "#app-timer",
    data: {
        fullDate: "",
        alarmTime: "",
        alarmTimeHour: "",
        alarmTimeMinute: "",
        alarmTimeSeconds: "",
        timeDiff: null,
        times: [],
        mymonths: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        timeinterval: undefined,
    },
    methods: {
        update() {
            // this.setAlarm();
            // this.timeinterval = clearInterval();
            clearTimeout(this.setAlarm);

            // this.timeinterval = setInterval(this.setAlarm, 1000);
            // setInterval(function() {
            //     duration = moment.duration(duration - interval, "milliseconds");
            //     $(".countdown").text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
            // }, interval);
        },

        setAlarm() {

            // this.update();
            this.timeDiff = null;

            this.alarmTime = this.alarmTimeHour + ":" + this.alarmTimeMinute + ":" + this.alarmTimeSeconds;
            // var dateString = "Tue May 16 2017 15:34:23 GMT+0100 (FLE Daylight Time)";
            var dateString = (moment().format("ddd") + " " + moment().format("MMMM") + " " + moment().format("D") + " " + moment().format("YYYY") + " 15:34:23 GMT+0100 (WAT)").toString();
            var m = moment(dateString, "ddd MMMM D YYYY HH:mm:ss ZZ");
            // Use moment(Date) if your input is a JS Date
            //var m = moment(date);
            // m.set({ h: 11, m: 11 });
            m.set({
                h: this.alarmTimeHour,
                m: this.alarmTimeMinute,
                s: this.alarmTimeSeconds
            });
            console.log(m.format('x'));
            console.log(m.toDate().toString());
            console.log(dateString);


            // Work on This
            var eventTime = m.format("x"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
            var currentTime = moment().format('x'); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
            // var currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
            var diffTime = eventTime - currentTime;
            var duration = moment.duration(diffTime * 1000, "milliseconds");
            var interval = 1000;

            // console.log(currentTime);
            // setInterval(function() {
            //     duration = moment.duration(duration - interval, "milliseconds");
            //     $(".countdown").text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
            // }, interval);
            // console.log(duration)

        },
        counting() {
            duration = moment.duration(duration - interval, "milliseconds");
            $(".countdown").text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
        }
    },
    // created: function() {
    // }
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