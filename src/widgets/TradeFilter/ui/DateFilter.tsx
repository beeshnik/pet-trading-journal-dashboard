import { Controller, useFormContext } from "react-hook-form";
import styles from "./DateFilter.module.css"

type Props = {
    fieldName: string;
    fieldLabel?: string
};

export function DateFilter({ fieldName, fieldLabel }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            render={({ field }) => (
                <section className={styles.dateFilter}>
                    {fieldLabel && <label>{fieldLabel}</label>}
                    <input {...field} type="datetime-local" />
                </section>
            )}
            name={fieldName}
            control={control}
        />
    );
}
