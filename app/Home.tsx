import THEME from "@/app/constants/Colors";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import Logo from "@/app/assets/images/logo-dark-mode.png";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import CardRemedio from "@/app/components/CardRemedio";
import usuarioService from "./services/usuario-service";

export default function Home() {
  const [usuario, setUsuario] = useState<{ nome: string } | null>(null);

  // Função para buscar o usuário
  const buscarUsuario = async () => {
    try {
      const dadosUsuario = await usuarioService.pegaUsuario();
      setUsuario(dadosUsuario);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  // useEffect para buscar o usuário ao carregar a tela
  useEffect(() => {
    buscarUsuario();
    console.log("Usuário:", usuario);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Text style={styles.TextColors}>
          {usuario ? `Olá, ${usuario.nome}` : "Carregando..."}
        </Text>
        <Image source={Logo} style={styles.ImageArredondada} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CardRemedio nome="Remédio Hoje" data="00/00/0000" hora="00:00" />
        <Text style={{ padding: 15, fontSize: 20 }}>Histórico</Text>
        <CardRemedio nome="Remédio 1" data="00/00/0000" hora="00:00" />
        <CardRemedio nome="Remédio 2" data="00/00/0000" hora="00:00" />
        <CardRemedio nome="Remédio 3" data="00/00/0000" hora="00:00" />
        <CardRemedio nome="Remédio 4" data="12/06/2024" hora="00:00" />
      </ScrollView>

      <TouchableOpacity
        style={styles.btnCadastrar}
        onPress={() => router.push("/CadastroRemedio")}
      >
        <Text style={styles.btnText}>Cadastrar Remédio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  LogoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 20,
  },
  TextColors: {
    color: THEME.colors.secondary,
    fontSize: 20,
  },
  ImageArredondada: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  btnCadastrar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 10,
    backgroundColor: THEME.colors.secondary,
    padding: 15,
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
