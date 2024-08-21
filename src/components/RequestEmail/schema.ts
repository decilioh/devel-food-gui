import { z } from "zod";

export type RequestEmailData = z.infer<typeof schema>

export const schema = z.object({
    email: z.string().email('Insira um email válido').min(1, "Insira um email válido"),
});