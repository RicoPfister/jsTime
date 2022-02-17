// explame from: https://www.webnots.com/analog-clock-with-html5-canvas-and-javascript/



// initialize canvas; basic value

clock=document.getElementById("canvas");
ctx=clock.getContext("2d");

x=150;
y=150;

// loop order

function loop()
{
time=new Date();
h=time.getHours();
m=time.getMinutes();
s=time.getSeconds();

// add clock face

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(x,y,140,0,Math.PI*2,true);
ctx.fill();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.stroke();
drawNumber();

//add hands

drawPointer(360*(h/12)+(m/60)*30-90,70,"black",10);
drawPointer(360*(m/60)+(s/60)*6-90,100,"black",10);
drawPointer(360*(s/60)+x-90,120,"black",2);

drawDigitalClock()
}

// add numbers

function drawNumber()
{
for(n=0;n<12;n++)
{
d=-60;
num = new Number(n+1);
str = num.toString();
dd = Math.PI/180*(d+n*30);
tx = Math.cos(dd)*120+140;
ty = Math.sin(dd)*120+160;
ctx.font = "26px Verdana";
ctx.fillStyle = "black";
ctx.fillText(str, tx, ty);
}
}

// create hands

function drawPointer(deg,len,color,w)
{
rad=(Math.PI/180*deg);
x1=x+Math.cos(rad)*len;
y1=y+Math.sin(rad)*len;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=w;
ctx.moveTo(x,y);
ctx.lineTo(x1,y1);
ctx.stroke();
}

// digital clock text

function drawDigitalClock() {
    ctx.beginPath();
    ctx.fillText(h+":"+m+":"+s, 100, 210);
    
    ctx.beginPath();
    ctx.rect(96, 185, 100, 30)
    ctx.stroke();
  }

// loop start

setInterval(loop,500);