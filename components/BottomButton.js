import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const BottomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" type="feather" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
  addButton: {
    backgroundColor: '#8E44AD',
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#8E44AD',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BottomButton;
