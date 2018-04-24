import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';


import NavBar from './NavBar';

const contactImage = require('../img/detalhe_contato.png');

export default class Contact extends Component {

    render() {
        const { navigator } = this.props;
        return (
              <View>
                  <StatusBar
                      backgroundColor='#61BD8C'
                  />
                  <NavBar
                      back
                      navigator={navigator}
                      backColor='#61BD8C'
                  />

                  <View style={styles.header}>
                      <Image source={contactImage} />
                      <Text style={styles.title}>Contato</Text>
                  </View>

                  <View style={styles.contactDetail}>
                      <Text style={styles.details}>Lorem Ipsum Innun Dollor</Text>
                      <Text style={styles.details}>Lorem Ipsum Innun Dollor</Text>
                      <Text style={styles.details}>Lorem Ipsum Innun Dollor</Text>
                  </View>

              </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    title: {
        fontSize: 20,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    contactDetail: {
        padding: 20,
        marginTop: 10
    },
    details: {
        fontSize: 18,
        marginLeft: 5
    }
});
