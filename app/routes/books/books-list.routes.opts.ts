export const listBookRouterOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            BookName: { type: "string" },
            BookAuthor: { type: "string" },
            Description: { type: "string" },
            userId:{type:"number"}
          },
        },
      },
      400: {
        type: "object",
        properties: {
          errors: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
};
