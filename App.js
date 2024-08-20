import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from './components/Header';
import { ScoreCircle } from './components/ScoreCircle';
import BottomButton from './components/BottomButton';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <ScoreCircle />
        <BottomButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
