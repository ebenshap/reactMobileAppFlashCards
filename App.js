import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';

import StackWrapper from "./components/StackWrapper"

class App extends React.Component {
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <StackWrapper />
        </NavigationContainer>
      </Provider>
    );
  }
}


export default App