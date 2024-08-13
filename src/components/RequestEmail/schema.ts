import { z } from "zod";

export type RequestEmailData = z.infer<typeof schema>

export const schema = z.object({
    email: z.string().email('Digite um email valido!').min(1, "o campo email é obrigatório!"),
});