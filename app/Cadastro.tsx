import  THEME  from "@/app/constants/Colors";
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
import Logo from "@/app/assets/images/logo-dark-mode.png";
import Input  from "@/app/components/Input";
import { useRouter } from "expo-router";
import usuarioService from "@/app/services/usuario-service";
import Usuario from "@/app/interfaces/Usuario";

const Cadastro: React.FC = () => {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState<Date | undefined>(
    undefined
  );
  const [showDatePicker, setShowDatePicker] = useState(false);

  
  const handleChangedDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDataNascimento(selectedDate);
    }
  };
  const handleCadastro = async () => {
    if (!nome || !email || !senha || !dataNascimento) {
      console.log("VAMO VE: " + nome, email, senha, dataNascimento);
      Alert.alert("Preencha todos os campos");
      return;
    }

    try {
      const usuario: Usuario = {
        id,
        nome,
        email,
        senha,
        data_nascimento: dataNascimento.toISOString(),
        status: true,
      };
      const response = await usuarioService.criaUsuarios(usuario);
      console.log(response);
      Alert.alert("Usuário cadastrado com sucesso", response.message);
    } catch (error) {
      Alert.alert("Erro ao cadastrar usuário", (error as Error).message);
    }
  };

  const router = useRouter();

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
      <Input placeholder="Digite seu nome" placeholderTextColor="#fff" onChangeText={setNome}/>

      <Text style={styles.texts}>Data de Nascimento</Text>
      <Input
        placeholder="Digite sua data de nascimento"
        placeholderTextColor="#fff"
        onFocus={() => setShowDatePicker(true)}
        value={dataNascimento ? dataNascimento.toLocaleDateString() : ""}
      />
      {showDatePicker && (
        <DateTimePicker
          value={dataNascimento || new Date()}
          mode="date"
          display="default"
          onChange={handleChangedDate}
        />
      )}

      <Text style={styles.texts}>E-mail</Text>
      <Input placeholder="Digite seu email" placeholderTextColor="#fff" onChangeText={setEmail}/>

      <Text style={styles.texts}>Senha</Text>
      <Input
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
      ></Input>

      <View>
        <TouchableOpacity style={styles.btnEntrar} onPress={()=> handleCadastro()}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => router.push("/Login")}
        >
          <Text style={styles.btnText}>Já possuo cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;

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