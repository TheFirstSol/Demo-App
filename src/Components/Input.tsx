import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icons } from '../Constants/images';

const Input: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <Icons.Profile width={40} height={40} />

      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        placeholderTextColor="#888"
      />
      <View style={styles.iconContainer}>
        <Icons.Media width={22} height={22} />
        <Icons.Gif width={22} height={22} />
        <Icons.Button width={22} height={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    fontSize: 14,
    color: '#333',
  },
  iconContainer: {gap: 15, alignItems: 'center', flexDirection: 'row'},
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
});

export default Input;
