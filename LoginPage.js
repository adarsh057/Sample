import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './mobileconfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const recaptchaVerifier = React.useRef(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      navigation.navigate('OtpPage', { verificationId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder='Enter Phone Number'
        onChangeText={setPhoneNumber}
        keyboardType='phone-pad'
        autoCompleteType='tel'
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

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
  sendVerification: {
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
