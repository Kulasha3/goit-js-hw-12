export function searchImg(userValue) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = '/api/';
  const KEY = '?key=42127236-8bfdbbfbeed8a2dadaca720e8';
  const PARAMS = `&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + END_POINT + KEY + PARAMS;

  return fetch(url).then(res => res.json());
}
