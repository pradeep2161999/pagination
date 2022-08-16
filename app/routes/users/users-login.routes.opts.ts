export const userLoginRouterOpts = {
    schema: {
      body: {
        type: "object",
        required: ["Email","password"],
        properties: {
            Name: { type: "string" },
            Email: { type: "string" },
            Role: { type: "string" },
            password:{type:"string"},
            token:{type:"string"},
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
  