export const userCreateRouterOpts = {
  schema: {
    body: {
      type: "object",
      required: ["Name","Email","Role"],
      properties: {
        Name: { type: "string" },
        Email: { type: "string" },
        Role: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
          Name: { type: "string" },
          Email: { type: "string" },
          Role: { type: "string" },
        },
      },
    },
  },
};
