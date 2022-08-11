export const userDeleteRouterOpts = {
    schema: {
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "number" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            msg: { type: "array", items: { type: "string" } },
          },
        },
      },
    },
  };
  