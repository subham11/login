import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/Index';
import ReduxThunk from 'redux-thunk';
//import { Header } from './components/common/Index';
//import LoginForm from './components/LoginForm';
import Router from './Router';

export default class App extends React.Component {
  render() {
    return (
      //const store = ;
      <Provider store = {createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunk))}>
          <Router />
      </Provider>
    );
  }
}
