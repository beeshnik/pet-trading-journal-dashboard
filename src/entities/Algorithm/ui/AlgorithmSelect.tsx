import type { Algorithm } from "@shared/api/generatedApi";
import { Select } from "@shared/ui/Select";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    algorithmList: Algorithm[];
};

export function AlgorithmSelect({ algorithmList }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={"algorithmId"}
            render={({ field }) => (
                <Select {...field}>
                    <option value={undefined}>
                        {"--не выбрано--"}
                    </option>
                    {algorithmList.map((algorithm, index) => (
                        <option
                            key={`algorithm-list-option-${algorithm.name}-${index}`}
                            value={algorithm.id}
                        >
                            {algorithm.name}
                        </option>
                    ))}
                </Select>
            )}
        />
    );
}
