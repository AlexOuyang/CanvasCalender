 //var canvas = document.getElementById('myCanvas');
 //canvas.width = window.innerWidth;
 //canvas.height = window.innerHeight;
 //var context = canvas.getContext('2d');
 //
 //var calender = function (context, beginingHour, endingHour, step) {
 //    this.context = context;
 //    this.beginingHour = beginingHour;
 //    this.endingHour = endingHour;
 //    this.step = step;
 //
 //    this.addClass = function (x, y, width, height, color) {
 //        this.context.beginPath();
 //        this.context.rect(x, y, width, height); // rect(x,y,width, height)
 //        this.context.fillStyle = color;
 //        this.context.fill();
 //        //this.context.lineWidth = 7;
 //        //this.context.strokeStyle = 'black';   // Add a sexy outline
 //        this.context.stroke();
 //    }
 //}
 //
 //
 //
 //var calender = new calender(context, 8, 20, 20);
 //calender.addClass(100, 100, 100, 100, 'green');






 function createCalender(w_scale, h_scale) {
     var canvas = document.getElementById('myCanvas');
     var context = canvas.getContext('2d');
     canvas.width = window.innerWidth / w_scale;
     canvas.height = window.innerHeight / h_scale;

     var calender = function (canvas, context, dayBeginingTime, dayEndingTime) {
         var height = canvas.height;
         var width = canvas.width;
         var _week = {
             "Monday": 1,
             "Tuesday": 2,
             "Wednesday": 3,
             "Thursday": 4,
             "Friday": 5,
         };
         var daysPerWeek = 5;
         var _classWidth = width / daysPerWeek;
         var _hoursPerDay = dayBeginingTime - dayEndingTime;

         this.addClass = function (className, dayOfTheWeek, classStartTime, classEndingTime, x, y, height, color) {
             //             var _classHeight =
             context.beginPath();
             context.rect(x, y, _classWidth, height); // rect(x,y,width, height)
             context.fillStyle = color;
             context.fill();
             context.lineWidth = 2;
             context.strokeStyle = 'black'; // Add a sexy outline
             context.stroke();
         }

         function drawLine(x_start, y_start, x_end, y_end) {
             context.beginPath();
             context.moveTo(x_start, y_start);
             context.lineTo(x_end, y_end);
             context.stroke();
         }

         this.drawGrid = (function () {
             drawLine(0, 20, width, 20);
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
         c.addClass("cse 101", "Monday", 10, 10, 11, 13, 100, "green");
         console.log("recreated calender");
     }
 }

 //var class1 = ["cse 101", "Monday", 11, 2, "LE"]