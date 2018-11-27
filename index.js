/** @format */

import { AppRegistry } from 'react-native';
import App from './App/index';
import {name as appName} from './app.json';

global.self = global;

AppRegistry.registerComponent(appName, () => App);
