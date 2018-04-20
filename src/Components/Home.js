import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import NavBar from './NavBar';

const logo = require('../img/logo.png');
const clientMenu = require('../img/menu_cliente.png');
const contactMenu = require('../img/menu_contato.png');
const companyMenu = require('../img/menu_empresa.png');
const serviceMenu = require('../img/menu_servico.png');

export default class Home extends Component {

    render() {
        const { navigator } = this.props;

        return (
              <View>
                  <StatusBar
                      backgroundColor='#CCC'
                  />
                  <NavBar />

                  <View style={styles.logo}>
                    <Image source={logo} />
                  </View>

                  <View style={styles.menu}>
                    <View style={styles.menuGroup}>
                        <TouchableHighlight
                            onPress={() => {
                                navigator.push({ id: 'b' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={clientMenu} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => {
                                navigator.push({ id: 'c' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={contactMenu} />
                        </TouchableHighlight>

                    </View>
                    <View style={styles.menuGroup}>
                        <TouchableHighlight
                            onPress={() => {
                                navigator.push({ id: 'd' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={companyMenu} />
                        </TouchableHighlight>
                        <Image style={styles.imgMenu} source={serviceMenu} />
                    </View>
                  </View>

              </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
      marginTop: 30,
      alignItems: 'center',
    },
    menu: {
        alignItems: 'center'
    },
    menuGroup: {
        flexDirection: 'row',
    },
    imgMenu: {
        margin: 10
    }
});
