import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
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

refs.itemsList.innerHTML = makeGalleryItems(galleryItems);

refs.itemsList.addEventListener('click', onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  const modalOption = {
    onShow: instance => {
      document.addEventListener('keydown', onEscPress);
    },
    onClose: instance => {
      document.removeEventListener('keydown', onEscPress);
    },
  };

  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`, modalOption);

  instance.show();

  function onEscPress(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}

