const API_KEY = '32144711-033503d2fc66376fdc1e9e47c';
const FETCH_URL = 'https://pixabay.com/api/';

function fetchGallery(page = 1, topic = 'cat') {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: topic,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });
  return fetch(`${FETCH_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

const pixabay = {
  fetchGallery,
};
export { pixabay };