import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

class RandomNumber extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };
    handlePress = () => {
        if (this.props.isDisabled) { return;}
        this.props.onPress(this.props.id);
    };
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.randomNumber, this.props.isDisabled && styles.selected]}>
                    {this.props.number}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    randomNumber: {
        fontSize: 50,
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 2.5,
        borderRadius: 20,
        borderColor: 'black',
        overflow: 'hidden',
        width: 110,
        marginHorizontal: 15,
        marginVertical: 20,
        textAlign: 'center',
    },
    selected: {
        opacity: 0.3,
    }
});

export default RandomNumber;