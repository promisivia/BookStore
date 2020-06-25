import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../style/style';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import {getBook} from '../services/BookService';
import {addItem} from '../services/CartService';
import UserStorage from '../utils/StorageUtils';

export default function DetailScreen({route}) {
  const [product, setData] = React.useState([]);
  const [userId, setUserId] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const {itemId} = route.params;

  React.useEffect(() => {
    getBook(itemId, data => setData(data)).catch();
    UserStorage.getId().then(data => setUserId(data));
  }, [itemId]);

  const {
    inventory,
    isbn,
    id,
    price,
    name,
    author,
    image,
    description,
    type,
  } = product;

  const addToCart = () => {
    addItem(userId, id).then(setVisible(true));
  };

  return (
    <View style={styles.main}>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}>
          <Dialog.Content>
            <Paragraph>加入成功</Paragraph>
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
      <Image
        style={{height: 280, marginBottom: '5%'}}
        resizeMode="contain"
        source={{uri: image}}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>￥{price}</Text>
      <Text>作者：{author}</Text>
      <Text>ISBN：{isbn}</Text>
      <Text>分类：{type}</Text>
      <Text>
        {inventory !== 0 ? (
          <Text>
            有货：
            <Text className={'inventory'}>库存{inventory}件</Text>
          </Text>
        ) : (
          <Text className={'status'}>无货</Text>
        )}
      </Text>
      <Text numberOfLines={4}>{description}</Text>
      <Button
        style={{margin: 20, justifyContent: 'flex-end'}}
        mode="contained"
        disabled={inventory === 0}
        onPress={addToCart}>
        add to cart
      </Button>
    </View>
  );
}
