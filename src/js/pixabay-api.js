import axios from 'axios';

export async function searchImg(userValue, userPage) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;

  const params = {
    key: '42127236-8bfdbbfbeed8a2dadaca720e8',
    q: `${userValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: userPage,
    per_page: 15,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
