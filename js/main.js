var a=document.getElementsByClassName("drum");
var leng=a.length;
for(var i=0;i<leng;i++)
{
   a[i].addEventListener("click",b);
   
}
 function b()
{   if(this.innerHTML==='W')
      {
         var audio=new Audio("../audio/tom-1.mp3");
      audio.play();
      }
      else if(this.innerHTML==='A')
       {
         var tom2=new Audio("../audio/tom-2.mp3");
        tom2.play();
       }
       else if(this.innerHTML==='S')
       {
         var tom3=new Audio("../audio/tom-3.mp3");
        tom3.play();
       }
       else if(this.innerHTML==='D')
       {
         var tom4=new Audio("../audio/tom-4.mp3");
        tom4.play();
       }
       else if(this.innerHTML==='J')
       {
         var snare=new Audio("../audio/snare.mp3");
        snare.play();
       }
       else if(this.innerHTML==='K')
       {
         var crash=new Audio("../audio/crash.mp3");
        crash.play();
       }
       else 
       {
         var kick=new Audio("../audio/kick-bass.mp3");
        kick.play();
       }
 }

      
   
      
