// import { getUser } from "../../services/user.services";
import { FastifyInstance } from "fastify";

import { IncomingMessage, Server, ServerResponse } from "http";

import {
  list,
  create,
  update,
  destroy,
} from "../../controllers/user.controller";

function userRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.get("/user", list);
  fastify.post("/user", create);
  fastify.put("/user/:id", update);
  fastify.delete("/user/:id", destroy);
  next();
}
export default userRoutes;
