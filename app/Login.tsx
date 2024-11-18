import THEME from "@/app/constants/Colors";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import Logo from "@/app/assets/images/logo-dark-mode.png"; 
import { useRouter } from "expo-router";
import React, { useState } from "react";
import usuarioService from "./services/usuario-service";
import AsyncStorage from '@react-native-async-storage/async-storage';

const  Login: React.FC = () => {
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');  

  const router = useRouter();

  const handleLogin = async () => {
    if(!email || !senha){
      console.log("VAMO VE: " + email, senha);
      Alert.alert("Preencha todos os campos");
      return;
    }
    try {
      const response = await usuarioService.loginUsuario(email, senha);
      console.log("Dados do usuário:", response);

      if (response && response.token) {
        const token = await AsyncStorage.setItem("token", response.token);
        console.log("Token salvo no AsyncStorage", token);
        Alert.alert("Login realizado com sucesso!");
        router.push("/Home");
      } else {
        Alert.alert("Erro ao fazer login", "Credenciais inválidas");
      }
    } catch (error) {
      Alert.alert("Erro ao fazer login", "Verifique suas credenciais e tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain", 
          marginBottom: 20,
        }}
      />
      <Text style={styles.texts}>E-mail</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Digite seu email"
        placeholderTextColor="#fff"
        onChangeText={setEmail}
      />

      <Text style={styles.texts}>Senha</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Digite sua senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        onChangeText={setSenha}
      />

      <View>
        <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
          <Text style={styles.btnText} >Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => router.push("/Cadastro")}
        >
          <Text style={styles.btnText}>Quero me cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.primary,
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
    color: THEME.colors.text,
    marginTop: 10,
  },
  btnEntrar: {
    width: 350,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: THEME.colors.secondary,
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
