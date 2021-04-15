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





const container = document.querySelector('div');
const searchBtn = document.getElementById('sub-btn')
const photo = document .getElementById('photo');


searchBtn.addEventListener('click',doIt)
function doIt() {

const val = document.getElementById('search');
const value = val.value;
fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
.then((response) => {
    if (response.status !== 200){
    console.log(`looks like there is a problem . status code : ${response.status}`)
} else {
     return (response.json());
}})




.then((data) =>  {
    container.textContent = null;
    photo.style.display = "none";


    for(let i = 0; i<data.items.length;i++) {
    const boxSection =  document.createElement('section');
    const image = document.createElement('img');
    const title = document.createElement('p')
    const auther = document.createElement('p')
    const link = document.createElement('a');

    boxSection.setAttribute('class','box')

    container.appendChild(boxSection);
    boxSection.appendChild(image);
    boxSection.appendChild(title);
    boxSection.appendChild(auther);
    link.appendChild(image)
    boxSection.appendChild(link);

    
    link.innerHTML = `<a href="${data.items[i].volumeInfo.previewLink}" target="_blank"><img src="${data.items[i].volumeInfo.imageLinks.smallThumbnail}"></a>`

    image.src = data.items[i].volumeInfo.imageLinks.thumbnail;
    title.innerHTML =  `Title : ${data.items[i].volumeInfo.title}`;
    auther.innerHTML = `Auther : ${data.items[i].volumeInfo.publisher}`




    }

})
}

