import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
    schemaFile: "http://localhost:3006/api/openapi.json",
    apiFile: "./src/shared/config/baseApi.ts",
    apiImport: "baseApi",
    outputFile: "./src/shared/api/generatedApi.ts",
    // exportName: "petApi",
    hooks: true,
};

export default config;
