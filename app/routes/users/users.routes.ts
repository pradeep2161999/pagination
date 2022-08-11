// import { getUser } from "../../services/user.services";
import { FastifyInstance } from "fastify";

import { IncomingMessage, Server, ServerResponse } from "http";

import {
  list,
  create,
  update,
  destroy,
} from "../../controllers/user.controller";
import { userCreateRouterOpts } from "./users-create.routes.opts";
import { userDeleteRouterOpts } from "./users-delete.routes.opts";
import { userListRouterOpts } from "./users-list.routes.opts";
import { userUpdateRouterOpts } from "./users-update.routes";

function userRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.get("/user", userListRouterOpts, list);
  fastify.post("/user",userCreateRouterOpts, create);
  fastify.put("/user/:id", userUpdateRouterOpts, update);
  fastify.delete("/user/:id", userDeleteRouterOpts, destroy);
  next();
}
export default userRoutes;
