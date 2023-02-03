// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const galleryRoot = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryRoot.insertAdjacentHTML('beforeend', cardsMarkup);


function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {

        return `
        <a class="gallery__item" 
        href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" 
  />
</a>
        `;
    })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',


});
console.log(galleryItems);