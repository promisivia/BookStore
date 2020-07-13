import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import {
  Button,
  Card,
  Text,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import UserStorage from '../utils/StorageUtils';
import CartList from '../components/CartList';
import axios from 'axios';
import qs from 'qs';
import {addOrder, Order, BookListItem} from '../services/OrderService';

export default function CartScreen({navigation}) {
  const [cartList, setCartList] = React.useState([]);
  const [userId, setUserId] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      UserStorage.getId().then(id => {
        setUserId(id);
        axios
          .post('http://10.0.2.2:8814/cart/get', qs.stringify({id: id}))
          .then(response => setCartList(response.data))
          .catch();
      });
    }, [navigation]),
  );

  const totalPrice = () => {
    let totalPrice = 0;
    if (cartList === null) return totalPrice;
    cartList.forEach(item => {
      if (item.selected === true) totalPrice += item.book.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const isDisable = () => {
    return totalPrice() - 0 === 0;
  };

  const onOrderSubmit = () => {
    let totalPrice = 0;
    let productList = [];
    cartList.forEach(item => {
      const book = item.book;
      if (item.selected === true) {
        totalPrice += book.price * item.quantity;
        productList.push(new BookListItem(book.id, item.quantity));
      }
    });
    let order = new Order(userId, totalPrice, true, productList);
    addOrder(order, data => setCartList(data), setVisible, setText).catch();
  };

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}>
          <Dialog.Content>
            <Paragraph>{text}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setVisible(false);
              }}>
              确认
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      {/*  headers */}
      <Card style={{margin: 10, padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 2, justifyContent: 'center'}}>选择</Text>
          <Text style={{flex: 3, justifyContent: 'center'}}>图片</Text>
          <Text style={{flex: 8, justifyContent: 'center'}}>信息</Text>
        </View>
      </Card>
      {/*  cart list */}
      <ScrollView>
        {cartList.length === 0 ? (
          <Text style={{flex: 1, justifyContent: 'center'}}>
            购物车空空如也，快去逛逛吧
          </Text>
        ) : (
          <CartList
            userId={userId}
            cartList={cartList}
            setCartList={setCartList}
          />
        )}
      </ScrollView>
      {/* button and price */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
          margin: 20,
        }}>
        <Text style={{flex: 3, fontSize: 20}}>总价：￥{totalPrice()}</Text>
        <Button
          style={{flex: 2}}
          mode="contained"
          disabled={isDisable()}
          onPress={onOrderSubmit}>
          结算
        </Button>
      </View>
    </View>
  );
}
