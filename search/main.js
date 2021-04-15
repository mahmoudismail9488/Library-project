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













































































































// const photo = document.getElementById('photo')
// photo.style.display = 'none'

// const container = decument.querySelector('div');
// const searchBtn = decument.getElementClassName('iconify')

// searchBtn.addEvenListener('click',doIt)

// function doIt() {
    
// }



// const container = document.querySelector('div');
// const searchBtn = document.getElementsByClassName('search')

// searchBtn.addEventListener('click',doIt)


// function doIt(){

// const val = document.getElementsByClassName('search');
// const value = val.value;
// fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
// .then((response) => {
//     if (response.status !== 200){
//     console.log(`looks like there is a problem . status code : ${response.status}`)
// } else {
//      return (response.json());
// }})


// .then((data) =>  {
//     for(let i = 0; i<data.items.length;i++) {
//     const containerdiv =  document.createElement('div');
//     const image = document.createElement('img');
//     const pTitle = document.createElement('p')
//     const pAuther = document.createElement('p')
//     const SearchBtn = document.createElement('search');


//     sec.setAttribute('class','cont')

//     conta.appendChild(div);
//     sec.appendChild(img);
//     sec.appendChild(p);
//     sec.appendChild(p);



//     im.src = data.items[i].volumeInfo.imageLinks.thumbnail;
//     p.innerHTML =  `Title : ${data.items[i].volumeInfo.title};`
//     p.innerHTML = `Auther : ${data.items[i].volumeInfo.publisher}`
       

//     }
// })
// }







