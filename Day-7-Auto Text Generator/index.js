const text = document.getElementById("heading");

const prog = "I am Shiv Pratap Singh , A Web Developer";
let idx = 1;

setInterval(writeText, 150);

function writeText() {
    text.innerHTML = prog.slice(0,idx);
    idx++;
    if(idx>prog.length){
        idx = 1;
    }
}