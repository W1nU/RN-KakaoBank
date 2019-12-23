import { combineReducers, createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-community/async-storage"

import reducers from "./Reducers"

const rootReducer = combineReducers({
    ...reducers
})

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const enhancedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    const store = createStore(enhancedReducer)
    const persistor = persistStore(store)
    return { store, persistor }
}

export default configureStore