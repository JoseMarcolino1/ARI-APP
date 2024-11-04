import { THEME } from "@/constants/Colors";
import { Card, Column, VStack } from "native-base";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import Logo from "../../assets/images/logo-dark-mode.png";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CardRemedio  from "../componentes/CardRemedio";


export default function Home() {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.LogoContainer}>
            <Text style={styles.TextColors}>Olá User</Text>
            <Image source={Logo} style={styles.ImageArredondada}>
            </Image>
        </View>
        <CardRemedio nome="Remedio Hoje" data="00/00/0000" hora="00:00"/>
        <Text style={{padding: 15, fontSize:20}}>
            Historico
        </Text>
        <CardRemedio nome="Remedio 1" data="00/00/0000" hora="00:00"/>
        <CardRemedio nome="Remedio 2" data="00/00/0000" hora="00:00"/>
        <CardRemedio nome="Remedio 3" data="00/00/0000" hora="00:00"/>
        <CardRemedio nome="Remedio 4" data="12/06/2024" hora="00:00"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
    alignItems: "stretch",
    justifyContent: 'flex-start',
  },
  LogoContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }
});
