import { z } from "zod";
import { promoRegex } from "../../utils/regex";

export const schema = z
    .object({
        photoPromo: z
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
            ),
        promotionName: z.string().min(1, { message: "Insira o nome da promoção" }),
        percentage: z
            .string()
            .regex(promoRegex, { message: "A porcentagem deve ser um número inteiro entre 1 e 100" }),
        startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Insira a Data inicial da promoção",
        }),
        endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Insira a data final da promoção ",
        }),
    })
    .superRefine(({ startDate, endDate }, ctx) => {
        if (new Date(endDate) <= new Date(startDate)) {
            ctx.addIssue({
                code: "custom",
                message: "A data de término deve ser posterior à data de início",
                path: ["endDate"],
            });
        }
    });

export type PromotionFormInputs = z.infer<typeof schema>;
