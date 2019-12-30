import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { RFPercentage } from "react-native-responsive-fontsize"
import RoundedButton from "../Ui/RoundedButton"
import { addAccount } from "../../Redux/Actions"
import { Actions } from 'react-native-router-flux';

const COLORS = ["rgb(129,204,212)", "rgb(255,219,8)", "rgb(92,88,178)", "#FF9016"]

const AddAccount = props => {
  const [accountTitle, setAccountTitle] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountAmmount, setAccountAmmount] = useState('');

  const accountTitleRef = useRef(null)
  const accountNumberRef = useRef(null)
  const accountAmmountRef = useRef(null)

  const dispatch = useDispatch()

  const _onPressSubmit = () => {
    const accountColor = COLORS[Math.floor(Math.random() * 4)] 
    dispatch(addAccount(accountTitle, accountNumber, accountAmmount, accountColor))
    Actions.Home()
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.textInputView}>
        <Text>계좌 이름</Text>
        <TextInput 
          ref={accountTitleRef} 
          style={styles.textInput}
          onChangeText={text => {
            setAccountTitle(text)
            if(text.length >= 6){
              accountNumberRef.current.focus()
            }
          }} />
      </View>
      <View style={styles.textInputView}>
        <Text>계좌 번호</Text>
        <TextInput 
          ref={accountNumberRef} 
          style={styles.textInput}
          onChangeText={text => {
            setAccountNumber(text)
          }} />
      </View>
      <View style={styles.textInputView}>
        <Text>계좌 잔액</Text>
        <TextInput 
          ref={accountAmmountRef} 
          style={styles.textInput} 
          onChangeText={text => {
            setAccountAmmount(text)
          }}
          />
      </View> 
      <RoundedButton text="계좌 추가하기" onPress={_onPressSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white"
  },
  textInputView: {
    height: RFPercentage(8),
    justifyContent: "center",
    marginVertical: 10
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    fontSize: RFPercentage(3)
  },

});

export default AddAccount;
