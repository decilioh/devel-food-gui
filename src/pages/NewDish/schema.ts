import { z } from "zod";
import { priceRegex } from "../../utils/regex";

export type typeNewDish = z.infer<typeof schema>


export const schema = z.object({
    nameDish: z.string().min(1, 'Insira o nome do prato'),
    typeDish: z.string().min(1, "Escolha no mínimo 1 tipo de comida"),
    descriptionDish: z.string().min(1, 'Digite a descrição do prato'),
    priceDish: z.string().min(1, 'Insira o preço')
        .regex(priceRegex, 'Preço inválido. Apenas números e até duas casas decimais são permitidos.'),
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
