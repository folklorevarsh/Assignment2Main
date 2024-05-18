import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

function UserProfile({ user, setToken, onSignOut }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [firstName, setFirstName] = useState(user ? user.name.firstname : '');
  const [lastName, setLastName] = useState(user ? user.name.lastname : '');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    if (!user) {
      Alert.alert("Error", "User data is missing");
      return;
    }

    const response = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: {
          firstname: firstName,
          lastname: lastName
        },
        password
      }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setFirstName(updatedUser.name.firstname);
      setLastName(updatedUser.name.lastname);
      setPassword('');
      setIsUpdating(false);
      Alert.alert("Update Successful", "Your name and password have been updated");
    } else {
      const data = await response.json();
      Alert.alert("Update Failed", data.message);
    }
  };

  const handleSignOut = () => {
    setToken(null);
    onSignOut();
  };

  return (
    <View style={styles.container}>
      {isUpdating ? (
        <>
          <Text style={styles.label}>First Name:</Text>
          <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
          <Text style={styles.label}>Last Name:</Text>
          <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
          <TouchableOpacity style={styles.submit} onPress={handleUpdate}>
            <Text style={styles.submitText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={() => setIsUpdating(false)}>
            <Text style={styles.submitText}>Cancel</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>User Profile</Text>
          {user ? (
            <>
              <Text style={styles.label}>First Name: {user.name.firstname}</Text>
              <Text style={styles.label}>Last Name: {user.name.lastname}</Text>
              <Text style={styles.label}>Email: {user.email}</Text>
            </>
          ) : (
            <Text style={styles.label}>User data is missing</Text>
          )}
          <TouchableOpacity style={styles.submit} onPress={() => setIsUpdating(true)}>
            <Text style={styles.submitText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={handleSignOut}>
            <Text style={styles.submitText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  submit: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UserProfile;