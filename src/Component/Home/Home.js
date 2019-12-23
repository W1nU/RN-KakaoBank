import React from "react"
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet
} from "react-native"
import { fontSettings } from "../../Common/Settings"

const Home = (props) => {
    return(
        <SafeAreaView style={styles.page}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "rgb(39,43,70)",
        flex: 1
    }
})

export default Home;