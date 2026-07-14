import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function getErrorMessage(err: FetchBaseQueryError | SerializedError): string {
    if ('status' in err) {
        return String(err.data);
    } else {
        return err.message || "";
    }
}
