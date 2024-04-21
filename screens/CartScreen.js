import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCart } from '../CartContext';

export default function CartScreen() {
  const { cart } = useCart();

  return (
    <FlatList
      data={cart}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartItem}>
          <Text>{item.name} - ${item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cartItem: {
    // styles for your cart item
  },
});
