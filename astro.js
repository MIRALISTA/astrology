var tm

function showMenu(e) {
    var bounds = e.getBoundingClientRect();
    document.getElementById('sub-menu').style.left = bounds.left + "px";   //JAVA SCRIPT
    document.getElementById('sub-menu').style.width = bounds.width + "px";
    document.getElementById('sub-menu').style.visibility = "visible";
}
function hideMenu(e) {
    clearTimeout(tm)
    tm = setTimeout(function(){
        document.getElementById('sub-menu').style.visibility = "hidden";
    }, 500)
}
function cancelHide(){
    clearTimeout(tm)
}