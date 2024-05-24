 function updateClock(){
    let now = new Date();
   let dayEl = now.getDay(),
         monthEl = now.getMonth(),
       dayNumEl = now.getDate(),
        yearEl = now.getFullYear(),

         hourEl = now.getHours(),
         minutesEl = now.getMinutes(),
         secondsEl = now.getSeconds(),
         periodsEl = "AM";
         if(hourEl==0){
            hourEl =12;
         }
         if (hourEl>12){
            hourEl = hourEl-12;
             periodsEl ="PM";
         }

     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let weeks =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let ids = ["day", "month", "daynum", "year", "hours", "minutes", "seconds", "period"];
     let values = [weeks[dayEl], months[monthEl], dayNumEl, yearEl, hourEl, minutesEl, secondsEl, periodsEl ];

     for(let i=0;i<ids.length;i++)
         document.getElementById(ids[i]).firstChild.nodeValue =  values[i];
 }
 function initclock(){
     updateClock();
     window.setInterval("updateClock()", 1);
 }