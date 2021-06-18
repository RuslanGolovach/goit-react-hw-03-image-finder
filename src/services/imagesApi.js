import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '21093401-486405d433525c61fcdc727ed';

const fetchImagesApi = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=12&page=${page}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImagesApi };
