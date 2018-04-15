// template for number card
Vue.component("time-item", {
    props: ["time"],
    template: `
<div class="col">
      <h4>{{time.time}}</h4>
    <div class="card-footer">
      {{time.text}}
    </div>
  </div>
</div>`
});

//app logic
var app = new Vue({
    el: "#app-timer",
    data: {
        startTime: "",
        endTime: "april" + new Date().getDate() + ", 2018 24:00:00",
        // endTime: "",
        setter: "",
        times: [
            { id: 0, text: "Days", time: 1 },
            { id: 1, text: "Hours", time: 1 },
            { id: 2, text: "Minutes", time: 1 },
            { id: 3, text: "Seconds", time: 1 }
        ],
        showTodaysDate: "",
        showTodayTime: "",
        hourformat: "",
        format: "",
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
        progress: 100,
        // isActive: false,
        timeinterval: undefined,
        timechange: undefined
    },
    methods: {
        alert: function() {
            alert("chicken");
        },
        todaysDate: function() {
            let d = new Date();
            let nd = this.mymonths[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
            let hr = d.getHours();
            let nhr = d.getHours();
            let sc =
                this.showTodaysDate = nd;
            if (hr > 12) {
                if (hr > 16) {
                    this.hourformat = "Evening";
                } else {
                    this.hourformat = "Afternoon";
                }
                hr = hr - 12;
                this.format = "PM";
            } else {
                this.hourformat = "Morning";
                this.format = "AM";
                hr = d.getHours();
            }
            let tm = hr + ":" + d.getMinutes() + " " + this.format;
            let ntm = nhr + ":" + d.getMinutes();

            // this.timechange = setInterval(tm, 1000);
            this.showTodayTime = tm;
            this.startTime = nd + " " + ntm + ":" + d.getSeconds();
            this.endTime = nd + " 24:00:00";
        },

        // STart Here
        changeds: function() {
            let d = new Date();
            this.todaysDate();
            let nhr = d.getHours();
            let nd = this.mymonths[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

            // this.endTime = "april 13, 2018 24:00:00";
            let ntm = nhr + " : " + d.getMinutes();
            this.startTime = nd + " " + ntm + " " + d.setSeconds();
            this.endTime = nd + " " + this.setter;
        },
        updateTimer: function() {
            if (
                this.times[3].time > 0 ||
                this.times[2].time > 0 ||
                this.times[1].time > 0
                // this.times[0].time > 0
            ) {
                this.getTimeRemaining();
                this.updateProgressBar();
            } else {
                clearTimeout(this.timeinterval);
                this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
                this.progress = 0;
            }
        },
        getTimeRemaining: function() {
            let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
            if (t >= 0) {
                this.times[3].time = Math.floor((t / 1000) % 60); //seconds
                this.times[2].time = Math.floor((t / 1000 / 60) % 60); //minutes
                this.times[1].time = Math.floor((t / (1000 * 60 * 60)) % 24); //hours
                this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
            } else {
                this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
                this.progress = 0;
            }
        },
        updateProgressBar: function() {
            let startTime = Date.parse(new Date(this.startTime));
            let currentTime = Date.parse(new Date());
            let endTime = Date.parse(new Date(this.endTime));
            let interval = parseFloat(
                (currentTime - startTime) / (endTime - startTime) * 100
            ).toFixed(2);
            this.progress = 100 - interval;
        }
    },
    created: function() {
        this.updateTimer();
        this.todaysDate();
        // this.changeds();
        this.timeinterval = setInterval(this.updateTimer, 1000);
    }
});