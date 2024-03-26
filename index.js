let stopWatch = {
    begin: null,
    end: null,
    result: null,
    start: function(){
        this.begin = new Date();
        console.log("time recording started")
    },
    stop: function(){
        this.end = new Date();
        console.log("time recording stopped")
    },
    print: function(){
        this.result = this.end - this.begin;
        console.log(`Time taken: ${this.result}`);
        return this.result;
    }

}

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var show = document.getElementById("show");
var update = document.getElementById("update");

start.addEventListener("click", function(){
    start.style.backgroundColor = "red";
    stopWatch.start();
    start.disabled = true;
    stop.disabled = false;

})

stop.addEventListener("click", function(){
    stop.style.backgroundColor = "red";
    stopWatch.stop();
    stop.disabled = true;
    start.disabled = false;
})

show.addEventListener("click", function(){
    show.style.backgroundColor = "red";
    res = stopWatch.print();
    update.textContent = res;
})
