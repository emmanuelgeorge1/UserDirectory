import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from './styles/HomeScreen.Style';
import { TEXTS } from '../constants/Constants';


export default  function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{TEXTS.EMPTY_SCREEN}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }


