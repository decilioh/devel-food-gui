import { z } from "zod";
import { passwordRegex } from "../../utils/regex";

export type LoginData = z.infer<typeof schema>

export const schema = z.object({
    email: z.string().email('Digite um email valido!'),
    password: z.string().regex(passwordRegex, 'A senha deve conter no mínimo 8 digitos, 1 caractere especial e 1 número.'),

});