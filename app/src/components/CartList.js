import React from 'react';
import {styles} from '../style/style';
import {deleteItem, Item, updateItem} from '../services/CartService';
import {Image, View} from 'react-native';
import {Card, Checkbox, Text, Title} from 'react-native-paper';
import UIStepper from 'react-native-ui-stepper';

export default function CartList(props) {
  const {userId, cartList, setCartList} = props;

  let CartItem = (key, item) => {
    const {book, quantity, selected} = item;
    console.log(quantity);
    let addQuantity = value => {
      if (value === 0) {
        deleteItem(userId, book.id, data => setCartList(data)).catch();
      } else {
        let newItem = new Item(userId, book.id, value, selected);
        updateItem(newItem, data => setCartList(data)).catch();
      }
    };

    let changeSelect = () => {
      let newItem = new Item(userId, book.id, quantity, !selected);
      updateItem(newItem, data => setCartList(data)).catch();
    };

    return (
      <Card style={{margin: 10}} key={key}>
        <View style={{flexDirection: 'row'}}>
          <Checkbox
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            status={selected ? 'checked' : 'unchecked'}
            onPress={changeSelect}
            color={'#607d8b'}
          />
          <Image
            style={{flex: 3, height: 100, margin: 10}}
            resizeMode="contain"
            source={{uri: book.image}}
          />
          <View style={{flex: 8, marginTop: 10}}>
            <Text style={styles.name}>{book.name}</Text>
            <Title style={styles.price}>￥{book.price}</Title>
            <UIStepper
              initialValue={quantity}
              value={quantity}
              displayValue={true}
              minimumValue={0}
              maximumValue={book.inventory}
              onValueChange={addQuantity}
            />
          </View>
        </View>
      </Card>
    );
  };

  return cartList.map((item, key) => {
    return CartItem(key, item);
  });
}
