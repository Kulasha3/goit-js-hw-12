import { getImagesByQuery } from './js/pixabay-api';
import { 
  createGallery, 
  clearGallery, 
  showLoader, 
  hideLoader, 
  showLoadMoreButton, 
  hideLoadMoreButton,
  checkUp, 
  noMatch, 
  errNotify, 
  infoNotify,
  gallery 
} from './js/render-functions';

const refs = {
  formEl: document.querySelector('.form'),
  galleryForm: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.more'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.loadBtn.addEventListener('click', onLoadBtnClick);

let page;
let resultPages;
let search;

async function onFormSubmit(e) {
  e.preventDefault();
  search = e.target.elements.text.value.trim();
  page = 1;

  if (!search) {
    checkUp();
    return;
  }

  hideLoadMoreButton();
  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(search, page);

    if (data.hits.length === 0) {
      noMatch();
      hideLoader();
      return;
    }

    resultPages = Math.ceil(data.totalHits / 15);
    createGallery(data);
    
    if (page < resultPages) {
      showLoadMoreButton();
    }
    
  } catch (err) {
    errNotify(err);
  }
  
  hideLoader();
  e.target.reset();
}

async function onLoadBtnClick() {
  page += 1;
  showLoader();
  
  try {
    const data = await getImagesByQuery(search, page);
    createGallery(data);
    
    // Плавное прокручивание
    const height = refs.galleryForm.firstElementChild.getBoundingClientRect().height;
    scrollBy({
      behavior: 'smooth',
      top: height * 2,
    });

    // Проверяем, достигли ли конца
    if (page >= resultPages) {
      hideLoadMoreButton();
      infoNotify();
    }
    
  } catch (err) {
    errNotify(err);
  }
  
  hideLoader();
}
