import { z } from "zod";

export const createTradeSchema = z
    .object({
        instrument: z
            .string("Отсутствует инструмент")
            .min(5, "Длина инструмента должна быть не меньше 5 символов!"),
        openDate: z.string("Отсутствует дата открытия"),
        closeDate: z.string("Отсутствует дата закрытия"),
        pnl: z.coerce.number<number>("Отсутствует p&l").finite(),
        algorithmId: z.string("Выберите алгоритм из списка"),
    })
    .refine((form) => new Date(form.openDate) <= new Date(form.closeDate), {
        error: "Дата открытия должна быть меньше даты закрытия",
        path: ["closeDate"],
    });

export type createTradeInputDTO = z.infer<typeof createTradeSchema>;
export type createTradeOutputDTO = z.output<typeof createTradeSchema>;
