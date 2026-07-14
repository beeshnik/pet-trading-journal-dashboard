import { Select } from "@shared/ui/Select";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    instrumentList: string[];
};

export function InstrumentSelect({ instrumentList }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={"instrument"}
            render={({ field }) => (
                <Select {...field}>
                    <option value={undefined}>{"--не выбрано--"}</option>
                    {instrumentList.map((instrument, index) => (
                        <option
                            key={`instrument-list-option-${instrument}-${index}`}
                            value={instrument}
                        >
                            {instrument}
                        </option>
                    ))}
                </Select>
            )}
        />
    );
}
