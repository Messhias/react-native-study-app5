/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components';


import Client from './src/Components/Client';
import Home from './src/Components/Home';
import Contact from './src/Components/Contact';
import Company from './src/Components/Company';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Navigator
            initialRoute={{ id: 'a' }}
            renderScene={(route, navigator) => {
                if (route.id === 'a') {
                    return (<Home navigator={navigator} />);
                }

                if (route.id === 'b') {
                    return (<Client navigator={navigator} />);
                }

                if (route.id === 'c') {
                    return (<Contact navigator={navigator} />);
                }

                if (route.id === 'd') {
                    return (<Company navigator={navigator} />);
                }
            }}
        />
    );
  }
}
