import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useFonts } from 'expo-font';

export default function Discover({ navigation }) {
  const [loaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/tripflip_logo.png')}
        style={{ width: 58, height: 96 }}
      />
      <TouchableHighlight onPress={()=>navigation.navigate("CreateAccount")} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Discover page</Text>
        </View>
      </TouchableHighlight>
      <Text stule={styles.text}>Yeee</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontFamily: 'Poppins-Light',
    frontSize: 12,
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#4A48B8',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    frontSize: 16,
  }
});