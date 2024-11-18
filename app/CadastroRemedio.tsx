import {
    View, Text, StyleSheet, Button, Alert,
} from "react-native";
import THEME from "./constants/Colors";
import { useState } from "react";
import remedioService from "./services/remedio-service";
import Input from "./components/Input";
import Remedio from "./interfaces/Remedio";

const CadastroRemedio: React.FC = () => {
    const [nome, setNome] = useState<string>("");
    const [funcao, setFuncao] = useState<string>("");
    const [dosagem, setDosagem] = useState<number>(0);

    const handleCadastro = async () => {
        if (!nome || !funcao || !dosagem) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        const novoRemedio: Remedio = { nome, funcao, dosagem };

        try {
            const response = await remedioService.criaRemedios(novoRemedio);
            console.log(response);
            Alert.alert("Sucesso", "Remédio cadastrado com sucesso!");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível cadastrar o remédio.");
            console.error("Erro ao cadastrar remédio:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar Remédio</Text>
            <Input
                placeholder="Nome do remédio"
                onChangeText={setNome}
            />
            <Input
                placeholder="Função"
                onChangeText={setFuncao}
            />
            <Input
                placeholder="Dosagem"
                onChangeText={setDosagem}
            />
            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

export default CadastroRemedio;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    container: {
        flex: 1,
        backgroundColor: THEME.colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
});
