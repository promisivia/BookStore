import axios from 'axios';

export function Order(userId, price, payed, productList) {
  this.userId = userId;
  this.price = price;
  this.payed = payed;
  this.productList = productList;
}

export function BookListItem(bookId, quantity) {
  this.bookId = bookId;
  this.quantity = quantity;
}

export const addOrder = async (order, setData, setVisible, setText) => {
  let requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(order),
    redirect: 'follow',
  };
  fetch('http://10.0.2.2:8814/order/add', requestOptions)
    .then(response => response.text())
    .then(result => {
      result = JSON.parse(result);
      if (result.status === 200) {
        setText('订单加入成功！');
      } else {
        setText(result.message);
      }
      setVisible(true);
      setData(result.data);
    })
    .catch(error => console.log(error));
};

export const getOrder = async (id, setData) => {
  axios
    .post('http://10.0.2.2:8814/order/get', qs.stringify({userId: id}))
    .then(response => {
      setData(response.data);
      console.log(response.data);
    })
    .catch(error => console.log(error));
};
