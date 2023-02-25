import axios from 'axios';

const apiKey = '33025526-c7f8a1e0e4b08b9a5d2f6635c';
const perPage = 12;

 const fetchPost = async (search, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${perPage}&page=${page}`
  );
  return response.data.hits;
};
export default fetchPost
