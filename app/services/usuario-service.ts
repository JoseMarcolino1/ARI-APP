import axios from "axios";
import Usuario from "../interfaces/Usuario";
import AsyncStorage from "@react-native-async-storage/async-storage";



const API_URL = "http://192.168.100.6:3000";

const criaUsuarios = async (usuario: Usuario) => {
    try {
        console.log('usuario', usuario, 'API_URL', API_URL);
        const response = await axios.post(`${API_URL}/usuarios`, usuario, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log('response', response.data);
        return response.data;
    } catch (error) {
      console.error("Erro na requisição:", error);
      if (axios.isAxiosError(error)) {
        console.error("Detalhes do erro:", error.response?.data);
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
}

const loginUsuario = async (email: string, senha: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/usuarios/login`,
      { email, senha },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    if (axios.isAxiosError(error)) {
      console.error("Detalhes do erro:", error.response?.data);
    } else {
      console.error("Erro desconhecido:", error);
    }
    throw error;
  }
};

const pegaUsuario = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("Token:", token);
    const response = await axios.get(`${API_URL}/usuarios/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const usuario = response.data;
    console.log("Usuário buscado:", usuario);
    return usuario;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    if (axios.isAxiosError(error)) {
      console.error("Detalhes do erro:", error.response?.data);
    } else {
      console.error("Erro desconhecido:", error);
    }
    throw error;
  }
};


export default {
    criaUsuarios,
    loginUsuario,
    pegaUsuario,
};