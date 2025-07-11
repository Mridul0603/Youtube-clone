var hamburger =  document.querySelector(".hamburger")
var sidebar =  document.querySelector(".sidebar")
var container =  document.querySelector(".container")

hamburger.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}