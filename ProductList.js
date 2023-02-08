import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const productListItem = ({ item }) => (
<View style={styles.product_list_item}>
<Text style={styles.price}>{item.price}</Text>
<Image
    style={styles.product_pic}
    source={{uri: item.product_pic}}
    />
<Text style={styles.about_product}>{item.about_product}</Text>
</View>
  );

const ProductList = ({ item }) => (
<FlatList
    style={styles.product_list}
    data={item}
    renderItem={productListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ProductList;

const styles = StyleSheet.create({
    'price': {
        'color': '#080707',
        'fontSize': 15,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'product_pic': {
        'width': '30vw',
        'height': '20vw',
        'marginTop': 5
    },
    'about_product': {
        'fontSize': 13,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'textAlign': 'center'
    }
});