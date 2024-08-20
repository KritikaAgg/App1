import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'; 

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="menu" type="feather" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.logo}>ONETAP</Text>
      <TouchableOpacity>
        <Icon name="refresh" type="material" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#7D3C98',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
