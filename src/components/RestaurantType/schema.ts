import { z } from "zod";
import { phoneRegex } from "../../utils/regex";

export type restaurantTypeData = z.infer<typeof schema>


export const schema = z.object({
    name: z.string().min(4, 'Digite seu nome!'),
    telefone: z.string().regex(phoneRegex, 'Insira um telefone válido'),
    restaurantType: z.string().min(4, "Escolha 1 tipo de comida")
});
