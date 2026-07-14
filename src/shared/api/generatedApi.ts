import { baseApi as api } from "./baseApi";
export const addTagTypes = ["Trades", "Algorithms"] as const;
const injectedRtkApi = api
    .enhanceEndpoints({
        addTagTypes,
    })
    .injectEndpoints({
        endpoints: (build) => ({
            getTrades: build.query<GetTradesApiResponse, GetTradesApiArg>({
                query: () => ({ url: `/trades` }),
                providesTags: ["Trades"],
            }),
            postTrades: build.mutation<PostTradesApiResponse, PostTradesApiArg>(
                {
                    query: (queryArg) => ({
                        url: `/trades`,
                        method: "POST",
                        body: queryArg.createTradeDto,
                    }),
                    invalidatesTags: ["Trades"],
                },
            ),
            getAlgorithms: build.query<
                GetAlgorithmsApiResponse,
                GetAlgorithmsApiArg
            >({
                query: () => ({ url: `/algorithms` }),
                providesTags: ["Algorithms"],
            }),
        }),
        overrideExisting: false,
    });
export { injectedRtkApi as enhancedApi };
export type GetTradesApiResponse = /** status 200 Успешно */ Trade[];
export type GetTradesApiArg = void;
export type PostTradesApiResponse = unknown;
export type PostTradesApiArg = {
    createTradeDto: CreateTradeDto;
};
export type GetAlgorithmsApiResponse = /** status 200 Успешно */ Algorithm[];
export type GetAlgorithmsApiArg = void;
export type Algorithm = {
    id: string;
    name: string;
    type: string;
};
export type Trade = {
    id: string;
    instrument: string;
    openDate: string;
    closeDate: string;
    pnl: number;
    algorithm: Algorithm;
};
export type CreateTradeDto = {
    instrument: string;
    openDate: string;
    closeDate: string;
    pnl: number;
    algorithmId: string;
};
export const {
    useGetTradesQuery,
    usePostTradesMutation,
    useGetAlgorithmsQuery,
} = injectedRtkApi;
