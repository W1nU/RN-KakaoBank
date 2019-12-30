import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { fontSettings } from '../../Common/Settings';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

const AccountListItem = props => {
  const _generateBlock = () => {
    if (!props.addAccount) {
      return (
        <View key={props.accountTitle}>
          <View style={styles.accountTitle}>
            <Text style={styles.accountTitleText}>{props.accountTitle}</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.accountNumberText}>{props.accountNumber}</Text>
            <Text style={styles.accountAmmountText}>
              {props.accountAmmount}원
            </Text>
            <TouchableOpacity style={styles.verticalDot}>
                <MaterialCommunityIcons name="dots-vertical" size={30} color="rgba(0,0,0,0.2)"/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.transfer}>
            <Text style={styles.transferText}>이체</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.addCard}>
          <AntDesign name="plussquareo" size={60} color="rgba(0,0,0,0.43)"/> 
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={[styles.component, {backgroundColor: props.accountColor}]}>
      {_generateBlock()}
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    height: RFPercentage(30),
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 4
  },
  accountTitle: {
    justifyContent: 'center',
    paddingLeft: RFPercentage(3),
    height: RFPercentage(7),
  },
  accountTitleText: {
    fontSize: RFPercentage(2.3),
    ...fontSettings.regular,
  },
  accountInfo: {
    height: RFPercentage(16.5),
    alignItems: 'center',
    paddingTop: RFPercentage(2),
    borderBottomWidth: 0.2,
  },
  accountNumberText: {
    fontSize: RFPercentage(2),
    color: 'rgb(127,117,20)',
    ...fontSettings.regular,
  },
  accountAmmountText: {
    fontSize: RFPercentage(3.2),
    marginTop: RFPercentage(1),
    ...fontSettings.bold,
  },
  transfer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: RFPercentage(6.5)
  },
  transferText: {
      fontSize: RFPercentage(2.1),
      ...fontSettings.regular
  },
  verticalDot: {
      position: "absolute",
      right: 10,
      bottom :10
  },
  addCard: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

export default AccountListItem;
