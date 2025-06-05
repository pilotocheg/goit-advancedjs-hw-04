import iziToast from 'izitoast';

export function showMessage(type, message) {
  iziToast[type]({
    message,
    position: 'topRight',
    maxWidth: 432,
  });
}

export function extractSearchQuery(form) {
  const { search } = Object.fromEntries(new FormData(form));

  return search.trim();
}
