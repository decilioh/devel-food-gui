import { z } from "zod";

export type typeNewDish = z.infer<typeof schema>


export const schema = z.object({
    nameDish: z.string().min(1, 'Insira o nome do prato'),
    typeDish: z.string().min(1, "Escolha no mínimo 1 tipo de comida"),
    descriptionDish: z.string().min(1, 'Digite a descrição do prato'),
    priceDish: z.string().min(1, "Insira o preço.")
        .refine(
            (value) => {
                const numericValue = parseFloat(value.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
                return numericValue <= 1000;
            },
            { message: "O preço deve ser no máximo R$ 1.000,00." }),
    photoDish: z
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
