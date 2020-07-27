window.onload=function(){

    var seconds=00;
    var tens = 00;
    var minites=00;

    var appendTens=document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinites = document.getElementById('minites')
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop')
    var buttonReset = document.getElementById('reset');

    var Intervel ;

    buttonStart.onclick= function(){
        clearInterval(Intervel);
        Intervel=setInterval(startTimer,10);
        buttonStart.innerHTML='Running'
        buttonStop.innerHTML='Stop'
    }

    buttonStop.onclick=function(){
        clearInterval(Intervel);
        buttonStart.innerHTML='Continue'
        buttonStop.innerHTML='Stoped'

    }

    buttonReset.onclick=function(){
        clearInterval(Intervel);
        tens=00;
        seconds=00;
        appendSeconds.innerHTML=tens;
        appendTens.innerHTML=seconds;
        buttonStart.innerHTML='Start'
        buttonStop.innerHTML='Stop'
    }

    function startTimer(){
        tens++;

        if (tens<9){
            appendTens.innerHTML='0'+tens;
        }
        if (tens>9){
            appendTens.innerHTML=tens;
        }

        if (tens>99){
            seconds++;
            appendSeconds.innerHTML='0'+seconds;
            tens=0;
            appendTens.innerHTML='0'+0;
        }

        if (seconds>9){
            appendSeconds.innerHTML=seconds;
        }

        if (seconds>60){
            minites++;
            appendMinites.innerHTML='0'+minites;
            seconds=0;
            appendSeconds.innerHTML='0'+0;
        }

        if (minites>9){
            appendMinites.innerHTML=minites;
        }





    }


}