console.log('test');

// window.onload = function() {
//     document.querySelector('#home').focus();
// }

function generateHorsePicture() {
    let page = Math.floor(Math.random() * 26) + 1;
    console.log(page)

    let index = Math.floor(Math.random() * 20) + 1;
    console.log(index)
    
    fetch(`https://pixabay.com/api/?key=15274665-25c09e24eb205d6b8991024a3&image_type=photo&page=${page}&q=horse`)
        .then(res => res.json())
        .then(data => { 
                console.log(data.hits);
                return data.hits[index].largeImageURL;
            })
        .then(item => {
            console.log(item)
            document.querySelector('#home').setAttribute('style', `background-image: url(${item})`)
        });
};

generateHorsePicture();