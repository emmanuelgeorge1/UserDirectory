import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../styles/RoundCheckbox.Style";


interface RoundCheckboxProps {
    isSelected: boolean;
    onSelection: () => void;
  }

const RoundCheckbox: React.FC<RoundCheckboxProps> = ({
    isSelected,
    onSelection,
  }) => {
    return (
      <TouchableOpacity onPress={onSelection} style={styles.checkbox}>
        {isSelected && <View style={styles.checkboxInner} />}
      </TouchableOpacity>
    );
  };

export default RoundCheckbox;