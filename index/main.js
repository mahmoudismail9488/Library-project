/* about section js to pop it up like a massage */
const closeBtn = document.getElementById('closeBtn');
const hiddenSection = document.getElementById('about');
const appearAbout = document.getElementById('appear-about');

appearAbout.addEventListener('click',appear= () => {hiddenSection.style.display="block" ;})
closeBtn.addEventListener('click',disappear= () => {hiddenSection.style.display="none";})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == hiddenSection) {
        hiddenSection.style.display = "none";
    }
  }
    