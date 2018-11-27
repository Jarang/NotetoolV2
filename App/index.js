import React, {Component} from 'react';
import {View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const initialState = {
  loggedIn: false,
  checkedAsyncForExist: false
}

const reducer = (state = initialState) => {

}

const store = createStore(reducer)

export default class App extends Component {

    constructor(props) {
      super(props);

  }


    /**
     * Checks if app has every been used.
     */
    componentWillMount() {
        // TODO: implement
    }


    render() {
      return (
        <Provider store={store}>
          <View>
            <Text> No style</Text>
          </View>
        </Provider>
      );
    }
  }