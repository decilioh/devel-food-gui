import { z } from "zod";
import { passwordRegex } from "../../utils/regex";

export type passwordData = z.infer<typeof schema>


export const schema = z.object({
    code: z.string().min(1, "Insira o código de validação!"),
    password: z.string().regex(passwordRegex, 'A senha deve conter no mínimo 8 digitos, 1 caractere especial e 1 número.'),
    confirmPassword: z.string().regex(passwordRegex, "Confirme sua senha, elas devem ser iguais!"),
});