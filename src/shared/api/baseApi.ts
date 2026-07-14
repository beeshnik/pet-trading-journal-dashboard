import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { defaultApi } from "@shared/config";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: defaultApi }),
    endpoints: () => ({}),
});
