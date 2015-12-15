function createCalender(w_scale, h_scale) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    canvas.width = window.innerWidth / w_scale;
    canvas.height = window.innerHeight / h_scale;

    var calender = function (canvas, context, dayBeginingTime, dayEndingTime) {
        var calender = this;
        this.yOffset = 50;
        this.xOffset = 50;
        var _calenderHeight = canvas.height - this.yOffset;
        var _calenderWidth = canvas.width - this.xOffset;
        var _week = {
            "Monday": 0,
            "Tuesday": 1,
            "Wednesday": 2,
            "Thursday": 3,
            "Friday": 4,
        };
        var _weekName = {
            0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thursday",
            4: "Friday"
        };
        var _daysPerWeek = 5;
        var _dayWidth = _calenderWidth / _daysPerWeek;
        var _hoursPerDay = dayEndingTime - dayBeginingTime;
        if (_hoursPerDay < 0) console.error("'dayEndingTime' can not be smaller than 'dayBegininTime'")
        var _hourHeight = _calenderHeight / _hoursPerDay;

        this.addClass = function (className, dayOfTheWeek, classStartTime, classEndingTime, classType, color) {
            var class_x = (_week[dayOfTheWeek] * _dayWidth) + calender.xOffset;
            var class_y = calender.yOffset + (classStartTime - dayBeginingTime) * _hourHeight;
            var class_width = _dayWidth;
            var class_height = (classEndingTime - classStartTime) * _hourHeight;

            context.beginPath();
            context.rect(class_x, class_y, class_width, class_height); // rect(x,y,width, height)
            context.fillStyle = color;
            context.fill();
            context.lineWidth = 2;
            context.strokeStyle = "black"; // Add a sexy outline
            context.stroke();

            context.fillStyle = "black";
            context.font = "15px Arial";
            context.fillText(className +"  "+ classType, class_x + class_width / 4, class_y + class_height / 2);

        }

        function drawLine(x_start, y_start, x_end, y_end) {
            context.beginPath();
            context.moveTo(x_start, y_start);
            context.lineTo(x_end, y_end);
            context.stroke();
        }

        this.drawGrid = (function () {
            // Draw horizontal grid
            context.font = "15px Arial";
            for (var i = 0; i <= _hoursPerDay; i++) {
                var gridYPosition = (i * _hourHeight) + calender.yOffset;
                drawLine(calender.xOffset, gridYPosition, _calenderWidth + calender.xOffset, gridYPosition);
                context.fillText(i + dayBeginingTime, 0, gridYPosition);
            }

            context.font = "30px Arial";
            // Draw vertical grid
            for (var i = 0; i <= _daysPerWeek; i++) {
                var gridXPosition = (i * _dayWidth) + calender.xOffset;
                drawLine(gridXPosition, calender.yOffset, gridXPosition, _calenderHeight + calender.yOffset);
                context.fillText(_weekName[i], gridXPosition + 40, calender.yOffset - 10);
            }

        }());
    }


    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth / w_scale;
        canvas.height = window.innerHeight / h_scale;

        drawCalender();
    }
    resizeCanvas();

    function drawCalender() {
        var c = new calender(canvas, context, 8, 20);
        // addClass apram: (className, dayOfTheWeek, classStartTime, classEndingTime, classType, color)
        c.addClass("cse 101", "Monday", 10, 12, "LE", "green"); //["cse 101 ", "Monday", 10, 12, "LE "]
        c.addClass("cse 101", "Thursday", 14, 15.5, "LE", "green"); //["cse 101 ", "Thursday", 14, 15.5, "LE "]
        c.addClass("cse 140", "Friday", 18, 20, "LE", "green"); //["cse 140 ", "Friday", 18, 20, "LE "]
        c.addClass("cse 120", "Wednesday", 16, 18, "LE", "green"); //["cse 120 ", "Wednesday", 16, 18, "LE "]
        c.addClass("cse 140", "Friday", 14, 16, "LE", "green"); //["cse 140 ", "Friday", 14, 16, "LE "]
        console.log("recreated calender");
    }
}
