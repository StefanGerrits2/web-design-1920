window.scrollTo({ top: 0, behavior: 'smooth' });

function generateHorsePicture() {
    let index = Math.floor(Math.random() * 10) + 1;
    document.querySelector('#home').setAttribute('style', `background-image: url(./img/horse${index}.jpg)`)
};

generateHorsePicture();