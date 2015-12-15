function createCalender(w_scale, h_scale) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    canvas.width = window.innerWidth / w_scale;
    canvas.height = window.innerHeight / h_scale;

    var calender = function (canvas, context, dayBeginingTime, dayEndingTime) {
        var calender = this;
        this.yOffset = 80;
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
            context.fillStyle = color;

            context.fillRect(class_x, class_y, class_width, class_height); // rect(x,y,width, height)


            //            context.beginPath();
            //            context.moveTo(20, 10);
            //            context.lineTo(80, 10);
            //            context.quadraticCurveTo(90, 10, 90, 20);
            //            context.lineTo(90, 80);
            //            context.quadraticCurveTo(90, 90, 80, 90);
            //            context.lineTo(20, 90);
            //            context.quadraticCurveTo(10, 90, 10, 80);
            //            context.lineTo(10, 20);
            //            context.quadraticCurveTo(10, 10, 20, 10);
            //            context.stroke();

            //            context.fillRect(class_x, class_y, class_width, class_height); // rect(x,y,width, height)
            //            context.fillStyle = color;
            //            context.fill();
            //            context.lineWidth = 2;
            //            context.strokeStyle = color; // Add a sexy outline
            //            context.stroke();

            context.fillStyle = "black";
            context.font = "15px Arial";
            context.fillText(className + "  " + classType, class_x + class_width / 4, class_y + class_height / 2);

        }

        function drawLine(lineWidth, x_start, y_start, x_end, y_end) {
            context.lineWidth = lineWidth;
            context.beginPath();
            context.fillStyle = "white";
            context.moveTo(x_start, y_start);
            context.lineTo(x_end, y_end);
            context.strokeStyle = 'white';
            context.stroke();
        }

        this.drawGrid1 = function () {
            // Draw horizontal grid
            context.font = "15px Arial";
            for (var i = 0; i <= _hoursPerDay; i++) {
                var gridYPosition = (i * _hourHeight) + calender.yOffset;
                drawLine(1, calender.xOffset, gridYPosition, _calenderWidth + calender.xOffset, gridYPosition);
                context.fillText(i + dayBeginingTime, 0, gridYPosition);
            }

            context.font = "30px Arial";
            // Draw vertical grid
            for (var i = 0; i <= _daysPerWeek; i++) {
                var gridXPosition = (i * _dayWidth) + calender.xOffset;
                drawLine(1, gridXPosition, calender.yOffset, gridXPosition, _calenderHeight + calender.yOffset);
                context.fillText(_weekName[i], gridXPosition + 40, calender.yOffset - 10);
            }

        }
        this.drawGrid2 = function () {
            // Draw horizontal grid
            context.font = "15px Arial";
            for (var i = 0; i <= _hoursPerDay; i++) {
                var gridYPosition = (i * _hourHeight) + calender.yOffset;
                drawLine(1, 0, gridYPosition, _calenderWidth + calender.xOffset, gridYPosition);
                context.fillText(i + dayBeginingTime, 0, gridYPosition);
            }

            context.font = "30px Arial";
            // Draw vertical grid
            for (var i = 0; i <= _daysPerWeek; i++) {
                var gridXPosition = (i * _dayWidth) + calender.xOffset;
                // drawLine(1, gridXPosition, calender.yOffset, gridXPosition, _calenderHeight + calender.yOffset);
                context.fillText(_weekName[i], gridXPosition, calender.yOffset - 30);
            }

        }

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
        c.drawGrid2();
        // addClass apram: (className, dayOfTheWeek, classStartTime, classEndingTime, classType, color)
        c.addClass("cse 101", "Monday", 10, 12, "LE", "#ED6A5A"); //["cse 101 ", "Monday", 10, 12, "LE "]
        c.addClass("cse 101", "Thursday", 14, 15.5, "LE", "#247BA0"); //["cse 101 ", "Thursday", 14, 15.5, "LE "]
        c.addClass("cse 140", "Friday", 18, 20, "LE", "#70C1B3"); //["cse 140 ", "Friday", 18, 20, "LE "]
        c.addClass("cse 120", "Wednesday", 16, 18, "LE", "#B2DBBF"); //["cse 120 ", "Wednesday", 16, 18, "LE "]
        c.addClass("cse 130", "Friday", 14, 15, "LE", "#5CA4A9"); //["cse 140 ", "Friday", 14, 16, "LE "]
        c.addClass("cse 110", "Friday", 15, 17, "LE", "#FF1654"); //["cse 140 ", "Friday", 14, 16, "LE "]
        console.log("recreated calender");
    }
}