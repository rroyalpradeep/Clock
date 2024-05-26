// Code by Pradeep Soni
let hour= document.querySelector("#hour");
let min=document.querySelector("#min");
let sec= document.querySelector("#sec");

function DisplayTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();

    let hourRotation=30*hours+minutes/2;
    let minutesRotation=6*minutes;
    let secondsRotation=6*seconds;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform=`rotate(${minutesRotation}deg)`;
    sec.style.transform=`rotate(${secondsRotation}deg)`;
}
setInterval(DisplayTime,1000);




let ss=document.querySelector("#s") ;
let mm=document.querySelector("#m") ;
let hh=document.querySelector("#h") ;
let ampm=document.querySelector("#ampm") ;

function time(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if(h > 12) h = h - 12;

    if(h < 10 ) h = '0'+h;
    if(m < 10 ) m = '0'+m;
    if(s < 10 ) s = '0'+s;

    ss.innerText=s;
    mm.innerText=m;
    hh.innerText=h;


}
setInterval(time,1000);