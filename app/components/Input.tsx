import { ReactNode } from "react";
import { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";

interface InputProps extends TextInputProps {
    children: ReactNode
}

function Input({  ...rest }) {
    return (
        <TextInput
        style={styles.inputs}
        placeholder="Digite seu email"
        placeholderTextColor="#fff"
        {...rest}
      >
      </TextInput>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputs: {
      paddingTop: 10,
      paddingBottom: 10,
      height: 40,
      width: 350,
      borderColor: "#fff",
      borderBottomWidth: 1,
      color: "#fff",
      marginBottom: 20,
    }
  });
  