import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import Home from './src/screen/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})