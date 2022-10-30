import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import convertToCelcius from './utils/convertToCelcius';

export default function App() {
  const [ error, setError ] = useState(null)
  const [ currentWeather, setCurrentWeather ] = useState(null)
  const [ unitsSystem, setUnitsSystem ] = useState('metric')

  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?" 

  useEffect(() => {
    // use load function to load the app before the useEffect
    load()
  }, [])

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('Access to location denaid')
        return
      }

      const { coords } = await Location.getCurrentPositionAsync()
      const { latitude, longitude } = coords

      const weatherURL = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=3198790079460ac0ae12586f0b9b99ce`

      const response = await fetch(weatherURL)
      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
      } else {
        setError(result.message) 
      }
    } catch (error) {
      setError(error.message)
    }
  }

  if (currentWeather) {
    const { main: { temp } } = currentWeather 

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.main}>
          <Text>{ temp }</Text>
        </View>
      </View>
    );
  } else {
    console.log('-->', process.env.API_KEY)
    return (
      <View style={styles.container}>
      <Text>{ error }</Text>
      <StatusBar style="auto" />
    </View>
    )
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1
  }
});
