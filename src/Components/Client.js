import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import NavBar from './NavBar';

const clientDetail = require('../img/detalhe_cliente.png');
const firstClient = require('../img/cliente1.png');
const secondClient = require('../img/cliente2.png');


export default class Client extends Component {

    render() {
        const { navigator } = this.props;
        return (
              <View>
                  <StatusBar
                      backgroundColor='#CCC'
                  />
                  <NavBar
                      back
                      navigator={navigator}
                  />

                  <View style={styles.header}>
                      <Image source={clientDetail} />
                      <Text style={styles.title}>Nossos clientes</Text>
                  </View>

                  <View style={styles.clientDetail}>
                      <Image source={firstClient} />
                      <Text style={styles.details}>Lorem Ipsum Innun Dollor</Text>
                  </View>

                  <View style={styles.clientDetail}>
                      <Image source={secondClient} />
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
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    clientDetail: {
        padding: 20,
        marginTop: 10
    },
    details: {
        fontSize: 18,
        marginLeft: 5
    }
});
