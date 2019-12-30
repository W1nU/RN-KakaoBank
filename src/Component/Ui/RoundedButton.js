import React from "react"
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { fontSettings } from "../../Common/Settings"

const RoundedButton = (props) => {

    const _onPressButton = () => {
        props.onPress()
    }

    return(
        <TouchableOpacity style={styles.component} onPress={_onPressButton}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    component: {
        height: RFPercentage(9),
        width: "100%",
        borderRadius: RFPercentage(4),
        backgroundColor: "#FF9016",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize: RFPercentage(2),
        color: "white",
        ...fontSettings.bold
    }
})

export default RoundedButton