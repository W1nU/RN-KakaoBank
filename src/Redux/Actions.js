const ADD_ACCOUNT = "ADD_ACCOUNT";

export const addAccount = (accountTitle, accountNumber, accountAmmount, accountColor) => {
    return {
        type: ADD_ACCOUNT,
        accountTitle: accountTitle,
        accountNumber: accountNumber,
        accountAmmount: accountAmmount,
        accountColor: accountColor
    }
}