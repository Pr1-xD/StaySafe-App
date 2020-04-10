let mouseCursor = document.querySelector(".cursor");
let imgHome = document.querySelector(".m1 img")

window.addEventListener('mousemove',cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left= e.pageX + 'px'; 
}



