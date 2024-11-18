import axios from "axios";
import Remedio from "@/app/interfaces/Remedio";
import AsyncStorage from "@react-native-async-storage/async-storage";


const API_URL = "http://192.168.100.6:3000";


const criaRemedios = async (remedio: Remedio) => {
    try {
        console.log('remedio', remedio, 'API_URL', API_URL);
        const token = await AsyncStorage.getItem("token");
        const response = await axios.post(`${API_URL}/remedios`, remedio, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
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
    criaRemedios,
}