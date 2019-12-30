import {
    ADD_ACCOUNT
} from "./Actions"

import NaverAPI from "../Api/NaverAPI"

const accounts = (state = [], action) => {
    console.log(action)

    switch (action.type) {
      case ADD_ACCOUNT:
        return [
            ...state,
            {
                accountTitle: action.accountTitle,
                accountNumber: action.accountNumber,
                accountAmmount: action.accountAmmount,
                accountColor: action.accountColor
            }
        ]
      default:
        console.log(action)
        return state;
    }
};

const reducers = {
    accounts,
    NaverAPI
}

export default reducers