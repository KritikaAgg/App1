import React from 'react';
import View from 'react-native';
import Text from 'react-native';
import { StyleSheet } from 'react-native';
import { CircularProgress } from 'react-native-gifted-charts';

const ScoreCircle = () => {
  return (
    <View style={styles.container}>
      <CircularProgress
        radius={80}
        strokeWidth={10}
        progressPercent={0}
        progressColor={'#8E44AD'}
        backgroundColor="#EDEDED"
        text={'0%'}
        textStyle={styles.percentage}
      />
      <Text style={styles.text}>Your Optimization Score is 0%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  percentage: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8E44AD',
  },
  text: {
    marginTop: 10,
    color: '#8E44AD',
    fontSize: 16,
  },
});

export default ScoreCircle;
