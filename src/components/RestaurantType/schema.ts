import { z } from "zod";
import { phoneRegex } from "../../utils/regex";

export type restaurantTypeData = z.infer<typeof schema>


export const schema = z.object({
    name: z.string().min(4, 'Insira seu nome'),
    telefone: z.string().regex(phoneRegex, 'Insira um telefone válido'),
    restaurantType: z.array(z.string()).min(1, "Escolha no mínimo 1 tipo de comida")
});
