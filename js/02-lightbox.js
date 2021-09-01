import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesLibrary = {
  itemsList: document.querySelector('.gallery'),
};

function makeGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> </li>`;
    })
    .join('');
}

imagesLibrary.itemsList.innerHTML = makeGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
  showCounter: false,
  disableScroll: false,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});
// console.log(gallery);

// imagesLibrary.itemsList.addEventListener('click', onImgClick);

// function onImgClick(e) {
//   e.preventDefault();

//   gallery.open('.gallery');
// }
