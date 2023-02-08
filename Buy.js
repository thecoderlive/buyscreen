import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ProductList from './ProductList'

const Buy = () => (
<ScrollView style={styles.buy} showsVerticalScrollIndicator={false}>
<ProductList item={item.product_list}/>
</ScrollView>
)

export default Buy;

const styles = StyleSheet.create({
    
});