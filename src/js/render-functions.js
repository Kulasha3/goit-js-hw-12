import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Создаем экземпляр SimpleLightbox
export let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// Получаем ссылки на DOM элементы
const refs = {
  galleryForm: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadBtn: document.querySelector('.more'),
};

// Обязательные функции согласно ТЗ
export function createGallery(images) {
  const markup = images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${likes}</p>
  <p><b>Views</b> ${views}</p>
  <p><b>Comments</b> ${comments}</p>
  <p><b>Downloads</b> ${downloads}</p>
 </div>
</li>`;
      }
    )
    .join('\n');
  
  refs.galleryForm.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function clearGallery() {
  refs.galleryForm.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  refs.loadBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  refs.loadBtn.classList.add('hidden');
}

// Дополнительные функции для уведомлений
export function checkUp() {
  iziToast.warning({
    title: 'Caution',
    message: 'Please type something to search!',
    position: 'topRight',
  });
}

export function noMatch() {
  iziToast.warning({
    title: 'Caution',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

export function errNotify(err) {
  iziToast.warning({
    title: 'Caution',
    message: `Error: ${err}`,
    position: 'topRight',
  });
}

export function infoNotify() {
  iziToast.info({
    title: 'Info',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
  });
}
