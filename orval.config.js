module.exports = {
  "json-server-timeentries": {
    output: {
      mode: "single",
      client: "react-query",
      target: "./src/api/time-entries.ts",
      // schemas: "./src/model",
      mock: true,
      override: {
        useDates: true,
      },
    },
    input: {
      target: "./json-server/swagger.yaml",
    },
  },
  zod: {
    output: {
      mode: "single",
      client: "zod",
      target: "./src/api/time-entries-zod.ts",
      // schemas: "./src/model",
      mock: true,
      override: {
        useDates: true,
      },
    },
    input: {
      target: "./json-server/swagger.yaml",
    },
  },
};
