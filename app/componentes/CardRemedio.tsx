import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {THEME} from "../../constants/Colors";
import Logo from "../../assets/images/logo-dark-mode.png";

interface CardRemedioProps {
    nome: string;
    data: string;
    hora: string;
}

const CardRemedio: React.FC<CardRemedioProps> = ({nome, data, hora}) => {
    return(
        <View style={styles.ContainerInfo}>
            <Image source={Logo} style={styles.ImageArredondada}></Image>
            <Text style={styles.text}>
                {nome}{'\n'}
                <Text style={styles.subtext}>
                    Data: {data}{'\n'}
                    Hora: {hora}
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerInfo: {
        flexDirection: 'row',
        padding: 20,
        margin: 10,
        backgroundColor: THEME.colors.primary,
        borderRadius: 10,
        
      },
      ImageArredondada: {
        borderRadius: 50,
        height: 50,
        width: 50,
      },
      text: {
        color: THEME.colors.white,
        fontSize: 16,
        marginLeft: 10,
      },
      subtext: {
        color: THEME.colors.white,
        fontSize: 12,
        marginLeft: 10,
      },
})

export default CardRemedio;