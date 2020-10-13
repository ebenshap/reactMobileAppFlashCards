import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware'

import StackWrapper from "./components/StackWrapper"
import { setLocalNotification } from './utils/helper'



class App extends React.Component {

  componentDidMount() {
    setLocalNotification ();
  }
  
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <StackWrapper />
        </NavigationContainer>
      </Provider>
    );
  }
}


export default App