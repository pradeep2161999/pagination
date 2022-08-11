export const bookDeleteRouterOpts = {
  schema: {
    params: {
      type: "object",
      //required: ["id"],
      properties: {
        id: { type: "number" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
};
