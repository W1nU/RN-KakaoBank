import React from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import { useSelector } from "react-redux"

import AcocuntListItem from "./AccountListItem"
import AccountListItem from "./AccountListItem"

const AccountList = (props) => {
    let AccountListArray = useSelector(state => state.accounts)

    const _generateAccountBlocks = () => {
        let blocksElement = []

        AccountListArray.map(element => {
            blocksElement.push(<AccountListItem {...element} />)
        })

        return blocksElement
    }

    return(
        <View style={styles.component}>
            {_generateAccountBlocks()}
            {/* <AcocuntListItem accountTitle="정승우의 통장" accountNumber="3333-01-6253606" accountAmmount={0} accountColor="rgb(255,219,8)"/> */}
            <AcocuntListItem addAccount accountColor="rgb(67,82,124)"/>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
    }
})

export default AccountList