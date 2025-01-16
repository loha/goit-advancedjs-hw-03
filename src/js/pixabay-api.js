const API_KEY = '47642330-01773e177615e156ed5ec02c5';
const PIXABAY_HOST = 'https://pixabay.com/api/';

const searchPixabayImages = query => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${PIXABAY_HOST}?${params}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

export { searchPixabayImages };
