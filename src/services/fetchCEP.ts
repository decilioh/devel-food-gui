
import axios from 'axios';

export const fetchAddressByCep = async (cep: string) => {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return data;
    } catch (error) {
        return null;
    }
};
