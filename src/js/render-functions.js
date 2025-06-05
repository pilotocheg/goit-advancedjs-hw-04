import SimpleLightbox from 'simplelightbox';

const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

const lightBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function toggleElementVisibility(element, visible) {
  element.classList[visible ? 'add' : 'remove']('visible');
}

export function showLoader(visible) {
  toggleElementVisibility(loader, visible);
}

export function showLoadMoreBtn(visible) {
  toggleElementVisibility(loadMoreBtn, visible);
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderImages(images, withScroll) {
  const galleryItemClassName = 'gallery-item';

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="${galleryItemClassName}">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="gallery-item-info">
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Likes</p>
            <p class="gallery-item-info-value">${likes}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Views</p>
            <p class="gallery-item-info-value">${views}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Comments</p>
            <p class="gallery-item-info-value">${comments}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Downloads</p>
            <p class="gallery-item-info-value">${downloads}</p>
          </div>
        </div>
        </a>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const cardItem = document.querySelector(`.${galleryItemClassName}`);

  if (withScroll && cardItem) {
    const { height } = cardItem.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }

  lightBox.refresh();
}
