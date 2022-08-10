import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import {
  create,
  update,
  destroy,
  listAll,
} from "../../controllers/book.controller";

function bookRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
 
  fastify.post("/book/:userId", create);
  fastify.get("/books", listAll);
  fastify.put("/book/:id/:bookId", update);
  fastify.delete("/book/:id/:bookId", destroy);
  next();
}
export default bookRoutes;
