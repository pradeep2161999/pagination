export const userListRouterOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            Name: { type: "string" },
            Email: { type: "string" },
            Role: { type: "string" },
            book: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  BookName: { type: "string" },
                  BookAuthor: { type: "string" },
                  Description: { type: "string" },
                },
              },
            },
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
