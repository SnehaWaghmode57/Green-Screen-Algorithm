var imgforground=null;
var imgbackground=null;

function Foreground()
{
    var canvas1 = document.getElementById("foregroundcanvas");
    var imgfile = document.getElementById("foregroundimage");
    imgforground = new SimpleImage(imgfile);
    imgforground.drawTo(canvas1);
}

function Background()
{
    var canvas2 = document.getElementById("backgroundcanvas");
    var imgfile = document.getElementById("backgroundimage");
    imgbackground = new SimpleImage(imgfile);
    imgbackground.drawTo(canvas2);
}

function Merge()
{
    clearcanvas();
    var output  = new SimpleImage(imgforground.getWidth(),imgforground.getHeight());
    for (var pixel of imgforground.values()) 
    {
        if (pixel.getGreen() > pixel.getRed()+pixel.getBlue()) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = imgbackground.getPixel(x, y);
        output.setPixel(x, y, bgPixel);
    }
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel); 
    }    
}
    var canvas1 = document.getElementById("foregroundcanvas");
    output.drawTo(canvas1);
}

function clearcanvas()
{
    var canvas1 = document.getElementById("foregroundcanvas");
    var canvas2 = document.getElementById("backgroundcanvas");
    var context = canvas1.getContext("2d");
    context.clearRect(0, 0, canvas1.width, canvas1.height);
    context = canvas2.getContext("2d");
    context.clearRect(0, 0, canvas2.width, canvas2.height);
}
