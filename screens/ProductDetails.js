// screens/ProductDetails.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductDetails({ route, navigation }) {
  const { productId } = route.params;
//   // Fetch product details using productId
const product = { id: productId, name: 'Apple', price: '1.00', description: 'Fresh apples' };
  // A sample array of products - this should eventually come from your backend or state management system
// const products = [
//     { id: '1', name: 'Apples', price: '1.99', image: require('./assets/apples.jpg') },
//     { id: '2', name: 'Oranges', price: '2.99', image: require('./assets/oranges.jpg') },
//     { id: '3', name: 'Bananas', price: '1.59', image: require('./assets/bananas.jpg') },
//     // ... more products
//   ];
  

  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => { /* Add to cart logic */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
