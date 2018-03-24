import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class CustomButton extends Component {
    render() {
        return (
        <TouchableHighlight onPress={this.props.onPress}>
            <View style={styles.containerView}>
                <Text style={styles.label}>{this.props.label}</Text>
            </View>
        </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5
    },
    label: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
})
