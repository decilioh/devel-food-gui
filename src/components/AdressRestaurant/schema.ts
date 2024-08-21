import { z } from "zod";
import { cepRegex, numberRegex } from "../../utils/regex";


export type RestaurantAdressData = z.infer<typeof schema>


export const schema = z.object({
    nameAdress: z.string().min(1, 'Insira um nome para o endereço!'),
    numberRestaurant: z.string().min(1, "Insira o número correspondente").regex(numberRegex, 'Insira um número correspondente'),
    cep: z.string().min(1, "Insira o cep para continuar").regex(cepRegex, 'Insira um cep para continuar'),
    road: z.string().min(1, "Insira o nome da rua"),
    city: z.string().min(1, "Insira o nome da cidade"),
    neighborhood: z.string().min(1, "Insira o nome do bairro"),
    state: z.string().min(1, "Insira o nome do estado"),
});
