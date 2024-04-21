import React from 'react';
import { View, Text, FlatList, Image, Button, Alert, StyleSheet } from 'react-native';
import { useCart } from '../CartContext';

const products = [
    {
      id: '1',
      name: 'Apples',
      price: '1.99',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg'
    },
    {
      id: '2',
      name: 'Oranges',
      price: '2.99',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg'
    },
    // {
    //   id: '3',
    //   name: 'Bananas',
    //   price: '1.59',
    //   imageUrl: 'https://cdn.pixabay.com/photo/2018/06/21/18/22/bananas-3487793_1280.jpg'
    // },
    // {
    //   id: '4',
    //   name: 'Grapes',
    //   price: '3.99',
    //   imageUrl: 'https://cdn.pixabay.com/photo/2016/09/10/17/18/grapes-1659116_1280.jpg'
    // },
    {
      id: '5',
      name: 'Strawberries',
      price: '2.50',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberry-2960533_960_720.jpg'
    }
    // ... add more products as needed
  ];
  
  
  
  
  
export default function HomeScreen({ navigation }) {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    Alert.alert('Product added', `${product.name} has been added to your cart.`);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});
