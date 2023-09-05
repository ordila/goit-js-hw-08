// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const refs = {
  listElement: document.querySelector('.gallery'),
};

console.log(refs.listElement);

function galleryMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>
    
        `;
    })
    .join('');
  return markup;
}

function renderGallery(galleryItems) {
  const markup = galleryMarkup(galleryItems);
  refs.listElement.insertAdjacentHTML('beforeend', markup);
  console.log(markup);
}
renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
