import { INITIAL_PAGE } from './js/constants';
import { fetchImages } from './js/pixabay-api';
import {
  clearGallery,
  renderImages,
  showLoader,
  showLoadMoreBtn,
} from './js/render-functions';
import { extractSearchQuery, showMessage } from './js/utils';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

const initialState = {
  page: INITIAL_PAGE,
  searchQuery: '',
  total: 0,
  allLoaded: false,
};

let state = { ...initialState };

function resetState(searchQuery) {
  state = { ...initialState, searchQuery };
}

async function loadImages() {
  showLoader(true);
  showLoadMoreBtn(false);

  try {
    const { page, searchQuery } = state;

    const { hits: images, totalHits } = await fetchImages(searchQuery, page);

    state.total += images.length;

    if (state.total >= totalHits) {
      state.allLoaded = true;
    }

    if (page === INITIAL_PAGE && !images.length) {
      showMessage(
        'error',
        'Sorry, there are no images matching your search query. Please, try again!'
      );

      return;
    }

    renderImages(images, page > INITIAL_PAGE);

    if (state.allLoaded) {
      showMessage(
        'info',
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    showMessage(
      'error',
      error.message || 'Failed to fetch images. Please, try again later!'
    );

    console.error(error);
  } finally {
    showLoader(false);

    if (!state.allLoaded) {
      showLoadMoreBtn(true);
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const searchQuery = extractSearchQuery(event.currentTarget);

  if (!searchQuery) {
    showMessage('error', 'The search query can not be empty!');

    return;
  }

  resetState(searchQuery);
  form.reset();
  clearGallery();

  loadImages();
}

function onLoadMoreBtnClick() {
  state.page += 1;

  loadImages();
}

form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
