import { z } from "zod";

export const createTradeSchema = z.object({
    instrument: z
        .string("Отсутствует инструмент")
        .min(5, "Длина инструмента должна быть не меньше 5 символов!"),
    openDate: z.string("Отсутствует дата открытия"),
    closeDate: z.string("Отсутствует дата закрытия"),
    pnl: z.coerce.number<number>("Отсутствует p&l"),
    algorithmId: z.string("Выберите алгоритм из списка"),
});

export type createTradeInputDTO = z.infer<typeof createTradeSchema>;
export type createTradeOutputDTO = z.output<typeof createTradeSchema>;
