import { searchImg } from './js/pixabay-api';
import { checkUp, noMatch } from './js/render-functions';
import { imgRender } from './js/render-functions';
import { gallery } from './js/render-functions';
import { errNotify } from './js/render-functions';

export const refs = {
  formEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const search = e.target.elements.text.value.trim();
  refs.loader.style.display = 'block';

  if (!search) {
    checkUp();
    return;
  }
  searchImg(search)
    .then(data => {
      if (data.hits.length === 0) {
        noMatch();
        refs.galleryEl.innerHTML = '';
      } else {
        imgRender(data);
        gallery.on('show.simplelightbox');
        gallery.refresh();
      }
      refs.loader.style.display = 'none';
    })
    .catch(err => errNotify(err));

  e.target.reset();
}
