// Listing images by Api 
const conta = document.querySelector('div');
window.onload = load();


function load(){

fetch('https://www.googleapis.com/books/v1/volumes?q=fantastic&maxResults=30')
.then((response) => {
    if (response.status !== 200){
    console.log(`looks like there is a problem . status code : ${response.status}`)
} else {
     return (response.json());
}})


.then((data) =>  {
    for(let i = 0; i<data.items.length;i++) {
    const sec =  document.createElement('section');
    const im = document.createElement('img');
    const p = document.createElement('p')
    const p2 = document.createElement('p')



    sec.setAttribute('class','cont')

    conta.appendChild(sec);
    sec.appendChild(im);
    sec.appendChild(p);
    sec.appendChild(p2);


        im.src = data.items[i].volumeInfo.imageLinks.thumbnail;
        p.innerHTML = `Title : ${data.items[i].volumeInfo.title}`;
        p2.innerHTML = ` Auther : ${data.items[i].volumeInfo.publisher}`;
        console.log(p.textContent)
        console.log(p2.textContent)



    }
})
}



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

const clickImg = document.getElementById('click-img');
const appearClick = document.getElementById('appear-click');

appearClick.addEventListener('click',appear= () => {clickImg.style.display="block";} )
closeBtn.addEventListener('click',disappear= () => {clickImg.style.display="none";})

window.onclick = function(event){
    if(event.target == clickImg){
        clickImg.style.display = "none";
    }
}