import {
    ADD_ACCOUNT
} from "./Actions"

const accounts = (state = [], action) => {
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
        return state;
    }
};

const reducers = {
    accounts
}

export default reducers