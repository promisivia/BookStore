import axios from 'axios';
import qs from 'qs';

export function Item(userId, bookId, quantity, selected) {
  this.userId = userId;
  this.bookId = bookId;
  this.quantity = quantity;
  this.selected = selected;
}

export const getCart = async (id, setData) => {
  axios
    .post('http://10.0.2.2:8814/cart/get', qs.stringify({id: id}))
    .then(response => setData(response.data))
    .catch(error => console.log(error));
};

export const addItem = async (userId, bookId) => {
  axios
    .post(
      'http://10.0.2.2:8814/cart/add',
      qs.stringify({
        userId: userId,
        bookId: bookId,
        quantity: 1,
        selected: true,
      }),
    )
    .then()
    .catch(error => console.log(error));
};

export const updateItem = async (item, setData) => {
  axios
    .post('http://10.0.2.2:8814/cart/update', qs.stringify(item))
    .then(response => setData(response.data))
    .catch(error => console.log(error));
};

export const deleteItem = async (userId, bookId, setData) => {
  axios
    .post(
      'http://10.0.2.2:8814/cart/delete',
      qs.stringify({userId: userId, bookId: bookId}),
    )
    .then(response => setData(response.data))
    .catch(error => console.log(error));
};
