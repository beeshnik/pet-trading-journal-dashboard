import { forwardRef, type ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
    return <select ref={ref} {...props}>
        {props.children}
    </select>;
});
