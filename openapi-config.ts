import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
    schemaFile: "http://localhost:3006/api/openapi.json",
    apiFile: "./src/shared/api/baseApi.ts",
    apiImport: "baseApi",
    outputFiles: {
        "./src/shared/api/generatedApi.ts": {
            tag: true,
        },
    },
    // exportName: "petApi",
    hooks: true,
};

export default config;
