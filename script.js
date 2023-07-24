var col = document.getElementById("col12");
var time = 10;

col.innerHTML = time--;
setTimeout(()=>{
    col.innerHTML = time--;
    setTimeout(()=>{
        col.innerHTML = time--;
        setTimeout(()=>{
            col.innerHTML = time--;
            setTimeout(()=>{
                col.innerHTML = time--;
                setTimeout(()=>{
                    col.innerHTML = time--;
                    setTimeout(()=>{
                        col.innerHTML = time--;
                        setTimeout(()=>{
                            col.innerHTML = time--;
                            setTimeout(()=>{
                                col.innerHTML = time--;
                                setTimeout(()=>{
                                    col.innerHTML = time--;
                                    setTimeout(()=>{
                                        col.innerHTML = "Happy Independence Day...!"
                                        col.style.color = "red";
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000) 
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

