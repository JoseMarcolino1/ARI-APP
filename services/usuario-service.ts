import axios from "axios";
import Usuario from "../interfaces/Usuario";



const API_URL = "http://192.168.1.2:3000";

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

export default {
    criaUsuarios,
};