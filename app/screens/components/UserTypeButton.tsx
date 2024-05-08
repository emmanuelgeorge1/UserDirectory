import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RoundCheckbox from './RoundCheckbox';
import { styles } from '../styles/UserTypeButton.Style';


type UserTypeButtonProps = {
  type: number;
  text: string;
  userType: number | null;
  setUserType: (type: number) => void;
};

const UserTypeButton: React.FC<UserTypeButtonProps> = ({ type, text, userType, setUserType }) => (
  <TouchableOpacity
    style={[
      styles.userType,
      userType === type && styles.userTypeSelected,
    ]}
    onPress={() => setUserType(type)}
  >
    <View style={styles.checkboxContainer}>
      <RoundCheckbox
        isSelected={userType === type}
        onSelection={() => setUserType(type)}
      />
    </View>
    <Text style={styles.userTypeText}>{text}</Text>
  </TouchableOpacity>
);

export default UserTypeButton;