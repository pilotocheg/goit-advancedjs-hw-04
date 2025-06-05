import axios from 'axios';

import { IMAGES_PER_PAGE } from './constants';

export async function fetchImages(searchQuery, page = 1) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '50578458-599512b8a758686bbac6d0702',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: IMAGES_PER_PAGE,
    },
  });

  return response.data;
}
