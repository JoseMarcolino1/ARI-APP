import { COLORS } from "@/constants/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import Logo from "../../assets/images/logo-dark-mode.png";
import { Input } from "../componentes/Input";
import { useNavigation } from "expo-router";

export default function Cadastro() {
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleChangedDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDataNascimento(selectedDate);
    }
  };
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: 20,
        }}
      />
      <Text style={styles.texts}>Nome Completo</Text>
      <Input placeholder="Digite seu nome" placeholderTextColor="#fff" />

      <Text style={styles.texts}>
        Data de Nascimento
      </Text>
      <Input
        placeholder="Digite sua data de nascimento"
        placeholderTextColor="#fff"
        onFocus={() => setShowDatePicker(true)}
        value={dataNascimento.toLocaleDateString()}
      />
      {showDatePicker && (
        <DateTimePicker
          value={dataNascimento}
          mode="date"
          display="default"
          onChange={handleChangedDate}
          
        />
      )}

      <Text style={styles.texts}>E-mail</Text>
      <Input
        placeholder="Digite seu email"
        placeholderTextColor="#fff"
      />

      <Text style={styles.texts}>Senha</Text>
      <Input
        placeholder="Digite sua senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
      ></Input>

      <View>
        <TouchableOpacity style={styles.btnEntrar}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnText}>Já possuo cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 40,
    width: 350,
    borderColor: "#fff",
    borderBottomWidth: 1,
    color: "#fff",
    marginBottom: 20,
  },
  texts: {
    width: 350,
    fontSize: 12,
    color: COLORS.colors.text,
    marginTop: 10,
  },
  btnEntrar: {
    width: 350,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: COLORS.colors.secondary,
    padding: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
  btnCadastro: {
    width: 350,
    marginTop: 20,
    fontSize: 10,
    alignItems: "center",
  },
});
