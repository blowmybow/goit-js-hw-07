import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItemsImage = createGalleryItemsImage(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemsImage);

function createGalleryItemsImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `;
    })
    .join('');
}

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImage = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener('keydown', event => {
    if (event.key === 'ESCAPE') {
      instance.close();
    }
  });
});
