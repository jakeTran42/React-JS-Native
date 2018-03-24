import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DailyForecast from './daily-forecast'

export default class ForecastView extends Component {
    render() {

        const dailyView = this.props.weatherArr.map((day, i) => {
            return <DailyForecast key={i} dayOfWeek={day.date} tempOfWeek={day.temp} />
        })

        return (
            <View style={styles.forecast}>
                {dailyView}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    forecast: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
