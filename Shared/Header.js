import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';

function Header(props) {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={require('../assets/Logo.png')} resizeMode='contain' style={{ height: 50 }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 100, // Todo : Delete This Parts
  },
});
export default Header;
