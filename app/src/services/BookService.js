import axios from 'axios';
import qs from 'qs';

export const getBook = async (id, setData) => {
  axios
    .post('http://10.0.2.2:8814/book/get/one', qs.stringify({id: id}))
    .then(response => setData(response.data))
    .catch(error => console.log(error));
};

export const getBooks = async setData => {
  axios
    .get('http://10.0.2.2:8814/book/get/all')
    .then(response => setData(response.data))
    .catch(error => console.log(error));
};
