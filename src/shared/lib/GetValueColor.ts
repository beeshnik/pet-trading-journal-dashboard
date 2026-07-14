export type colorValue = "success" | "warning" | "error";

export function getValueColor(value: number) {
    if (value > 0) {
        return "success"
    } 
    else if (value < 0) {
        return "error";
    }
    return "warning";
}