var app = new Vue({
    el: "#app-timer",
    data: {
        fullDate: "",
        alarmTime: "",
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
            // this.timeinterval = clearInterval();
            clearTimeout(this.timeinterval);
            this.timeinterval = setInterval(this.setAlarm, 1000);
        },

        setAlarm() {
            this.timeDiff = null;

            let hrs = moment().format("HH");
            let mins = moment().format("mm");
            let secs = moment().format("ss");

            let fullTime = hrs + ":" + mins + ":" + secs;

            let currentTime = moment().format(fullTime);
            let alarmTime = moment().format(this.alarmTime);
            let interval = (alarmTime - currentTime) * 100;
            this.timeDiff = 100 - interval;

            // this.alarmTime = fullTime;
            console.log(interval);
            this.update();
            // setInterval(fullTime, 1000)
            // this.timeinterval = setInterval(this.setAlarm, 1000);
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