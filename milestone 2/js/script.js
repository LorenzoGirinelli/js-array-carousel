const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
const mainImagesContainer = document.querySelector('.main-image-container');
// inserisco i single-image all' interno dell' html
for( let i = 0; i < items.length; i++ ) {
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisDescription = text[i];

    console.log(thisPath);

    const newImageDiv = `
    <div class="single-image">
        <img src="${thisPath}" alt="">

        <div class="single-image-text">
            <h3>${thisTitle}</h3>
            <p>${thisDescription}</p>
        </div>
    </div>
    `;
    

    mainImagesContainer.innerHTML += newImageDiv;
}

const singleImages = document.getElementsByClassName('single-image');
singleImages[0].classList.add('active');

// thumbs
const thumbs = document.querySelector('.thumbs')
for( let i = 0; i < items.length; i++ ) {
    const thisPath = items[i];
    const newThumbDiv = `
    <div class="single-thumb">
        <img src="${thisPath}" alt="">
    </div>
    `;

    thumbs.innerHTML += newThumbDiv;
}