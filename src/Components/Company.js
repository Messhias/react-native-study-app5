import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';


import NavBar from './NavBar';

const companyImage = require('../img/detalhe_empresa.png');

export default class Company extends Component {

    render() {
        const { navigator } = this.props;
        return (
              <View>
                  <StatusBar
                      backgroundColor='#EC7148'
                  />
                  <NavBar
                      back
                      backColor='#EC7148'
                      navigator={navigator}
                  />

                  <View style={styles.header}>
                      <Image source={companyImage} />
                      <Text style={styles.title}>A empresa</Text>
                  </View>

                  <View style={styles.contactDetail}>
                      <Text style={styles.details}>
                          Lorem Ipsum Innun DollorLorem Ipsum Innun DollorLorem
                          Ipsum Innun DollorLorem Ipsum Innun
                          DollorLorem Ipsum Innun Dollor
                          Lorem Ipsum Innun DollorLorem Ipsum Innun
                          DollorLorem Ipsum Innun DollorLorem Ipsum Innun Dollor
                          Lorem Ipsum Innun DollorLorem Ipsum Innun DollorLorem Ipsum Innun Dollor
                          Lorem Ipsum Innun DollorLorem Ipsum Innun
                          DollorLorem Ipsum Innun DollorLorem Ipsum Innun
                          DollorLorem Ipsum Innun DollorLorem Ipsum
                          Innun DollorLorem Ipsum Innun DollorLorem Ipsum Innun Dollor
                      </Text>
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
        color: '#EC7148',
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
