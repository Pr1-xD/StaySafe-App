let mouseCursor = document.querySelector(".cursor");
let imgHome = document.querySelector(".m1 img");
let up = document.querySelector(".ud");

window.addEventListener('mousemove',cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left= e.pageX + 'px'; 
}

function purple() {
    mouseCursor.style.border=" 2px solid #aeefec";
}

function undo(){
    mouseCursor.style.border=" 2px solid black";
}

function exp(){
    mouseCursor.style.border=" 3px solid #916dd5"
    mouseCursor.style.width="4rem";
    mouseCursor.style.height="4rem";
}

function undoexp(){
    mouseCursor.style.border=" 2px solid black";
    mouseCursor.style.width="3rem";
    mouseCursor.style.height="3rem";
}



