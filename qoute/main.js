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

  const quoteText = document.querySelector('.quote')
  const authorText = document.querySelector('.author');
  const newQuoteBtn = document.getElementById('new_quote');
  
  newQuoteBtn.addEventListener("click", getQuote)
  function getQuote(){
    fetch("https://api.quotable.io/random")
    .then((Response)=>Response.json())
    .then(data =>{
        quoteText.textContent = data.content;
        authorText.textContent= data.author;
    })
    .catch(error => { console.log('Something went wrong', error);
    });

  }