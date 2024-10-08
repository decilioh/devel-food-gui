import { z } from "zod";
import { cnpjRegex, phoneRegex } from "../../../../utils/regex";
import { isValidCNPJ } from "../../../../utils/ValidFunctions";

export type DataUserSchema = z.infer<typeof schema>


export const schema = z.object({
    email: z.string().email('Insira um email válido').optional(),
    cnpj: z.string().min(14, "Insira um CNPJ válido").regex(cnpjRegex, 'Insira um CNPJ válido').refine(isValidCNPJ, 'Insira um CNPJ válido').optional(),
    restaurantName: z.string().min(4, 'Insira o nome do restaurante'),
    telefone: z.string().regex(phoneRegex, 'Insira um telefone válido'),
    restaurantType: z.string().min(1, "Escolha no mínimo 1 tipo de comida"),
    photoUser: z
        .instanceof(FileList)
        .optional()
        .refine(
            (files) => {

                if (files && files.length > 0) {
                    const allowedTypes = ['image/png', 'image/jpeg'];
                    return Array.from(files).every(file => allowedTypes.includes(file.type));
                }
                return true;
            },
            { message: "O arquivo deve ser um PNG ou JPG" }
        )
});
