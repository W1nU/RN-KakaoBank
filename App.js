import React, { useEffect } from "react"
import { Scene, Router, Stack, Actions, Lightbox, Modal } from "react-native-router-flux";
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import configureStore from "./src/Redux/Store"

import Home from "./src/Component/Home/Home"
import AddAccount from "./src/Component/AddAccount/AddAccount"

const { store, persistor } = configureStore()

const App = () => {
  
  useEffect(() => {
    console.log(store.getState())
  })

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Lightbox>
            <Stack key="root">
              <Scene key="Home" component={Home} hideNavBar/>
              <Scene key="AddAccount" title="계좌 추가하기" component={AddAccount} />
            </Stack>
          </Lightbox>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App