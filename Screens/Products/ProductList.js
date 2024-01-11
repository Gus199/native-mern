import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';

var { width } = Dimensions.get('window');

export default function ProductList(props) {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: '50%' }}>
      <View style={{ width: width / 2, backgroundColor: 'gainsboro' }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
