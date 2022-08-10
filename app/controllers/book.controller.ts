import { FastifyReply, FastifyRequest } from "fastify";
import { add, edit, erase, list } from "../services/book.services";
import { BookAttributes } from "../types";
import { UserParams, BookParams } from "../types/user-controller";

async function create(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as BookAttributes;
  //console.log("--------------", req.params);
  //console.log("=--------------->", attrs);
  const { userId } = req.params as { userId: number };
  //console.log("-------------------------------------", userId);
  //console.log("-----------------------------",id);
  return add(attrs, userId)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}
async function listAll(req: FastifyRequest, reply: FastifyReply) {
  return list()
    .then((books) => {
      reply.status(200).send(books);
    })
    .catch((err) => {
      reply.status(400).send({ err: err });
    });
}
async function update(req: FastifyRequest, reply: FastifyReply) {
  //   console.log("req------------------------------------------------", req.body);
  //   console.log("params---------------------------", req.params);
  const attrs = req.body as BookAttributes;
  const { userId, bookId } = req.params as BookParams;
  return edit(attrs, bookId)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

async function destroy(req: FastifyRequest, reply: FastifyReply) {
  // console.log("req------------------------------------------------", req.body);
  // console.log("params---------------------------", req.params);
  const { userId, bookId } = req.params as BookParams;
  const user = await erase(bookId);
  return user;
}

export { create, update, destroy, listAll };
