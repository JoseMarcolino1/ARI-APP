import { THEME } from "@/constants/Colors";
import { VStack } from "native-base";
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
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation: any = useNavigation();
  return (
    <VStack style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: 20,
        }}
      />
      <Text style={styles.texts}>E-mail</Text>
      <Input placeholder="Digite seu email" placeholderTextColor="#fff"></Input>

      <Text style={styles.texts}>Senha</Text>
      <Input
        placeholder="Digite sua senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
      ></Input>

      <View>
        <TouchableOpacity style={styles.btnEntrar}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.btnText}>Quero me cadastrar</Text>
        </TouchableOpacity>
      </View>
    </VStack>
  );
}

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
