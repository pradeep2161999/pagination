import { FastifyReply, FastifyRequest } from "fastify";
import { add, edit, erase, list } from "../services/book.services";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controller";
import { BookParams } from "../types/book-controller";

 function create(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as BookAttributes;
  
  const  {userId}  = req.params as {userId:number};
  //console.log("--------------", req.params);
  //console.log("=--------------->", attrs);
  //console.log("userId-------------------------------------", userId);
  return add(attrs, userId)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}
 function listAll(req: FastifyRequest, reply: FastifyReply) {
  return list()
    .then((books) => {
      reply.status(200).send(books);
    })
    .catch((err) => {
      reply
        .status(400)
        .send({ errors: ["Error occured while getting list of books"] });
    });
}
 function update(req: FastifyRequest, reply: FastifyReply) {
  //   console.log("req------------------------------------------------", req.body);
  //console.log("params---------------------------", req.params);

  const attrs = req.body as BookAttributes;
  const {bookId } = req.params as BookParams;
  //console.log("bookId------------------------------------------", bookId);
  return edit(attrs, bookId)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

async function destroy(req: FastifyRequest, reply: FastifyReply) {
  //console.log("req------------------------------------------------", req.body);
  //console.log("params---------------------------", req.params);
  const  {bookId}  = req.params as BookParams;
  //console.log("bookId-----------------------------------------------",bookId);

  const user = await erase(bookId);
  reply.status(200).send({ message: ["Book deleted sucessfully"] });
}

export { create, update, destroy, listAll };
