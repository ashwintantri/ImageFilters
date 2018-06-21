var imageone=null;
var greyimage=null;
var redimage=null;
var rbimage=null;
var canvas=null;


function upload(){
  canvas=document.getElementById("can");
  var uplimage=document.getElementById("f");
  imageone=new SimpleImage(uplimage);
  imageone.drawTo(canvas);
  greyimage=new SimpleImage(uplimage);
  redimage=new SimpleImage(uplimage);
  blurimage=new SimpleImage(uplimage);
  rbimage=new SimpleImage(uplimage);
}
function checkimage()
{
  if(imageone==null || ! imageone.complete())
    {
      alert("Image not loaded!");
    }
      }
function grey()
{checkimage();
 for(var pixel of greyimage.values())
   {
     var set=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
     pixel.setRed(set);
     pixel.setGreen(set);
     pixel.setBlue(set);
   }
  greyimage.drawTo(canvas);
}
function red()
{checkimage();
 for(var pixel of redimage.values())
{  var set=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
  pixel.setRed(set*2);
  pixel.setBlue(0);
  pixel.setGreen(0);
} 
 redimage.drawTo(canvas);
  
}
function rainbow () {
  checkimage(); 
  for (var pixel of rbimage.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var x = pixel.getX();
    var w = rbimage.getWidth();
    if 
      (x < w/7)
    {   
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    if 
      (x >= w/7 && x < w/7*2)
    {   
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
    }
    if 
      (x >= w/7*2 && x < w/7*3)
    {   
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
    }
       if 
      (x >= w/7*3 && x < w/7*4)
    {   
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
    }
  if 
      (x >= w/7*4 && x < w/7*5)
    {   
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
    }
    if 
      (x >= w/7*5 && x < w/7*6)
    {   
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
    }
        if 
      (x >= w/7*6)
    {   
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
    }
  }
  rbimage.drawTo(canvas);
}
function reset()
{
checkimage();
  upload();
}

imageone=null;
greyimage=null;
redimage=null;
rbimage=null;
canvas=null;
}