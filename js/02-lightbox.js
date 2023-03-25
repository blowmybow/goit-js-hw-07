import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemsImage = createGalleryItemsImage(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemsImage);

function createGalleryItemsImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
            />
        </a>
    </li>
    `;
    })
    .join('');
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
