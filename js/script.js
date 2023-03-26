let totalMenu = document.querySelector('.totalMenu');
document.body.addEventListener('keydown', keyHandler)
 function  keyHandler () {
    console.log(event)
    if (event.key === "Escape") {
        totalMenu.style.display = 'none'
    }
    else {
        contextMenuHandler();
    }
};
totalMenu.style.display = 'none';
function contextMenuHandler() {
    event.preventDefault();
        totalMenu.style.top = event.pageY + 'px';
        totalMenu.style.left = event.pageX + 'px';
        totalMenu.style.display = 'block';
}
function clickHandler() {
    totalMenu.style.display = 'none'
}