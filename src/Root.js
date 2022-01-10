import React, { Component } from "react";
import { View } from "react-native";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./store/configureStore";
import JailMonkey from "jail-monkey";
import App from "./App";
import Loading from "./components/Loading";

import _ from "lodash";
import { NavigationContainer } from "@react-navigation/native";

const { store, persistor } = configureStore();

export default class Root extends Component {
  state = {
    isSafe: null,
    hasError: null,
  };

  componentWillMount() {
    try {
      const { trustFall } = JailMonkey;

      this.setState({
        isSafe: trustFall(),
        hasError: false,
      });
    } catch (e) {
      this.setState({ hasError: true });
    }
  }

  requestingSafety = () => {
    const { isSafe } = this.state;

    return _.isNull(isSafe);
  };

  isSafeDevice = () => {
    const { isSafe } = this.state;

    return isSafe;
  };

  render() {
    const { hasError } = this.state;
    console.disableYellowBox = true;
    if (this.requestingSafety()) {
      return (
        <View style={{ flex: 1 }}>
          <Loading />
        </View>
      );
      //    anti jailbreak y root
      // } else if (this.isSafeDevice()) {
    } else if (true) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <App />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      );
    }
  }
}
