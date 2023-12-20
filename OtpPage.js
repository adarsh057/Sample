import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { firebaseConfig } from './mobileconfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const OtpPage = ({ route }) => {
  const { verificationId } = route.params;
  const [code, setCode] = useState('');

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await firebase.auth().signInWithCredential(credential);
      Alert.alert('Login Successful. Welcome To Dashboard');
    } catch (error) {
      console.error(error);
      Alert.alert('Verification failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verify Code</Text>
      <TextInput
        placeholder='Enter Verification Code which is avaiable to you.'
        onChangeText={setCode}
        keyboardType='number-pad'
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.verifyCode} onPress={confirmCode}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  },
  textInput: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  verifyCode: {
    padding: 20,
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
