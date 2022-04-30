function myTime(){
    var mydate=new Date();
    var Hours=mydate.getHours();
    var Minutes=mydate.getMinutes();
    var sec=mydate.getSeconds();
    var section=document.querySelector(".section");
//add am pm
if (Hours >= 12) {
    section.innerHTML="PM";
} else {
    section.innerHTML="AM";
}
// convert 24 hours clock to 12 hours clock
 if (Hours == 0) {
    Hours = 12;
 } 
//add zero before single digith number
Hours = (Hours < 10) ? "0"+ Hours : Hours;
Minutes = (Minutes < 10) ? "0"+ Minutes : Minutes;
sec = (sec < 10) ? "0"+ sec : sec;
    document.querySelector(".Hours").innerHTML=Hours;
    document.querySelector(".Minutes").innerHTML=Minutes;
    document.querySelector(".sec").innerHTML=sec;
}setInterval(myTime,1000);