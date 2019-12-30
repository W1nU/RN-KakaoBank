import React, { useEffect } from "react"
import { 
    View, 
    Text,
    Image,
    StyleSheet, 
    Alert
} from "react-native"
import { useSelector, useDispatch } from "react-redux"

import AntDesign from "react-native-vector-icons/AntDesign"
import { RFPercentage } from "react-native-responsive-fontsize"
import { fontSettings } from "../../Common/Settings"

const Hello = (props) => {

    return(
        <View style={styles.component}>
            <Text style={styles.helloText}>
                정승우님,{"\n"}
                안녕하세요.
            </Text>
            <Image source={require("../../../assets/Image/kakaoIcon.png")} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: RFPercentage(3.9),
        paddingTop: RFPercentage(3.6)
    },
    helloText: {
        fontSize: RFPercentage(3),
        color: "rgb(254,254,254)",
        ...fontSettings.regular
    },
    icon: {
        position: "absolute",
        right: 0,
        bottom: RFPercentage(6.3),
        height: RFPercentage(7.3),
        width: RFPercentage(7.3),
        borderRadius: RFPercentage(4),
    }
})

export default Hello;
