var accord1 = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accord1.length; i++) {
  accord1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}