import * as dotenv from "dotenv";
import build from "./application";
dotenv.config({ path: `${__dirname}/../.env` });
const fastify = build();

// fastify.register(require("./routes/books/books.routes"));
// fastify.register(require("./routes/users/users.routes"));
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
