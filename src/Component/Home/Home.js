import React from "react"
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native"

import Tabbar from "./Tabbar"
import Hello from "./Hello"
import AccountList from "./AccountList"

const WINDOW = Dimensions.get("window")

const Home = (props) => {
    return(
        <SafeAreaView style={styles.page}>
            <View style={styles.tabbar}>
                <Tabbar />
            </View>
            <ScrollView style={styles.contents}>
                <View style={styles.hello}>
                    <Hello />
                </View>
                <View style={styles.accountList}>
                    <AccountList />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgb(39,43,70)",
    },
    tabbar: {
        height: WINDOW.width * 0.1 
    },
    hello: {
        height: WINDOW.height * 0.2
    },
    accountList: {
        flex: 1,
    },
    contents: {
        flex: 1
    }
})

export default Home;