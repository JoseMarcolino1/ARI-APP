import axios from "axios";
import Usuario from "../interfaces/usuario";



const API_URL = "https://localhost:3000";

export const getUsuarios = async (): Promise<Usuario[]> => {
  try {
    const response = await axios.get<Usuario[]>(`${API_URL}/usuarios`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};