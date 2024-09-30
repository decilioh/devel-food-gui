import { z } from "zod";
import { phoneRegex } from "../../utils/regex";

export type restaurantTypeData = z.infer<typeof schema>


export const schema = z.object({
    name: z.string().min(4, 'Insira seu nome'),
    telefone: z.string().regex(phoneRegex, 'Insira um telefone válido'),
    restaurantType: z.string().min(1, "Escolha no mínimo 1 tipo de comida"),
    photoDish: z
        .instanceof(FileList)
        .refine((files) => files.length > 0, "Insira um Arquivo para continuar")
        .refine(
            (files) => {
                const allowedTypes = ['image/png', 'image/jpeg'];
                return Array.from(files).every(file => allowedTypes.includes(file.type))
            },
            { message: "O arquivo deve ser um PNG ou JPG" }
        ),
});
