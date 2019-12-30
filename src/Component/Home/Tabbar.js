import React from "react"
import {
    View,
    Text,
    StyleSheet
} from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { fontSettings } from "../../Common/Settings"

const Tabbar = (props) => {
    return(
        <View style={styles.component}>
            <View style={styles.selectedItem}>
                <Text style={styles.selectedItemText}>MY</Text>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    selectedItem: {
        flex: 1,
        width: "100%",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    selectedItemText: {
        flex: 1,
        fontSize: RFPercentage(2.5),
        color: "white",
        ...fontSettings.bold
    }
})

export default Tabbar