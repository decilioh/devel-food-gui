import { z } from "zod";
import { cnpjRegex, passwordRegex } from "../../utils/regex";
import { isValidCNPJ } from "../../utils/ValidFunctions";

export type restaurantData = z.infer<typeof schema>


export const schema = z.object({
    email: z.string().email('Insira um email válido'),
    cnpj: z.string().min(14, "Insira um CNPJ válido").regex(cnpjRegex, 'Insira um CNPJ válido').refine(isValidCNPJ, 'Insira um CNPJ válido'),
    password: z.string().regex(passwordRegex, 'A senha deve conter no mínimo 8 digitos, 1 caractere especial e 1 número')
        .min(8, 'A senha deve conter no mínimo 8 digitos, 1 caractere especial e 1 número'),
    confirmPassword: z.string().regex(passwordRegex, "As senhas precisam ser iguais").min(8, "Confirme sua senha, elas devem ser iguais!"),
});
