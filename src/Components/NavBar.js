import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

const backImage = require('../img/btn_voltar.png');

export default class NavBar extends Component {

    render() {
        const {
            back,
            navigator
        } = this.props;
        if (back) {
            return (
                <View
                    style={[styles.titleBar, {
                        backgroundColor: this.props.backColor
                    }]}
                >
                    <TouchableHighlight
                        onPress={() => {
                            navigator.pop();
                        }}
                        underlayColor={this.props.backColor}
                        activeOpacity={0.3}
                    >
                        <Image source={backImage} />
                    </TouchableHighlight>
                    <Text style={styles.title}>
                        Tech Consulting
                    </Text>
                </View>
            );
        }
        return (
            <View style={styles.titleBar}>
                <Text style={styles.title}>
                    Tech Consulting
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleBar: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 80,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        paddingTop: 20
    }
});
