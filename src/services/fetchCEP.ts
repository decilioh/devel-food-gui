
import axios from 'axios';

export const fetchAddressByCep = async (cep: string) => {
    const baseUrl = import.meta.env.VITE_BASE_URL_CEP;
    try {
        const { data } = await axios.get(`${baseUrl}/${cep}/json/`);
        return data;
    } catch (error) {
        return null;
    }
};
