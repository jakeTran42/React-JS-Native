import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ForecastView from './forecast-view'
import CustomButton from './custom-button'

const weatherArr = [
    {date: 'Mon',  temp: 44},
    {date: 'Tues', temp: 42},
    {date: 'Wed',  temp: 38},
    {date: 'Thu',  temp: 35},
    {date: 'Fri',  temp: 34},
    {date: 'Sat',  temp: -37},
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dayAndLocation}>
            <Text style={styles.title}>San Francisco </Text>
            <Text style={styles.date}>Sunday, Oct 1</Text>
        </View>

        <View style={styles.todayForecast}>
            <Text style={styles.temp}>57˚</Text>
            <Text style={styles.date}>Heavy Rain</Text>
        </View>

        <View style={styles.conditionView}>
            <View style={styles.nameView}>
                <Text style={styles.valueOne}>Humidity  </Text>
                <Text style={styles.valueOne}>Wind  </Text>
            </View>
            <View style={styles.valueView}>
                <Text style={styles.valueTwo}>78%</Text>
                <Text style={styles.valueTwo}>Apocolyse</Text>
            </View>

        </View>

        <ForecastView weatherArr={weatherArr}/>

        <CustomButton label="Hello World" onPress={() => {
            console.log('hello')
        }} />

        <View style={styles.submitField}>
            <TextInput
                editable={true}
                maxLength={40}
                style={{
                    height: 50,
                    width: 250,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    fontSize: 20,
                }}
                placeholder="City"
                onChangeText={(text) => this.setState({text})}
            />

            <Button
                title='Button'
                buttonStyle={{
                    height: 50,
                    width: 50,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor: 'gray',
                    borderWidth: '2',
                    color: "#841584"
                }}
            />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },

  title: {
      fontSize: 46,
      fontWeight: 'bold',
  },

  date: {
    fontSize: 24
  },

  temp: {
      fontSize: 120,
      fontWeight: 'bold',
  },

  todayForecast: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },

  dayAndLocation: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },

  conditionView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
  },

  nameView: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
  },

  valueView: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
  },

  valueOne: {
      fontSize: 20,
      display: 'flex',
      justifyContent: 'space-between',
  },

  valueTwo: {
      fontSize: 20,
      display: 'flex',
      justifyContent: 'space-between'
  },

  submitField: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
  }

});
