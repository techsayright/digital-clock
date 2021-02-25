let h;
let m;
let d;
let s;
let final;
let ampm;
setInterval(() => {

    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    


    // for hour
    if(h<12){
        h;
        ampm="AM";
        
        if(h<10){
            h="0"+h;
        }
    }
    else if(h==12){
        h;
        ampm="PM";
    }
    else if(h>12){
        h=h-12;
        ampm="PM";

        if(h<10){
            h="0"+h;
        }
    }

    // for second
    if(s<10){
        s="0"+s;
    }

    // for minute
    if(m<10){
        m="0"+m;
    }

    final = h + ":" + m + ":" + s + " "+ ampm;
    document.getElementById('place').innerText = final;


}, 1000);
