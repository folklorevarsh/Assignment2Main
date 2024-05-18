import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignUp) {
      // Sign up user
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sign Up Successful", "You can now log in with your new account");
        setIsSignUp(false);
      } else {
        Alert.alert("Sign Up Failed", data.message);
      }
    } else {
      // Log in user
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
      } else {
        Alert.alert("Login Failed", "Incorrect login information, please try again");
      }
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Sign up a new user' : 'Login'}</Text>
      {isSignUp && (
        <>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </>
      )}
      <Text style={styles.label}>{isSignUp ? 'Email:' : 'Username:'}</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
        <Text style={styles.submitText}>{isSignUp ? 'Sign Up' : 'Submit'}</Text>
      </TouchableOpacity>
      {isSignUp && (
        <TouchableOpacity style={styles.submit} onPress={handleClear}>
          <Text style={styles.submitText}>Clear</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.switch}>{isSignUp ? 'Switch to: sign in' : 'Switch to: sign up'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderWidth: 1,
      borderColor: 'pink',
      borderRadius: 5,
      backgroundColor: '#ffeef5',
    },
    box: {
      width: 300,
      alignSelf: 'center',
      padding: 20,
      borderWidth: 1,
      borderColor: 'pink',
      borderRadius: 5,
      backgroundColor: '#935585',
    },
    mainTitle: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
      },
    title: {
      color: 'black',
      textAlign: 'center',
    },
    label: {
      marginBottom: 10,
      color: 'black',
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ddcf0a',
      borderRadius: 5,
    },
    submit: {
      width: '100%',
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#935585',
    },
    submitText: {
      color: 'white',
      textAlign: 'center',
    },
  });
  export default Login;
