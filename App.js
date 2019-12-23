import React from "react-native"
import { Router, Stack, Scene } from "react-native-router-flux"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import configureStore from "./src/Redux/Store"

const { store, persistor } = configureStore()

let App = () => {

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Stack key="root">
          
          </Stack>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App