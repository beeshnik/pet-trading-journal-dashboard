import { Controller, useForm } from "react-hook-form";
import {
    createTradeSchema,
    type createTradeInputDTO,
    type createTradeOutputDTO,
} from "../model/schema";
import {
    useGetAlgorithmsQuery,
    usePostTradesMutation,
} from "@shared/api/generatedApi";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./CreateTradeForm.module.css";
import { getErrorMessage } from "@shared/lib/GetErrorMessage";

export function CreateTradeForm() {
    const {
        data: algorithms,
        isLoading: isAlgoLoading,
        isError: isAlgoError,
        error: algoError,
    } = useGetAlgorithmsQuery();

    const [postTrade, { error: postError, isLoading: isPostLoading }] =
        usePostTradesMutation();

    const { control, handleSubmit } = useForm<
        createTradeInputDTO,
        createTradeOutputDTO
    >({
        defaultValues: {},
        resolver: zodResolver(createTradeSchema),
    });

    const formSubmit = (form: createTradeOutputDTO) => {
        postTrade({
            createTradeDto: form,
        });
    };

    return (
        <main className={styles.main}>
            <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
                <Controller
                    render={({ field, fieldState }) => (
                        <section className={styles.section}>
                            <label
                                className={styles.label}
                                htmlFor="instrument-input"
                            >
                                Инструмент
                            </label>
                            <input {...field} id="instrument-input" />
                            {fieldState.error && fieldState.error.message && (
                                <label className={styles.error}>
                                    {fieldState.error.message}
                                </label>
                            )}
                        </section>
                    )}
                    name="instrument"
                    control={control}
                />
                <Controller
                    render={({ field, fieldState }) => (
                        <section className={styles.section}>
                            <label
                                className={styles.label}
                                htmlFor="open-date-input"
                            >
                                Дата открытия сделки
                            </label>
                            <input
                                {...field}
                                type="datetime-local"
                                id="open-date-input"
                            />
                            {fieldState.error && fieldState.error.message && (
                                <label className={styles.error}>
                                    {fieldState.error.message}
                                </label>
                            )}
                        </section>
                    )}
                    name="openDate"
                    control={control}
                />
                <Controller
                    render={({ field, fieldState }) => (
                        <section className={styles.section}>
                            <label
                                className={styles.label}
                                htmlFor="close-date-input"
                            >
                                Дата открытия сделки
                            </label>
                            <input
                                {...field}
                                type="datetime-local"
                                id="close-date-input"
                            />
                            {fieldState.error && fieldState.error.message && (
                                <label className={styles.error}>
                                    {fieldState.error.message}
                                </label>
                            )}
                        </section>
                    )}
                    name="closeDate"
                    control={control}
                />
                <Controller
                    render={({ field, fieldState }) => (
                        <section className={styles.section}>
                            <label className={styles.label} htmlFor="pnl-input">
                                P&L
                            </label>
                            <input {...field} type="number" id="pnl-input" />
                            {fieldState.error && fieldState.error.message && (
                                <label className={styles.error}>
                                    {fieldState.error.message}
                                </label>
                            )}
                        </section>
                    )}
                    name="pnl"
                    control={control}
                />
                <Controller
                    render={({ field, fieldState }) => (
                        <section className={styles.section}>
                            <label
                                className={styles.label}
                                htmlFor="algo-select"
                            >
                                Алгоритм
                            </label>
                            <select
                                {...field}
                                id="algo-select"
                                disabled={
                                    isAlgoLoading ||
                                    isAlgoError ||
                                    (algorithms && algorithms.length < 1)
                                }
                            >
                                {algorithms?.map((algo) => (
                                    <option
                                        key={`algo-select-item-${algo.id}`}
                                        value={algo.id}
                                    >
                                        {algo.name}
                                    </option>
                                ))}
                            </select>
                            {fieldState.error && fieldState.error.message && (
                                <label className={styles.error}>
                                    {fieldState.error.message}
                                </label>
                            )}
                            {algoError && (
                                <label className={styles.error}>
                                    {getErrorMessage(algoError)}
                                </label>
                            )}
                        </section>
                    )}
                    name="algorithmId"
                    control={control}
                />
                <button type="submit" disabled={isPostLoading}>
                    {isPostLoading ? "Добавление сделки..." : "Добавить сделку"}
                </button>
                {postError && (
                    <label className={styles.error}>
                        {getErrorMessage(postError)}
                    </label>
                )}
            </form>
        </main>
    );
}
