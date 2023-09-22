function startPointerAnimation(){
    const ele = document.getElementById("pointAnime");
    var state=""
    function loop(){
        if (state=="")
            state="\u2588"
        else
            state=""
        ele.innerText=state;
        setTimeout(loop, 500);
    }
    loop()
}