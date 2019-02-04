var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d");
    
var R = 150,d, angle, pX, pY, qX, qY, line;

var hours,minutes,seconds;

// Создание делений
function draw() {
	
    for(d = 0; d < 60; ++d) {
        angle = (d/60)*(2*Math.PI);
        pX = Math.cos(angle)*R;
        pY = Math.sin(angle)*R;
        qX = 0.9*pX;
        qY = 0.9*pY;
        pX += R; pY += R;
        qX += R; qY += R;
        
        line = new Path2D();
        
        line.moveTo(pX, pY);
        line.lineTo(qX, qY);
        context.lineWidth = 2;
        context.stroke(line);
        
        if(d % 5 == 0) {
            context.lineWidth = 5;
            context.stroke(line);
        }
    }
}

function time(){
	var date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
	t_sec = 6*seconds;
	t_min = 6*(minutes + (1/60)*seconds);
	t_hours= 30*(hours + (1/60)*minutes);
	drawWatch();
}

time();
	
    // Рисуем стрелки
function seconds_draw(){
	context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "red";

    context.moveTo(150, 150);
    context.lineTo(150 + 130*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
                   150 - 130*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    context.stroke();
    context.closePath();
}

function minutes_draw(){
	context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "blue";

    context.moveTo(150, 150);
    context.lineTo(150 + 110*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
                   150 - 110*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
    context.stroke();
    context.closePath();
}

function hours_draw(){
	context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";

    context.moveTo(150, 150);
    context.lineTo(150 + 90*Math.cos(Math.PI/2 - t_hours*(Math.PI/180)),
                   150 - 90*Math.sin(Math.PI/2 - t_hours*(Math.PI/180)));
    context.stroke();
    context.closePath();
}

    //Обновляем данные
function strelki() {  
	seconds_draw();
    minutes_draw();
	hours_draw();   
	setTimeout(function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context = document.getElementById("sandbox").getContext("2d");
		time();
	},1000);
}

    //Обновляем часы
function drawWatch() {
	var circle = new Path2D();
    circle.arc(150, 150, 150, 0,2*Math.PI);
    context.lineWidth = 1;
    context.stroke(circle);
    draw();
    strelki();
}



