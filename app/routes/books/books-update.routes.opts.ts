export const bookUpdateRouterOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        BookName: { type: "string" },
        BookAuthor: { type: "string" },
        Description: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
          BookName: { type: "string" },
          BookAuthor: { type: "string" },
          Description: { type: "string" },
          userId: { type: "number" },
        },
      },
    },
  },
};
