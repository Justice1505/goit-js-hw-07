import { galleryItems } from './gallery-items.js';

// Change code below this line

const imagesLibrary = {
  itemsList: document.querySelector('.gallery'),
};

function makeGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </div>`;
    })
    .join('');
}

imagesLibrary.itemsList.innerHTML = makeGalleryItems(galleryItems);

imagesLibrary.itemsList.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  const modalOption = {
    onShow: () => {
      document.addEventListener('keydown', onEscPress);
    },
    onClose: () => {
      document.removeEventListener('keydown', onEscPress);
    },
  };

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, modalOption);

  instance.show();

  function onEscPress(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}
