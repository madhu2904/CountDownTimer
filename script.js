
   //for elements refferel
   $('#start').addEventListener('click',startTimer);
   $('#stop').addEventListener('click',stopTimer);
   $('#reset').addEventListener('click',resetTimer);

   const hourE = $('#hours');
   const minuteE=$('#mins');
   const secondE=$('#seconds');

   let hours=0;
   let minutes=0;
   let seconds=0;

   function startTimer()
   {
    const Id=setInterval(updateTimer,1000);
   } 
function updateTimer()
{
    if (seconds == 60)
    {  
        seconds=0;
        minutes++;
        if(minutes == 60)
        {
            minutes=0;
            hours++;

        }


    }
}
    hourE.text() = hours.toString().padStart(2, '0');
    minuteE.text() = minutes.toString().padStart(2, '0');
    secondE.text() = seconds.toString().padStart(2, '0');
function stopTimer(){
    clearInterval(Id);
}

function resetTimer(){
    hours=0;
    minutes=0;
    seconds=0;
    hourE.text()='00';
    minuteE.text()='00';
    secondE.text()='00';
    clearInterval(Id);

}
